// Rule-based responder: dicek duluan sebelum pesan dilempar ke AI.
// Edit array RULES di bawah sesuai FAQ Apron Kitchen (harga, alamat, jam operasional, dll).

const RULES = [
  {
    keywords: ['halo', 'hai', 'hello', 'hi'],
    reply: 'Halo, terima kasih sudah menghubungi Apron Kitchen! Ada yang bisa kami bantu? 😊',
  },
  {
    keywords: ['harga', 'price', 'list harga', 'katalog', 'pricelist'],
    reply: 'Untuk daftar harga produk terbaru, mohon tunggu sebentar ya, tim kami akan kirimkan katalog & pricelist-nya.',
  },
  {
    keywords: ['alamat', 'lokasi', 'dimana', 'kantor'],
    reply: 'Apron Kitchen (by Pusat Bahan Dapur) berbasis di Jakarta, Indonesia. Untuk alamat kunjungan/pengiriman detail, admin kami akan bantu infokan.',
  },
  {
    keywords: ['partner', 'kerja sama', 'kerjasama', 'jadi reseller', 'distributor', 'jadi mitra'],
    reply: 'Terima kasih sudah tertarik menjadi mitra Apron Kitchen! Tim kami akan menghubungi Anda untuk membahas peluang kerja sama B2B/retail.',
  },
  {
    keywords: ['admin', 'cs', 'customer service', 'komplain'],
    reply: 'Baik, pesan Anda akan diteruskan ke tim kami. Mohon tunggu, admin akan segera membalas.',
  },
];

/**
 * Cari balasan rule-based berdasarkan isi pesan.
 * @param {string} text - isi pesan masuk (belum di-lowercase)
 * @returns {string|null} balasan jika ada rule yang cocok, null jika tidak ada
 */
function matchRule(text) {
  if (!text) return null;
  const lower = text.toLowerCase();
  for (const rule of RULES) {
    if (rule.keywords.some((kw) => lower.includes(kw))) {
      return rule.reply;
    }
  }
  return null;
}

module.exports = { matchRule, RULES };
