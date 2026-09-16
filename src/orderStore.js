// Penyimpanan order sederhana berbasis file JSON (tanpa database — cocok untuk skala kecil).
// Pola sama dengan site/server/src/orderStore.js, tapi terpisah karena bot & site adalah
// 2 proses/service Railway yang berbeda.
const fs = require("node:fs");
const path = require("node:path");

const DATA_DIR = path.join(__dirname, "..", "data");
const DATA_FILE = path.join(DATA_DIR, "orders.json");

let writeQueue = Promise.resolve();

function ensureStore() {
  if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });
  if (!fs.existsSync(DATA_FILE)) fs.writeFileSync(DATA_FILE, "{}", "utf8");
}

function readAll() {
  ensureStore();
  try {
    return JSON.parse(fs.readFileSync(DATA_FILE, "utf8"));
  } catch {
    return {};
  }
}

function writeAll(orders) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(orders, null, 2), "utf8");
}

function saveOrder(order) {
  writeQueue = writeQueue.then(() => {
    const orders = readAll();
    orders[order.merchantOrderId] = order;
    writeAll(orders);
  });
  return writeQueue;
}

/** Cari order lewat field lain (mis. mayarTransactionId). */
function findOrderBy(predicate) {
  const orders = readAll();
  return Object.values(orders).find((order) => predicate(order)) || null;
}

function getPendingOrders() {
  const orders = readAll();
  return Object.values(orders).filter((order) => order.status === "pending");
}

function updateOrderStatus(merchantOrderId, patch) {
  writeQueue = writeQueue.then(() => {
    const orders = readAll();
    if (!orders[merchantOrderId]) return;
    orders[merchantOrderId] = { ...orders[merchantOrderId], ...patch, updatedAt: new Date().toISOString() };
    writeAll(orders);
  });
  return writeQueue;
}

module.exports = { saveOrder, findOrderBy, getPendingOrders, updateOrderStatus };
