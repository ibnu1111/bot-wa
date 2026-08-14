const { GoogleGenerativeAI } = require('@google/generative-ai');
const { APRON_KITCHEN_KNOWLEDGE } = require('./knowledge');

const apiKey = process.env.GEMINI_API_KEY;
const modelName = process.env.GEMINI_MODEL || 'gemini-3.5-flash-lite';

if (!apiKey) {
  throw new Error('GEMINI_API_KEY belum di-set. Isi file .env terlebih dahulu.');
}

const genAI = new GoogleGenerativeAI(apiKey);

// Info di bawah jadi satu-satunya sumber fakta bagi AI — cegah halusinasi di luar data ini.
const SYSTEM_PROMPT = `Kamu adalah asisten customer service WhatsApp untuk Apron Kitchen.
Jawab singkat, ramah, dan dalam Bahasa Indonesia, HANYA berdasarkan informasi resmi berikut:

${APRON_KITCHEN_KNOWLEDGE}

Jika pelanggan menanyakan hal di luar informasi di atas (mis. harga pasti, stok, status pesanan),
jangan mengarang jawaban — arahkan untuk menunggu dihubungi admin.`;

const model = genAI.getGenerativeModel({ model: modelName, systemInstruction: SYSTEM_PROMPT });

/**
 * Minta balasan dari Gemini untuk pesan yang tidak cocok rule-based apapun.
 * @param {string} userText - isi pesan pelanggan
 * @returns {Promise<string>} balasan AI
 */
async function getAiReply(userText) {
  const result = await model.generateContent(userText);
  const text = result.response.text();
  return text ? text.trim() : 'Maaf, saya belum bisa memproses pesan itu. Admin akan segera membantu.';
}

module.exports = { getAiReply };
