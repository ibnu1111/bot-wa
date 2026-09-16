require('dotenv').config();
const path = require('path');
const pino = require('pino');
const qrcode = require('qrcode-terminal');
const {
  default: makeWASocket,
  useMultiFileAuthState,
  fetchLatestBaileysVersion,
  DisconnectReason,
} = require('@whiskeysockets/baileys');
const { Boom } = require('@hapi/boom');
const { matchRule } = require('./rules');
const { getAiReply } = require('./ai');
const { startQrServer, setQr, setStatus } = require('./qr-server');
const orderFlow = require('./orderFlow');

const AUTH_DIR = path.join(__dirname, '..', 'auth_info');
const logger = pino({ level: 'silent' });

// Nomor pelanggan yang lagi "dipegang" admin manual (setelah AI eskalasi) — bot berhenti
// auto-reply di chat ini sampai admin balas manual dari WhatsApp yang sama (lihat messages.upsert).
const pausedJids = new Set();
const HANDOFF_MESSAGE = 'Mohon kesabarannya menunggu ya, Ari akan sambungkan ke Human Advisor kami 🙏';

// Nomor pelanggan yang sudah pernah dapat pesan opening/kenalan — script ini cuma dikirim
// SEKALI di awal percakapan, apapun isi pesan pertama customer.
const greetedJids = new Set();
// Nomor yang barusan dapat opening dan pesan berikutnya masih ditunggu sebagai pilihan menu (1-5).
const pendingMenuChoiceJids = new Set();

const OPENING_MESSAGE = `Hai Kak, Selamat Datang di Apron Kitchen Official WhatsApp Business Store 👋
Aku *Ari*, AI Food Advisor dari Apron Kitchen yang siap bantu Kakak cari sauce yang paling cocok untuk kebutuhan makan Kakak ❤️

Kakak lagi cari yang mana nih? Ketik nomornya ya:

1. Salad & Healthy Eating
2. Saus Masak & Condiment Lainnya
3. Pesanan untuk Birthday/Event
4. Pesanan B2B (HOREKA)
5. Complain ke Customer Service`;

// Balasan singkat setelah customer pilih menu 1-3 (lanjut ngobrol biasa/AI sesudahnya).
const MENU_CATEGORY_REPLIES = {
  1: 'Siap Kak! Untuk Salad & Healthy Eating, favorit banyak pelanggan itu Roasted Sesame Dressing & Italian Vinaigrette Dressing 🥗 Ada rasa atau kebutuhan tertentu yang Kakak cari?',
  2: 'Siap Kak! Untuk Saus Masak & Condiment lainnya, best seller kita ada Honey Garlic Sauce, Pesto Sauce, sama Mushroom Sauce 🍳 Mau tau lebih detail yang mana?',
  3: 'Wah seru, Kak! Untuk pesanan Birthday/Event, boleh info dulu kira-kira jumlah tamu/kebutuhannya, biar Ari bisa bantu rekomendasikan yang pas 🎉',
};
// Menu 4 & 5 langsung disambungkan ke admin manual, tidak dijawab AI.
const MENU_HANDOFF_OPTIONS = new Set([4, 5]);

/** Cocokkan balasan customer ke pilihan menu 1-5 (angka di awal, atau kata kunci). */
function matchMenuOption(text) {
  const trimmed = text.trim().toLowerCase();
  const leadingDigit = trimmed.match(/^([1-5])\b/);
  if (leadingDigit) return Number(leadingDigit[1]);
  if (/salad|healthy/.test(trimmed)) return 1;
  if (/condiment|saus masak/.test(trimmed)) return 2;
  if (/birthday|event/.test(trimmed)) return 3;
  if (/b2b|horeka|horeca/.test(trimmed)) return 4;
  if (/komplain|complain|customer service|\bcs\b/.test(trimmed)) return 5;
  return null;
}

/** @returns {Promise<boolean>} true kalau ini kontak pertama (opening sudah dikirim, selesai). */
async function sendOpeningIfFirstContact(sock, remoteJid) {
  if (greetedJids.has(remoteJid)) return false;
  greetedJids.add(remoteJid);
  pendingMenuChoiceJids.add(remoteJid);
  await sock.sendMessage(remoteJid, { text: OPENING_MESSAGE });
  console.log(`[opening terkirim] ${remoteJid}`);
  return true;
}

/** @returns {Promise<boolean>} true kalau pilihan menu 1-5 sudah dijawab (selesai, jangan lanjut ke AI). */
async function handleMenuChoice(sock, remoteJid, text) {
  if (!pendingMenuChoiceJids.has(remoteJid)) return false;
  pendingMenuChoiceJids.delete(remoteJid);

  const option = matchMenuOption(text);
  if (MENU_HANDOFF_OPTIONS.has(option)) {
    pausedJids.add(remoteJid);
    await sock.sendMessage(remoteJid, { text: HANDOFF_MESSAGE });
    console.log(`[handoff dari menu] ${remoteJid}`);
    return true;
  }
  if (option) {
    await sock.sendMessage(remoteJid, { text: MENU_CATEGORY_REPLIES[option] });
    console.log(`[menu ${option} terjawab] ${remoteJid}`);
    return true;
  }
  return false; // tidak cocok pilihan manapun -> lanjut diproses seperti pesan biasa
}

/** Alur pemesanan dicek duluan, baru rule-based, baru AI (dengan eskalasi ke admin kalau perlu). */
async function getFallbackReply(remoteJid, text) {
  let reply = await orderFlow.handleMessage(remoteJid, text);
  if (reply) return reply;

  reply = matchRule(text);
  if (reply) return reply;

  try {
    const aiResult = await getAiReply(text);
    if (aiResult.escalate) {
      pausedJids.add(remoteJid);
      return HANDOFF_MESSAGE;
    }
    return aiResult.text;
  } catch (err) {
    console.error('Gagal memanggil AI:', err.message);
    pausedJids.add(remoteJid);
    return HANDOFF_MESSAGE;
  }
}

async function handleIncomingMessage(sock, msg) {
  const remoteJid = msg.key.remoteJid;
  if (!remoteJid || msg.key.fromMe) return;
  if (pausedJids.has(remoteJid)) return; // admin sedang balas manual, bot diam dulu

  const text =
    msg.message?.conversation ||
    msg.message?.extendedTextMessage?.text ||
    '';
  if (!text) return;

  console.log(`[pesan masuk] ${remoteJid}: ${text}`);

  if (await sendOpeningIfFirstContact(sock, remoteJid)) return;
  if (await handleMenuChoice(sock, remoteJid, text)) return;

  const reply = await getFallbackReply(remoteJid, text);
  await sock.sendMessage(remoteJid, { text: reply });
  console.log(`[balasan terkirim] ${remoteJid}: ${reply}`);
}

async function startBot() {
  const { state, saveCreds } = await useMultiFileAuthState(AUTH_DIR);
  const { version } = await fetchLatestBaileysVersion();

  const sock = makeWASocket({
    version,
    auth: state,
    logger,
    printQRInTerminal: false,
  });
  orderFlow.setSocket(sock); // dipanggil ulang tiap reconnect karena instance sock berganti

  sock.ev.on('connection.update', (update) => {
    const { connection, lastDisconnect, qr } = update;

    if (qr) {
      console.log('Scan QR code berikut lewat WhatsApp > Linked Devices:');
      qrcode.generate(qr, { small: true });
      setQr(qr);
    }

    if (connection === 'close') {
      const statusCode = new Boom(lastDisconnect?.error)?.output?.statusCode;
      const shouldReconnect = statusCode !== DisconnectReason.loggedOut;
      console.log('Koneksi terputus.', shouldReconnect ? 'Mencoba reconnect...' : 'Silakan login ulang (hapus folder auth_info).');
      setStatus(shouldReconnect ? 'reconnecting' : 'logged_out');
      if (shouldReconnect) startBot();
    } else if (connection === 'open') {
      console.log('Bot WhatsApp Apron Kitchen tersambung dan siap menerima pesan.');
      setStatus('connected');
    }
  });

  sock.ev.on('creds.update', saveCreds);

  sock.ev.on('messages.upsert', async ({ messages, type }) => {
    if (type !== 'notify') return;
    for (const msg of messages) {
      const remoteJid = msg.key.remoteJid;
      // Admin balas manual dari device WA yang sama (fromMe) -> anggap kendala sudah ditangani,
      // biarkan bot lanjut auto-reply lagi untuk pesan pelanggan berikutnya.
      if (msg.key.fromMe) {
        if (remoteJid) pausedJids.delete(remoteJid);
        continue;
      }
      await handleIncomingMessage(sock, msg);
    }
  });
}

startQrServer();
orderFlow.startPaymentPolling();
startBot().catch((err) => {
  console.error('Gagal menjalankan bot:', err);
  process.exit(1);
});
