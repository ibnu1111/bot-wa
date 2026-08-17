// Knowledge base Apron Kitchen — dipakai sebagai konteks (grounding) untuk system prompt Gemini,
// diambil dari konten resmi di site/index.html (hasil ekstraksi PDF company profile), template chat
// customer service (bot/knowledge/TEMPLATE CHAT .docx), database produk resmi tim
// (bot/knowledge/Apron_Kitchen_Product_Knowledge_Clean.xlsx), dan Q&A retail
// (bot/knowledge/QNA Retail Apron Kitchen.xlsx).
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

VARIAN SALAD DRESSING (14 RASA) — HERO PRODUCT
- Italian Vinaigrette — asam, asin, segar, rempah Italia (pakai cuka apel).
- Yuzu Vinaigrette — asam lembut & manis segar, aroma yuzu/lemon (pakai air perasan jeruk lemon, bukan cuka apel; lebih mild dari Italian Vinaigrette).
- Roasted Sesame — asam, manis, gurih, aroma wijen panggang dominan.
- Caesar — asin, segar, creamy gurih keju.
- Mango Vinaigrette — asam-manis, aroma mangga harum.
- Creamy Thai — asin, asam, gurih, creamy, rasa kacang & rempah khas Thailand.
- Honey Mustard — manis, sedikit asam, creamy, aroma mustard; cocok untuk yang tidak suka rasa asam kuat.
- Spicy Soy — asin, manis, pedas, gurih, aroma wijen & kecap asin (umami).
- Spicy Ranch — pedas, asin, creamy kental; untuk pecinta pedas & saus creamy.
- Thousand Island — asam segar, asin gurih, creamy kental, cita rasa onion manis.
- Golden Oasis — asin, gurih, creamy, rempah Timur Tengah yang bold.
- Capri Basil — manis, aromatik, fruity khas buah tropikal Italia.
- Uji Matcha — creamy, umami, earthy, zesty, 100% pure Uji Matcha powder.
- Kyoto Matcha Sesame — manis, creamy, umami, aroma wijen panggang + matcha.
- Spicy Creamy Thai — creamy, gurih, Thai-inspired, dan pedas bold; versi pedas dari Creamy Thai.

PANDUAN REKOMENDASI RASA SALAD DRESSING (berdasarkan preferensi pelanggan)
- Suka creamy & cheesy → Caesar.
- Suka fresh & light → Italian Vinaigrette.
- Suka fresh tapi fruity → Mango Vinaigrette.
- Tidak suka rasa asam kuat → Yuzu Vinaigrette, Honey Mustard, Caesar, Spicy Ranch, Roasted Sesame (hindari Italian Vinaigrette).
- Suka gurih aroma wijen → Roasted Sesame.
- Suka pedas + umami/kecap asin → Spicy Soy.
- Suka pedas + creamy kental → Spicy Ranch.
- Suka creamy rasa Thailand → Creamy Thai.
- Suka creamy rasa onion manis → Thousand Island.
- Suka bold & rempah Timur Tengah → Golden Oasis.
- Suka fruity & aromatik ala Italia → Capri Basil.
- Suka earthy/umami matcha → Uji Matcha; suka manis-creamy-sesame matcha → Kyoto Matcha Sesame.
- Suka creamy Thai-inspired dan pedas → Spicy Creamy Thai; kalau tidak suka pedas → Creamy Thai biasa.
- Cocok untuk kondisi GERD/asam lambung: hindari asam, pedas, berminyak, rokok, alkohol — rekomendasikan Mango Vinaigrette atau Roasted Sesame (paling manis).
- Untuk program diet: sarankan pakai 1/2 serving atau 2 sdm dressing saja per porsi.

PAIRING SALAD DRESSING DENGAN MAKANAN (tidak hanya untuk salad)
- Ayam/grilled chicken → Honey Mustard, Caesar, Spicy Ranch.
- Sandwich → Thousand Island, Honey Mustard, Caesar.
- Wrap → Creamy Thai, Spicy Ranch, Spicy Soy.
- Potato → Roasted Sesame, Caesar, Spicy Ranch.
- Egg → Thousand Island, Caesar, Spicy Soy.
- Salad sayur → Italian Vinaigrette, Mango Vinaigrette, Roasted Sesame.
- Rice bowl → Spicy Soy, Golden Oasis, Creamy Thai.

KATALOG PRODUK LAINNYA (di luar salad dressing)
- Mayo & Dipping Sauce: Garlic Mayo, Spicy Mayo, Wasabi Mayo, Cheese Mayo, Mentaiko Mayo, Tartar Mayo, Truffle Mayo, dll.
- Cooking Sauce: Bulgogi, Teriyaki, Yakiniku, Honey Garlic, Kungpao, Blackpepper, Salted Egg, Japanese Curry, Sweet & Sour, Saus Padang, Ayam Goreng Mentega, BBQ, Orange Sauce, dll.
- Pasta & Western Sauce: Marinara, Pesto, Carbonara, Creamy Cheese, Mushroom, Black Truffle Mushroom, Truffle Carbonara, Truffle Pate.
- Japanese/Asian: Tori Paitan Ramen Base, Collagen Broth, Sukiyaki, Japanese Curry, Yakiniku, Teriyaki, Sushi Sauce, Mala Seasoning Oil.
- Sambal, Seasoning & Bumbu: Chili Crunch Low Calorie, Sambal Hijau Setan, Sambal Terasi, Chicken Seasoning, Steak Seasoning, Bumbu Dasar Merah/Kuning/Putih, Bawang Goreng, dll.
- Butter, Spread & Breakfast: Garlic Herbs Butter, Truffle Herbs Butter, Kaya Jam, Gluten Free Pancake Mix, Ube Mochi Pancake Mix.
- Topping & Ready-to-Eat: Garlic Croutons, Italian Meatball, Italian Meat Lasagna, Mac & Cheese, Spaghetti Brûlée, dll.

PRODUK BEST SELLER PER KATEGORI
- Salad Dressing: Italian Vinaigrette.
- Saus Masak khas Asia: Honey Garlic.
- Saus Masak ala Western: Pesto Sauce.
- Mayo/Condiments untuk cocolan: Garlic Mayo.
- Kalau pelanggan tanya "produk apa yang best seller", tanya balik dulu mereka lebih suka masak, salad dressing, atau cari condiments/cocolan untuk snacking, baru arahkan ke best seller kategori yang sesuai.

CARA PENYIMPANAN PRODUK
- Semua saus Apron wajib disimpan di chiller/kulkas, KECUALI: Mushroom, Pesto, Carbonara, Salted Egg, Creamy Cheese, dan Black Truffle — wajib disimpan di freezer.
- Produk ready-to-eat (Lasagna, Mac & Cheese, Chicken Wings, dll) wajib disimpan di freezer.
- Produk 100% tanpa pengawet: masa simpan di suhu ruangan maksimal 5-7 hari.
- Varian yang mengandung cuka (mis. salad dressing vinaigrette) aman di suhu ruangan hingga 10 hari karena cuka berfungsi sebagai pengawet alami — namun begitu paket sampai tujuan, tetap sarankan pelanggan langsung simpan di kulkas.
- Indikasi kerusakan pada salad dressing: warna berubah coklat kehitaman & berbau busuk; saus bergas/meledak saat dibuka; ada titik-titik putih di vinaigrette (tanda jamur).

INFORMASI KALORI SALAD DRESSING (per serving 30 gram)
- Italian Vinaigrette: 150 kal
- Caesar: 57 kal
- Roasted Sesame: 55 kal
- Sweet Mango Vinaigrette: 112 kal
- Creamy Thai: 66 kal
- Spicy Soy: 98 kal
- Spicy Ranch: 91 kal
- Capri Basil: 88 kal
- Golden Oasis: 74 kal
- Thousand Island: 131 kal

CARA MEMASAK
- Saus masak non-cream: kocok saus sampai merata → tumis bawang putih/bombay dengan sedikit minyak sampai harum → masukkan saus secukupnya → tambahkan daging/ayam (atau pasta jika saus pasta) → aduk rata → koreksi rasa → sajikan.
- Saus pasta: kocok saus (untuk saus frozen, thawing/cairkan 1 jam sebelum masak) → tumis bawang putih/bombay → masukkan saus → rebus spaghetti/pasta al dente 5-6 menit, tiriskan → campur protein & pasta ke saus, aduk rata → koreksi rasa → sajikan.
- Collagen broth: 1 liter collagen dicampur air 500-800ml, lalu koreksi rasa sesuai selera (garam, gula, merica).
- Memanaskan Lasagna: microwave — keluarkan dari kemasan alumunium, panaskan 2-3 menit di suhu ±100°C; atau oven — preheat, buka tutup kemasan, panggang 5-6 menit di suhu 180°C.
- Kaldu sayur pakai air kaldu buatan sendiri; kaldu ayam pakai merek Jays non-MSG (kemungkinan tetap ada perisa, sodium, dan gula).
- Ukuran Pasta Cake: diameter 20cm, tinggi ±6.5cm, berat 1800g, porsi untuk 8-10 orang (medium).

KEBIJAKAN PENGIRIMAN
- Cutoff pesanan reguler: masuk setelah pukul 14:00 WIB dikirim keesokan harinya.
- Cutoff pesanan Instant & Same Day: pukul 16:00 WIB, setelah itu diproses & dikirim hari berikutnya (kalau bayar sebelum pukul 12:00 umumnya bisa dikirim di hari yang sama). Pengiriman instant dilakukan via Gojek/Grab.
- Produk saus frozen/cream (Mushroom, Pesto, Carbonara, Salted Egg, Creamy Cheese, Black Truffle) tidak bisa dikirim dengan kurir reguler — berisiko rusak di jalan dan bisa ditolak kurir. Sarankan kurir Sameday/Instant, atau Paxel (kurir khusus pendingin) untuk luar kota — catatan: Shopee saat ini belum bekerja sama resmi dengan Paxel.
- Beberapa varian (mis. Caesar, Spicy Ranch) bisa dinonaktifkan sementara untuk pengiriman kurir reguler — kalau ini terjadi, arahkan pelanggan checkout pakai Sameday atau Paxel.

KEBIJAKAN KOMPLAIN & REFUND
- Kerusakan akibat kelalaian kurir (mis. tutup patah) pada pengiriman reguler bebas ongkir tanpa asuransi bukan tanggung jawab toko — arahkan pelanggan klaim ke kurir pengiriman (kerja sama dengan Shopee), wajib sertakan video unboxing sebagai bukti.
- Toko hanya bertanggung jawab kalau ada kerusakan internal produk: kebusukan, segel/kemasan terbuka dari awal, dll.
- Kalau produk seharusnya hanya bisa dikirim sameday/instant tapi terlanjur dipesan reguler (karena sistem tidak bisa membatasi), setelah paket diterima arahkan pelanggan mengajukan pengembalian dana untuk produk tersebut.
- Kalau stok habis akibat lonjakan pesanan, arahkan pelanggan mengajukan komplain resmi setelah paket diterima agar bisa diproses refund.

KETENTUAN RESELLER
- Wajib pembelian minimal Rp750.000 untuk mendapatkan harga reseller.
- Wajib menyimpan produk dengan benar sesuai ketentuan (chiller/freezer sesuai jenis produk) saat dijual/didisplay.
- Tidak boleh mengubah kemasan produk.

CATATAN SUHU PENYIMPANAN
- Chiller/kulkas: 1°C – 4°C.
- Freezer: -18°C.

DATABASE PRODUK TERVERIFIKASI PER SKU (sumber resmi tim — utamakan data ini kalau ada info lain yang beda)

Italian Vinaigrette (Salad Dressing, Western)
- Target customer: suka salad fresh/tangy/savory, healthy eating/meal prep, pemula yang cari dressing serbaguna.
- Keunggulan: fresh, tangy, savory ringan & menyegarkan; praktis langsung pakai; versatile untuk salad, pasta salad, marinade.
- Cocok untuk: green salad, pasta salad, chicken salad, vegetable salad, marinade ayam/seafood.
- Cara pakai: tuang langsung ke salad atau untuk marinade; kocok/aduk dulu agar tercampur merata.
- Cross-sell: Garlic Croutons, Pesto Sauce. Alternatif/upsell: Creamy Thai atau Spicy Creamy Thai kalau customer mau creamy.
- Kemasan 250 ml, Origin Western, MPASI-friendly, Gluten Free, tidak pedas.
- Penyimpanan: kulkas 1°C–4°C, masa simpan 6 bulan, semua jenis pengiriman (reguler/instant/sameday) bisa.

Creamy Thai (Salad Dressing, Asia)
- Target customer: suka creamy/gurih/sedikit manis, mau salad/sandwich/rice bowl lebih rich & flavorful.
- Keunggulan: creamy, savory, sedikit manis, Thai-inspired, praktis & versatile.
- Cocok untuk: salad, chicken salad, sandwich, rice bowl, wrap, dipping sauce.
- Cara pakai: gunakan langsung sebagai dressing/sauce/dipping sauce.
- Cross-sell: Garlic Mayo, Honey Mustard, Garlic Croutons. Upsell: Spicy Creamy Thai kalau customer suka sensasi pedas.
- Kemasan 250 ml, Origin Asia, MPASI-friendly, Gluten Free, tidak pedas.
- Penyimpanan: kulkas 1°C–4°C, masa simpan 6 bulan, semua jenis pengiriman bisa.

Spicy Creamy Thai (Salad Dressing, Asia)
- Target customer: suka creamy + pedas, pecinta spicy & fusion Asian flavor, mau rasa lebih bold.
- Keunggulan: creamy + Thai-inspired + pedas bold; versatile sebagai dressing/sauce.
- Cocok untuk: salad, chicken, rice bowl, sandwich, wrap, dipping sauce, fried food.
- Cara pakai: gunakan langsung sebagai dressing/sauce/dipping sauce.
- Cross-sell: Garlic Mayo, Honey Garlic. Alternatif: Creamy Thai (versi tanpa pedas) kalau customer tidak suka pedas.
- Kemasan 250 ml, Origin Asia, TIDAK cocok untuk MPASI, Gluten Free, PEDAS.
- Penyimpanan: kulkas 1°C–4°C, masa simpan 6 bulan, semua jenis pengiriman bisa.

Honey Mustard (Salad Dressing, Western)
- Target customer: suka sweet-tangy-savory, keluarga/ibu rumah tangga cari saus praktis, suka chicken/salad/sandwich/snack dengan dipping sauce.
- Keunggulan: sweet, tangy, savory yang balanced, mudah dipadukan dengan banyak makanan.
- Cocok untuk: chicken, chicken wings, salad, sandwich, burger, wrap, snack, dipping sauce.
- Cara pakai: gunakan langsung sebagai dipping sauce/dressing/sauce.
- Cross-sell: Garlic Croutons, Italian Vinaigrette, Garlic Mayo. Upsell: Creamy Thai kalau mau karakter lebih creamy & Asian-inspired.
- Kemasan 250 ml, Origin Western, MPASI-friendly, Gluten Free, tidak pedas.
- Penyimpanan: kulkas 1°C–4°C, masa simpan 6 bulan, semua jenis pengiriman bisa.

Honey Garlic (Saus Masak, Asia)
- Kemasan 250 ml, Origin Asia, MPASI-friendly, Gluten Free, tidak pedas.
- Penyimpanan: kulkas 1°C–4°C, masa simpan 6 bulan, semua jenis pengiriman bisa.

Pesto Sauce (Saus Masak/Pasta, Western)
- Kemasan 250 ml, Origin Western, MPASI-friendly, Gluten Free, tidak pedas.
- Penyimpanan: WAJIB freezer -18°C, masa simpan 6 bulan.
- Pengiriman: HANYA bisa Instant/Sameday/Paxel (tidak bisa kurir reguler).

Garlic Mayo (Condiment/Cocolan)
- Kemasan 250 ml.
- Penyimpanan: kulkas 1°C–4°C, masa simpan 6 bulan, semua jenis pengiriman bisa.

KONTAK RESMI
- WhatsApp: 0818 0889 6959 (https://wa.me/6281808896959)
- Instagram: @Apronkitchen.official
- Lokasi: Jakarta, Indonesia
`.trim();

module.exports = { APRON_KITCHEN_KNOWLEDGE };
