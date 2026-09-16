// Wrapper tipis untuk Mayar Headless API (https://docs.mayar.id/api-reference-v2).
// Sama persis pola dengan site/server/src/mayar.js, tapi terpisah karena bot & site
// adalah 2 proses/service Railway yang berbeda (tidak bisa saling import antar folder).
// Catatan keamanan: Mayar TIDAK mengirim signature/HMAC pada webhook-nya, jadi status
// pembayaran akhir selalu diverifikasi lewat getInvoiceDetail() (API terautentikasi
// dengan API key kita sendiri), bukan dipercaya mentah-mentah dari sumber lain.

const API_KEY = process.env.MAYAR_API_KEY;
const IS_PRODUCTION = process.env.MAYAR_ENV === "production";
const BASE_URL = IS_PRODUCTION ? "https://api.mayar.id/hl/v2" : "https://api.mayar.io/hl/v2";

function isConfigured() {
  return Boolean(API_KEY);
}

async function request(path, options = {}) {
  const res = await fetch(`${BASE_URL}${path}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${API_KEY}`,
      ...options.headers,
    },
  });
  const data = await res.json();
  if (!res.ok || data.statusCode >= 400) {
    throw new Error(data.messages || `Mayar API gagal (HTTP ${res.status})`);
  }
  return data;
}

async function createInvoice({ name, email, mobile, description, items, expiredAt, extraData }) {
  const { data } = await request("/invoices/create", {
    method: "POST",
    body: JSON.stringify({ name, email, mobile, description, items, expiredAt, extraData }),
  });
  return data; // { id, transactionId, link, expiredAt, extraData }
}

async function getInvoiceDetail(invoiceId) {
  const { data } = await request(`/invoices/${invoiceId}`, { method: "GET" });
  return data; // { id, amount, status, transactionId, paymentUrl, ... }
}

module.exports = { isConfigured, createInvoice, getInvoiceDetail };
