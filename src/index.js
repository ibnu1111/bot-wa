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

const AUTH_DIR = path.join(__dirname, '..', 'auth_info');
const logger = pino({ level: 'silent' });

async function handleIncomingMessage(sock, msg) {
  const remoteJid = msg.key.remoteJid;
  if (!remoteJid || msg.key.fromMe) return;

  const text =
    msg.message?.conversation ||
    msg.message?.extendedTextMessage?.text ||
    '';
  if (!text) return;

  console.log(`[pesan masuk] ${remoteJid}: ${text}`);

  // Cek isi pesan: rule-based dulu, baru lempar ke AI kalau tidak ada yang cocok.
  let reply = matchRule(text);
  if (!reply) {
    try {
      reply = await getAiReply(text);
    } catch (err) {
      console.error('Gagal memanggil AI:', err.message);
      reply = 'Maaf, terjadi kendala teknis. Admin kami akan segera membalas pesan Anda.';
    }
  }

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

  sock.ev.on('connection.update', (update) => {
    const { connection, lastDisconnect, qr } = update;

    if (qr) {
      console.log('Scan QR code berikut lewat WhatsApp > Linked Devices:');
      qrcode.generate(qr, { small: true });
    }

    if (connection === 'close') {
      const statusCode = new Boom(lastDisconnect?.error)?.output?.statusCode;
      const shouldReconnect = statusCode !== DisconnectReason.loggedOut;
      console.log('Koneksi terputus.', shouldReconnect ? 'Mencoba reconnect...' : 'Silakan login ulang (hapus folder auth_info).');
      if (shouldReconnect) startBot();
    } else if (connection === 'open') {
      console.log('Bot WhatsApp Apron Kitchen tersambung dan siap menerima pesan.');
    }
  });

  sock.ev.on('creds.update', saveCreds);

  sock.ev.on('messages.upsert', async ({ messages, type }) => {
    if (type !== 'notify') return;
    for (const msg of messages) {
      await handleIncomingMessage(sock, msg);
    }
  });
}

startBot().catch((err) => {
  console.error('Gagal menjalankan bot:', err);
  process.exit(1);
});
