// Alur pemesanan lewat chat WhatsApp: menu bernomor -> nama -> email -> alamat -> konfirmasi
// -> generate invoice Mayar. State disimpan in-memory per remoteJid (cukup untuk skala kecil,
// akan reset kalau bot restart — pesanan yang sudah jadi invoice tetap aman di orderStore).
const crypto = require("node:crypto");
const { PRODUCTS, findProductByNumber, formatRupiah } = require("./products");
const mayar = require("./mayar");
const orderStore = require("./orderStore");

const EMAIL_RE = /^[^\s@]{1,64}@[^\s@]{1,255}\.[^\s@]{2,24}$/;
const TRIGGER_RE = /\b(order|pesan|mau beli)\b/i;
const CANCEL_RE = /^batal$/i;
const CONFIRM_RE = /^(ya|iya|y)$/i;
const MAX_QTY_PER_ITEM = 50;
const INVOICE_VALID_MS = 24 * 60 * 60 * 1000;

const sessions = new Map(); // remoteJid -> { step, items, name, email, address }
let sock = null;

/** Dipanggil dari index.js tiap kali socket Baileys (re)connect, supaya poller bisa kirim WA. */
function setSocket(activeSock) {
  sock = activeSock;
}

function buildMenuText() {
  const lines = PRODUCTS.map((p, i) => `${i + 1}. ${p.name} (${p.unit}) — ${formatRupiah(p.price)}`);
  return (
    `Berikut menu produk Apron Kitchen:\n\n${lines.join("\n")}\n\n` +
    `Ketik nomor produk yang mau dipesan, boleh lebih dari satu dipisah koma.\n` +
    `Format: <nomor>x<jumlah>. Contoh: 1x2, 5x1\n\nKetik *batal* kapan saja untuk membatalkan.`
  );
}

function parseItemsInput(text) {
  const tokens = text.split(",").map((t) => t.trim()).filter(Boolean);
  if (tokens.length === 0) return null;
  const items = [];
  for (const token of tokens) {
    const match = token.match(/^(\d{1,3})(?:\s*[xX]\s*(\d{1,3}))?$/);
    if (!match) return null;
    const product = findProductByNumber(Number(match[1]));
    const qty = match[2] ? Number(match[2]) : 1;
    if (!product || qty < 1 || qty > MAX_QTY_PER_ITEM) return null;
    items.push({ product, qty });
  }
  return items;
}

function orderTotal(items) {
  return items.reduce((sum, { product, qty }) => sum + product.price * qty, 0);
}

function summaryText(session) {
  const lines = session.items.map(
    ({ product, qty }) => `- ${product.name} x${qty} = ${formatRupiah(product.price * qty)}`
  );
  return (
    `Ringkasan pesanan:\n${lines.join("\n")}\nTotal: ${formatRupiah(orderTotal(session.items))}\n\n` +
    `Nama: ${session.name}\nEmail: ${session.email}\nAlamat: ${session.address}\n\n` +
    `Ketik *YA* untuk lanjut ke pembayaran, atau *BATAL* untuk membatalkan.`
  );
}

/** Baileys remoteJid formatnya "62812xxxx@s.whatsapp.net" — Mayar minta format lokal "0812xxxx". */
function phoneFromJid(remoteJid) {
  const raw = remoteJid.split("@")[0];
  return raw.startsWith("62") ? `0${raw.slice(2)}` : raw;
}

async function finalizeOrder(remoteJid, session) {
  const total = orderTotal(session.items);
  const merchantOrderId = `AKWA${Date.now()}${crypto.randomBytes(3).toString("hex").toUpperCase()}`;
  const invoiceItems = session.items.map(({ product, qty }) => ({
    quantity: qty,
    rate: product.price,
    description: `${product.name} (${product.unit})`,
  }));
  const expiredAt = new Date(Date.now() + INVOICE_VALID_MS).toISOString();

  const invoice = await mayar.createInvoice({
    name: session.name,
    email: session.email,
    mobile: phoneFromJid(remoteJid),
    description: `Pesanan WhatsApp Apron Kitchen (${merchantOrderId})`,
    items: invoiceItems,
    expiredAt,
    extraData: { merchantOrderId, address: session.address },
  });

  await orderStore.saveOrder({
    merchantOrderId,
    mayarInvoiceId: invoice.id,
    mayarTransactionId: invoice.transactionId,
    amount: total,
    items: session.items.map(({ product, qty }) => ({ id: product.id, name: product.name, price: product.price, qty })),
    customer: { name: session.name, email: session.email, address: session.address },
    remoteJid,
    status: "pending",
    createdAt: new Date().toISOString(),
  });

  return (
    `Terima kasih! Silakan selesaikan pembayaran lewat link berikut (berlaku 24 jam):\n${invoice.link}\n\n` +
    `Kami akan otomatis konfirmasi ke chat ini setelah pembayaran diterima.`
  );
}

function stepItems(session, text) {
  const items = parseItemsInput(text);
  if (!items) {
    return "Format tidak dikenali. Contoh: 1x2, 5x1 (nomor produk x jumlah). Coba lagi, atau ketik *batal*.";
  }
  session.items = items;
  session.step = "name";
  return "Baik. Sekarang, siapa nama lengkap penerima pesanan?";
}

function stepName(session, text) {
  const name = text.trim().slice(0, 100);
  if (!name) return "Nama tidak boleh kosong. Sebutkan nama lengkap penerima.";
  session.name = name;
  session.step = "email";
  return "Boleh minta alamat email untuk invoice pembayaran?";
}

function stepEmail(session, text) {
  const email = text.trim().slice(0, 100);
  if (!EMAIL_RE.test(email)) return "Email tidak valid, mohon ketik ulang (contoh: nama@email.com).";
  session.email = email;
  session.step = "address";
  return "Terakhir, alamat lengkap pengiriman?";
}

function stepAddress(session, text) {
  const address = text.trim().slice(0, 255);
  if (!address) return "Alamat tidak boleh kosong. Sebutkan alamat lengkap pengiriman.";
  session.address = address;
  session.step = "confirm";
  return summaryText(session);
}

async function stepConfirm(remoteJid, session, text) {
  if (!CONFIRM_RE.test(text.trim())) {
    return "Ketik *YA* untuk lanjut ke pembayaran, atau *BATAL* untuk membatalkan.";
  }
  sessions.delete(remoteJid);
  if (!mayar.isConfigured()) {
    return "Mohon maaf, pembayaran online belum aktif saat ini. Admin kami akan menghubungi Anda untuk proses pembayaran manual.";
  }
  try {
    return await finalizeOrder(remoteJid, session);
  } catch (err) {
    console.error("Gagal membuat invoice Mayar dari bot:", err.message);
    return "Maaf, terjadi kendala saat membuat invoice pembayaran. Admin kami akan segera membantu.";
  }
}

// Step yang balasannya sinkron (semua kecuali "confirm", yang perlu await panggilan Mayar).
const SYNC_STEP_HANDLERS = { items: stepItems, name: stepName, email: stepEmail, address: stepAddress };

/**
 * @param {string} remoteJid
 * @param {string} text
 * @returns {Promise<string|null>} balasan bot, atau null kalau pesan ini bukan bagian alur order
 *   (biar dilempar ke rule-based/AI seperti biasa oleh index.js)
 */
async function handleMessage(remoteJid, text) {
  const session = sessions.get(remoteJid);

  if (!session) {
    if (!TRIGGER_RE.test(text)) return null;
    sessions.set(remoteJid, { step: "items" });
    return buildMenuText();
  }

  if (CANCEL_RE.test(text.trim())) {
    sessions.delete(remoteJid);
    return "Pesanan dibatalkan.";
  }

  if (session.step === "confirm") return stepConfirm(remoteJid, session, text);

  const handler = SYNC_STEP_HANDLERS[session.step];
  return handler ? handler(session, text) : null;
}

/** Cek berkala order yang masih "pending" ke Mayar, lalu kirim konfirmasi WA begitu lunas. */
async function pollPendingOrders() {
  if (!mayar.isConfigured()) return;
  for (const order of orderStore.getPendingOrders()) {
    try {
      const live = await mayar.getInvoiceDetail(order.mayarInvoiceId);
      if (live.status === "paid") {
        await orderStore.updateOrderStatus(order.merchantOrderId, { status: "paid" });
        if (sock) {
          await sock.sendMessage(order.remoteJid, {
            text: `✅ Pembayaran pesanan Anda sebesar ${formatRupiah(order.amount)} sudah kami terima. Terima kasih telah berbelanja di Apron Kitchen!`,
          });
        }
      } else if (live.status === "closed") {
        await orderStore.updateOrderStatus(order.merchantOrderId, { status: "expired" });
      }
    } catch (err) {
      console.error(`Gagal cek status invoice ${order.merchantOrderId}:`, err.message);
    }
  }
}

function startPaymentPolling(intervalMs = 60_000) {
  setInterval(pollPendingOrders, intervalMs);
}

module.exports = { handleMessage, setSocket, startPaymentPolling };
