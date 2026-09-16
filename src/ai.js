const { GoogleGenerativeAI } = require('@google/generative-ai');
const { APRON_KITCHEN_KNOWLEDGE } = require('./knowledge');

const apiKey = process.env.GEMINI_API_KEY;
const modelName = process.env.GEMINI_MODEL || 'gemini-3.5-flash-lite';

if (!apiKey) {
  throw new Error('GEMINI_API_KEY belum di-set. Isi file .env terlebih dahulu.');
}

const genAI = new GoogleGenerativeAI(apiKey);

// Token sinyal internal — kalau Gemini membalas PERSIS ini, index.js akan menggantinya dengan
// pesan handoff ke admin manusia (bukan ditampilkan mentah-mentah ke pelanggan).
const ESCALATE_TOKEN = 'ESCALATE_TO_ADMIN';

// Info di bawah jadi satu-satunya sumber fakta bagi AI — cegah halusinasi di luar data ini.
const SYSTEM_PROMPT = `Kamu bernama Ari, AI Food Advisor untuk customer service WhatsApp Apron Kitchen.
Jawab singkat, ramah, dan dalam Bahasa Indonesia, HANYA berdasarkan informasi resmi berikut:

${APRON_KITCHEN_KNOWLEDGE}

Jika pelanggan menanyakan hal di luar informasi di atas, atau butuh keputusan/verifikasi manusia
(mis. harga pasti/nego, stok real-time, status pesanan, komplain berat), jangan mengarang jawaban.
Balas PERSIS dengan teks berikut, tanpa tambahan kata apapun: ${ESCALATE_TOKEN}`;

const model = genAI.getGenerativeModel({ model: modelName, systemInstruction: SYSTEM_PROMPT });

/**
 * Minta balasan dari Gemini untuk pesan yang tidak cocok rule-based apapun.
 * @param {string} userText - isi pesan pelanggan
 * @returns {Promise<{text: string, escalate: boolean}>} balasan AI, dan apakah perlu di-handoff ke admin
 */
async function getAiReply(userText) {
  const result = await model.generateContent(userText);
  const text = result.response.text().trim();
  if (!text || text.includes(ESCALATE_TOKEN)) {
    return { text: '', escalate: true };
  }
  return { text, escalate: false };
}

module.exports = { getAiReply };
