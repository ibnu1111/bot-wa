// Knowledge base Apron Kitchen — dipakai sebagai konteks (grounding) untuk system prompt Gemini,
// diambil dari konten resmi di site/index.html (hasil ekstraksi PDF company profile).
// Update file ini kalau ada info baru (produk, sertifikasi, kontak, dll) supaya jawaban AI tetap akurat.

const APRON_KITCHEN_KNOWLEDGE = `
PROFIL PERUSAHAAN
- Nama: Apron Kitchen (by Pusat Bahan Dapur), berdiri 2020 di Jakarta, Indonesia.
- Produk: saus & condiment premium tanpa pengawet (preservative-free) untuk kafe, restoran, dan dapur modern.
- Skala: dipercaya 1.000+ restoran & bisnis F&B, menjual 500.000+ produk per tahun.

VISI
Menjadi brand saus & condiment sehat paling dipercaya di Indonesia — kualitas premium, praktis, dan etis,
untuk dapur profesional maupun rumah tangga modern.

MISI
- Menyediakan produk yang mudah dipakai tanpa mengorbankan rasa/kualitas.
- Jadi mitra strategis bisnis F&B untuk efisiensi dapur.
- Mendukung gaya hidup lebih sehat lewat produk tanpa pengawet, kualitas tinggi.
- Terus berinovasi mengikuti tren pasar & kebutuhan konsumen.

PENCAPAIAN & JANGKAUAN PASAR
- Penjualan e-commerce: ~35.000 produk/bulan.
- Jangkauan Instagram: ~1 juta views/bulan.
- Jaringan B2B: 1.000+ restoran & bisnis F&B.
- Distribusi lewat retail & marketplace partner.

LAYANAN UNTUK B2B / INDUSTRI F&B
- Custom Flavor Development — tim R&D co-create saus sesuai kebutuhan mitra.
- Menu Integration Support — panduan pemakaian produk untuk efisiensi menu.
- Reliable Supply Chain — pengiriman tepat waktu, stok terjaga, kualitas konsisten.
- Scalable Solutions — cocok untuk bisnis kecil hingga chain F&B besar.

LAYANAN UNTUK DISTRIBUSI RETAIL
- Premium Product Placement, konsinyasi/resale fleksibel, dukungan marketing & promosi,
  supply chain andal, inovasi berbasis kebutuhan konsumen.

KENAPA PARTNER DENGAN APRON KITCHEN
- Konsistensi kualitas (dikembangkan chef, produksi small-batch).
- Sertifikasi keamanan pangan: Halal, BPOM, HACCP.
- Supply & packaging fleksibel, ada dukungan R&D dan peluang co-branding.
- Dukungan marketing & content co-creation, presensi digital kuat (hingga 1 juta views/bulan).
- Rekam jejak: dipercaya 1.000+ restoran & bisnis F&B.

KATEGORI PRODUK
Salad Dressing, Mayonnaise, Artisan Cooking Sauce, Seasoning Powder, Butter & Soup Base Product, Ready to Eat.

PRODUK UNGGULAN (HERO PRODUCTS)
Italian Vinaigrette Dressing, Roasted Sesame Dressing, Pesto Sauce, Mushroom Sauce, Garlic Mayo, Truffle Butter.

KONTAK RESMI
- WhatsApp: 0818 0889 6959 (https://wa.me/6281808896959)
- Instagram: @Apronkitchen.official
- Lokasi: Jakarta, Indonesia
`.trim();

module.exports = { APRON_KITCHEN_KNOWLEDGE };
