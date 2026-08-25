// Knowledge base Apron Kitchen — dipakai sebagai konteks (grounding) untuk system prompt Gemini,
// diambil dari konten resmi di site/index.html (hasil ekstraksi PDF company profile), template chat
// customer service (bot/knowledge/TEMPLATE CHAT .docx dan versi terbaru
// bot/knowledge/TEMPLATE CHAT Update.docx), database produk resmi tim
// (bot/knowledge/Apron_Kitchen_Product_Knowledge_Clean.xlsx), Q&A retail
// (bot/knowledge/QNA Retail Apron Kitchen.xlsx), dan database produk lengkap 85 SKU
// (bot/knowledge/Apron Kitchen Database Product AI.xlsm).
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
- Sertifikasi keamanan pangan: Halal Certified untuk seluruh produk olahan. Untuk status BPOM per produk,
  lihat bagian "ATURAN KLAIM SERTIFIKASI" di bawah — JANGAN klaim "sudah BPOM" untuk semua produk secara umum.
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

DATABASE PRODUK LENGKAP PER SKU (sumber resmi tim — file "Apron Kitchen Database Product AI.xlsm", 85 SKU. Utamakan data ini kalau ada info lain yang beda. Harga adalah harga referensi, bisa berubah — kalau pelanggan tanya harga pasti/stok real-time, arahkan ke admin)

### KATEGORI: SALAD DRESSING

Italian Vinaigrette (Western) — Harga sekitar Rp33.350
- Target customer: customer yang rutin makan salad, meal prep, atau sering pairing salad dengan chicken/seafood dan ingin dressing ringan untuk penggunaan sehari-hari. Cuisine affinity: Western/Italian-style. Taste preference: fresh, tangy, savory, herby/basil, non-creamy. Need: membuat salad lebih flavorful tanpa rasa heavy.
- Keunggulan: Italian-style vinaigrette dengan karakter fresh, tangy, savory dan herby. Berdasarkan ingredients, basil menjadi herbal note yang teridentifikasi. Non-creamy dan cocok untuk customer yang mencari vinaigrette yang tidak rich.
- Taste profile: Fresh, tangy, savory, herby/basil, non-creamy.
- Cocok untuk / recommended usage: green salad, chicken salad, pasta salad, grilled chicken/fish/seafood, vegetables, sandwich/wrap.
- Ingredients: Air, Minyak kedelai, Bawang putih, Cuka, Garam, Gula, Lada hitam, Daun basil.
- Kemasan 250 ml, Origin Western, MPASI: Ya, Gluten Free: Ya, Pedas: Tidak.
- Penyimpanan: kulkas 1°C – 4°C, masa simpan: 6 bulan, pengiriman: Bisa Semua jenis pengiriman reguler/ instant/ sameday.
- Cross-sell: Garlic Croutons when relevant. Alternatif/redirect: Zero Sugar Italian; Yuzu; creamy dressing by preference.

Italian Vinaigrette Zero Sugar — Harga sekitar Rp45.500
- Target customer: customer yang rutin makan salad/meal prep dan secara aktif menghindari atau mengurangi gula pada dressing. Cuisine affinity: Western/Italian-style. Taste preference: fresh, tangy, savory, herby, non-creamy. Need: zero sugar dengan sweetness ringan dari stevia.
- Keunggulan: Zero Sugar Italian Vinaigrette menggunakan stevia sebagai pemanis, sehingga memberikan alternatif bagi customer yang ingin menghindari gula pada dressing. Memiliki karakter Italian herbs yang fresh, tangy dan savory, dengan rasa manis yang ringan dan bukan tipe dressing yang dominan manis.
- Taste profile: Fresh, tangy, savory, herby/basil, lightly sweet, non-creamy. Menggunakan stevia sebagai pemanis; profil keseluruhan tidak diposisikan sebagai sweet dressing.
- Cocok untuk / recommended usage: green salad, chicken salad, grilled protein, vegetables, pasta salad, meal-prep bowl.
- Ingredients: Air, Minyak Salad, Bawang Putih, Cuka, Ekstrak Daun Stevia, Garam, Lada Hitam Daun Basil, Rempah Italia, Chia Seed.
- Cross-sell: Garlic Croutons when relevant. Alternatif/redirect: Italian Vinaigrette; Yuzu; creamy dressing.

Yuzu Vinaigrette — Harga sekitar Rp43.000
- Target customer: customer yang sering makan salad, seafood, chicken atau bowl dan suka rasa fresh/citrus sebagai cara membuat makanan terasa ringan dan refreshing. Cuisine affinity: Japanese/Asian-inspired atau modern healthy meals. Taste preference: citrusy, tangy, lightly sweet, non-creamy.
- Keunggulan: Yuzu citrus flavor yang memberikan karakter fresh, bright, dan refreshing pada makanan. Alternatif non-creamy bagi customer yang ingin dressing lebih ringan dan tidak terlalu rich. Memiliki karakter rasa yang lebih unik dibanding vinaigrette biasa sehingga dapat membuat salad sederhana terasa lebih menarik. Versatile untuk digunakan sebagai salad dressing maupun sebagai sauce/finishing untuk berbagai makanan.
- Taste profile: Citrusy, fresh, tangy, lightly sweet, refreshing. Karakter utama adalah rasa citrus/yuzu yang memberikan acidity dan aroma segar. Tidak creamy dan tidak terasa terlalu heavy. Cocok untuk customer yang menyukai rasa asam-segar dengan aroma citrus dan aftertaste yang refreshing.
- Cocok untuk / recommended usage: salad, grilled chicken, seafood, vegetables, poke-style bowl, cold noodles, wrap/sandwich.
- Ingredients: Air, Pasta Yuzu, Konsentrat Lemon, Air Perasan Lemon, Minyak Salad, Jeruk Mandarin Madu, Bawang Putih, Cuka, Rempah, Gula, Garam, Lada Hitam. Water, Yuzu Paste, Lemon Concentrate, Lemon Water, Salad Oil, Orange Pulps, Honey, Garlic, Vinegar, Herbs, Sugar, Salt, Blackpepper
- Alternatif/redirect: Italian Vinaigrette; Sweet Mango; Capri Basil.

Creamy Thai (Asia) — Harga sekitar Rp37.950
- Target customer: customer yang suka Thai/Asian food, Asian salad, chicken/seafood bowl, slaw atau dipping-style meals dan menyukai rasa kacang yang nyata. Taste preference: creamy, savory, tangy, peanut/nutty. Need: Thai-inspired sauce dengan noticeable peanut character, natural ingredients dan tanpa pengawet.
- Keunggulan: Creamy Thai-inspired dressing dengan karakter creamy, savory, tangy dan rasa kacang yang sangat noticeable. Menggunakan bahan-bahan natural dan tanpa bahan pengawet, sehingga karakter peanut/nutty menjadi salah satu pembeda utama produk.
- Taste profile: Creamy, savory, tangy, nutty/peanut, aromatic, Thai-inspired, mildly sweet/ balanced. Tekstur creamy dengan kombinasi rasa gurih dan asam yang memberikan balance. Karakter peanut/nutty dan Thai spices memberikan depth. Tidak diposisikan sebagai spicy dressing; untuk customer yang ingin pedas, arahkan ke Spicy Creamy Thai.
- Cocok untuk / recommended usage: Asian salad, chicken salad, slaw, chicken/seafood, rice bowl, noodles, spring rolls/dipping.
- Ingredients: Air, pasta kacang, kecap asin, bubuk ketumbar, jeruk nipis, garam, gula pasir, gula aren, lada hitam.
- Kemasan 250 ml, Origin Asia, MPASI: Ya, Gluten Free: Ya, Pedas: Tidak.
- Penyimpanan: kulkas 1°C – 4°C, masa simpan: 6 bulan, pengiriman: Bisa Semua jenis pengiriman reguler/ instant/ sameday.
- Alternatif/redirect: Spicy Creamy Thai; Roasted Sesame; Spicy Soy.

Spicy Creamy Thai (Asia) — Harga sekitar Rp41.500
- Target customer: customer yang suka Thai/Asian food dan secara aktif mencari creamy sauce dengan spicy kick untuk salad, bowl, noodles atau chicken/seafood. Taste preference: creamy, savory, tangy, spicy. Need: Thai-inspired creamy spicy profile.
- Keunggulan: Creamy Thai dressing dengan spicy kick yang menggabungkan rasa creamy, savory, tangy dan Thai-inspired spices. Memberikan pengalaman rasa yang lebih bold dan spicy dibanding Creamy Thai biasa.
- Taste profile: Creamy, spicy, savory, tangy, aromatic, Thai-inspired, bold. Spicy kick menjadi pembeda utama dari Creamy Thai.
- Cocok untuk / recommended usage: Asian salad, chicken/seafood, rice bowl, noodles, wrap, spring rolls/dipping.
- Ingredients: Air, Jeruk Nipis, Salad Oil, Kecap Asin, Bubuk Ketumbar, Cabai, Garam, Gula, Gula Aren, Lada hitam, Kecap Ikan, Protein Nabati.
- Kemasan 250 ml, Origin Asia, MPASI: Tidak, Gluten Free: Ya, Pedas: Ya.
- Penyimpanan: kulkas 1°C – 4°C, masa simpan: 6 bulan, pengiriman: Bisa Semua jenis pengiriman reguler/ instant/ sameday.
- Alternatif/redirect: Creamy Thai; Spicy Soy; Spicy Ranch.

Honey Mustard (Western) — Harga sekitar Rp40.250
- Target customer: customer yang baru mulai makan salad, suka rasa approachable, sering makan chicken/wrap atau ingin sauce yang mudah dipakai lintas menu. Taste preference: sweet, savory, tangy, creamy dengan honey-forward profile dan hint of mustard yang tidak dominan.
- Keunggulan: Creamy Honey Mustard dressing dengan madu asli pilihan sebagai karakter utama, dipadukan hint of mustard yang tidak terlalu dominan. Profil resminya sweet, savory, tangy dan creamy, sehingga approachable untuk pemula makan salad.
- Taste profile: Sweet, savory, tangy, creamy, honey-forward dengan hint of mustard yang mild/tidak dominan. Rasa madu menjadi karakter penting, dengan mustard sebagai penyeimbang.
- Cocok untuk / recommended usage: Mix Garden Salad; Honey Mustard Salad Wrap; Honey Mustard Chicken & Stir Vegetables; Honey Mustard Grilled Chicken; Honey Mustard Glazed Salmon.
- Ingredients: Key ingredients confirmed (bukan daftar formula lengkap): Madu asli pilihan; Mustard dengan karakter/hint yang tidak dominan.
- Kemasan 250 ml, Origin Western, MPASI: Ya, Gluten Free: Ya, Pedas: Tidak.
- Penyimpanan: kulkas 1°C – 4°C, masa simpan: 6 bulan, pengiriman: Bisa Semua jenis pengiriman reguler/ instant/ sameday.
- Cross-sell: Garlic Croutons when salad use is relevant. Alternatif/redirect: Caesar; Thousand Island; Yuzu.

Spicy Ranch — Harga sekitar Rp40.250
- Target customer: customer yang suka Western-style comfort food seperti wings, fried chicken, fries, burger atau wrap dan mencari creamy spicy sauce. Taste preference: ranch/herby, savory, tangy, spicy. Need: dipping/sauce yang familiar tetapi lebih bold.
- Keunggulan: Creamy ranch-style dressing dengan spicy kick, memadukan creamy texture, savory/herby ranch character dan rasa pedas. Menjadi alternatif bagi customer yang menyukai Ranch tetapi ingin pengalaman rasa yang lebih bold dan spicy.
- Taste profile: Creamy, savory, herby, tangy, mildly rich, spicy. Karakter ranch/herbs dan creamy menjadi base, dengan tanginess untuk balance dan spicy kick sebagai karakter utama. Bukan Thai/Asian flavor dan bukan vinaigrette.
- Cocok untuk / recommended usage: salad, chicken wings/tenders, fries, burger, wrap, sandwich, roasted vegetables, dipping.
- Ingredients: Air, mayones, bawang putih, cabai, air lemon, cuka, apel, rempah italia, garam, lada hitam.
- Alternatif/redirect: Spicy Creamy Thai; Spicy Soy; Honey Mustard.

Spicy Soy — Harga sekitar Rp39.675
- Target customer: customer yang suka Asian food, rice bowl/noodles, chicken/beef/seafood/tofu dan ingin sauce/dressing yang spicy tetapi non-creamy. Taste preference: soy-forward, savory, umami, spicy. Need: bold Asian flavor untuk meals yang sering dipairing dengan rice/noodles.
- Keunggulan: Asian-inspired soy-based dressing dengan kombinasi savory, umami dan spicy flavor, memberikan rasa yang bold tanpa creamy texture. Cocok untuk customer yang ingin dressing/sauce dengan karakter gurih dan spicy yang lebih Asian daripada Western-style dressing.
- Taste profile: Savory, salty, umami, spicy, aromatic, slightly sweet, soy-forward, non-creamy. Karakter soy dan umami menjadi dasar rasa, dengan spicy kick sebagai pembeda. Dapat memiliki karakter sesame/Asian aromatics. Bukan creamy dan bukan sweet-creamy dressing.
- Cocok untuk / recommended usage: Asian salad, rice bowl, noodles, chicken, beef, seafood, tofu, vegetables, dipping.
- Ingredients: Air, minyak kedelai, mayones, kecap asin, cuka apel, cabai giling, cabai bubuk, bawang bombay, gula, lada hitam.
- Alternatif/redirect: Spicy Creamy Thai; Spicy Ranch; Roasted Sesame.

Thousand Island — Harga sekitar Rp39.675
- Target customer: customer yang baru mulai makan salad, mencari dressing klasik/familiar, atau sering membuat burger, sandwich, wrap dan chicken. Taste preference: creamy, mildly sweet, tangy, savory. Need: easy-to-like multi-purpose sauce.
- Keunggulan: Classic Thousand Island-style creamy dressing dengan perpaduan creamy, sweet, tangy dan savory flavor. Profil rasanya familiar dan approachable, sehingga cocok untuk customer yang ingin dressing klasik yang mudah dipadukan dengan berbagai makanan.
- Taste profile: Creamy, mildly sweet, tangy, savory, slightly rich, familiar. Rasa creamy menjadi base dengan perpaduan manis dan tangy yang balanced. Tidak spicy dan tidak memiliki karakter herbal/citrus yang dominan. Profilnya lebih classic & approachable dibanding dressing yang lebih bold seperti Creamy Thai atau Spicy Ranch.
- Cocok untuk / recommended usage: garden salad, chicken salad, burger, sandwich, wrap, potato salad/coleslaw, dipping.
- Ingredients: Air, mayones, cuka putih, telur, mustard, relish, bawang bombay, saus tomat, saus sambal, gula, garam, lada hitam.
- Cross-sell: Garlic Croutons when salad use is relevant. Alternatif/redirect: Caesar; Honey Mustard; Italian Vinaigrette.

Golden Oasis — Harga sekitar Rp48.300
- Target customer: customer yang suka Middle Eastern food, grilled chicken/meat, wraps, falafel, hummus, naan/paratha atau salad bowl dan ingin creamy sauce dengan aromatic spices. Taste preference: savory, umami, creamy, spiced/aromatic.
- Keunggulan: Creamy dressing dengan Middle Eastern spices yang memberikan rasa savory, aromatic dan umami. Memiliki positioning unik karena menggabungkan creamy texture dengan karakter rempah Timur Tengah, sehingga cocok untuk salad, grilled meat, wraps dan dipping sauce. Halal certified dan pada materi produk tercantum tanpa bahan pengawet.
- Taste profile: Creamy, savory, umami, aromatic, spiced, Middle Eastern-inspired. Tekstur creamy dengan karakter rempah yang hangat dan savory. Profilnya lebih aromatic dan spice-forward dibanding dressing creamy klasik.
- Cocok untuk / recommended usage: Grilled Chicken Salad; Chicken Salad Wrap; Grilled Vegetable Salad Bowl; Grilled Meat Salad; Tandoori Wraps; Samosas; Falafel/Hummus Platter; dipping sauce untuk Naan/Paratha.
- Ingredients: Air, salad oil, mayonnaise, rempah masala, rempah kari, bawang putih. bawang bombai, saus tomat, cuka apel, daun ketumbar, creamer, garam, gula, kaldu jamur.
- Alternatif/redirect: Caesar; Creamy Thai; Yuzu.

Capri Basil — Harga sekitar Rp47.000
- Target customer: customer yang suka fresh Mediterranean/Italian-inspired meals, salad, grilled chicken, quinoa, Caprese, grilled vegetables atau light meals. Taste preference: lemony, basil, fresh, sweet/tangy. Need: bright dressing/sauce yang tidak heavy.
- Keunggulan: Fresh lemon-basil dressing dengan perpaduan lemon, basil, madu, parmesan dan walnut dari komposisi produk, menghasilkan karakter fresh, lemony dan sweet dengan savory/nutty depth. Halal certified dan pada materi produk tercantum tanpa bahan pengawet.
- Taste profile: Fresh, lemony, sweet, tangy, herby/basil, lightly savory dan nutty. Karakter lemon dan basil memberi kesegaran/aroma, dengan sweetness sebagai penyeimbang.
- Cocok untuk / recommended usage: Grilled Chicken with Lemon Basil Glaze; Lemon Basil Garden Salad; Grilled Cheese Arugula Salad; Mediterranean Quinoa Salad; Caprese Skewers; Grilled Vegetable Bruschetta; Shrimp Cocktail.
- Ingredients: Air, salad oil, bawang putih, cuka, daun basil, keju parmesan, kacang walnut, madu, lemon, garam, gula, lada hitam.
- Alternatif/redirect: Yuzu; Italian Vinaigrette.

Caesar Dressing — Harga sekitar Rp40.250
- Target customer: customer yang rutin makan Caesar salad, chicken wrap, salad bowl, sandwich atau pasta salad dan ingin creamy savory dressing yang lebih satisfying. Taste preference: creamy, bold, savory, parmesan/garlic, tangy. Need: classic Western-style creamy option.
- Keunggulan: Creamy Caesar dressing dengan bold flavors. Berdasarkan komposisi mengandung mayonnaise, garlic, lemon, mustard, apple cider vinegar, parsley dan parmesan, sehingga memiliki creamy-savory profile dengan tangy, garlicky dan parmesan notes. Halal certified dan pada materi produk tercantum tanpa bahan pengawet.
- Taste profile: Creamy, bold, savory, tangy, garlicky, parmesan/cheesy, herby. Tidak diposisikan sebagai sweet dressing.
- Cocok untuk / recommended usage: Caesar Salad Wrap; Caesar Salad Bowl; Caesar Pasta Salad; Caesar Deviled Eggs; Caesar Crostinis; Caesar Grilled Chicken Wrap; Caesar BLT Sandwich; Caesar Quinoa Bowl.
- Ingredients: Air, Mayones, Bawang putih, Air lemon, Mustard, Cuka apel, Bubuk parsley, Bubuk parmesan, Garam, Gula.
- Cross-sell: Garlic Croutons for Caesar salad. Alternatif/redirect: Thousand Island; Honey Mustard; Golden Oasis.

Roasted Sesame — Harga sekitar Rp36.053
- Target customer: customer yang suka Japanese/Asian food, cabbage salad, salmon/beef/tofu, hot pot, udon atau donburi/bibimbap dan menyukai sesame/nutty flavor. Taste preference: sweet, tangy, extra umami, roasted sesame. Need: family-friendly Asian sauce/dressing yang versatile.
- Keunggulan: Roasted Sesame dressing dengan karakter sweet, tangy dan extra umami. Komposisi mengandung white sesame paste, roasted white sesame dan sesame oil yang memperkuat sesame/nutty profile. Family's Favorite. Halal certified dan pada materi produk tercantum tanpa bahan pengawet.
- Taste profile: Sweet, tangy, umami, nutty, roasted sesame, savory, aromatic. Tidak perlu diasumsikan spicy.
- Cocok untuk / recommended usage: Sesame Chicken Wrap; Grilled Salmon Sesame Salad; Grilled Beef Sesame Salad; Japanese Cabbage Salad; Tofu Banh Mi; Hot Pot Dipping Sauce; Udon Stir Fry; Donburi/Bibimbap Bowl.
- Ingredients: Minyak kedelai, Pasta wijen putih, Wijen putih panggang, Cuka apel, Garam, Gula, Minyak wijen.
- Alternatif/redirect: Spicy Soy; Yuzu; Creamy Thai.

Sweet Mango Vinaigrette — Harga sekitar Rp37.950
- Target customer: customer yang sering makan fruit salad, tropical bowl, fresh garden salad atau suka fruity dressing untuk chicken/seafood. Taste preference: mango, refreshing, sweet, tangy, non-creamy. Need: fruit-forward dressing yang membuat fruit/salad lebih exciting.
- Keunggulan: Sweet Mango Vinaigrette dengan karakter refreshing, sweet dan tangy. Mengandung mango concentrate, lemon, apple cider vinegar, garlic dan basil berdasarkan komposisi. Sangat cocok untuk fruit salad dan tropical-style menu. Halal certified dan pada materi produk tercantum tanpa bahan pengawet.
- Taste profile: Refreshing, fruity/mango, sweet, tangy, lightly citrusy, aromatic. Vinaigrette-style dan bukan creamy.
- Cocok untuk / recommended usage: Fruit Salad Bowl; Tropical Fruit Salad; Mango Salad Bowl; Fruity Mix Garden Salad; Fruit & Cheese Skewers; Grilled Chicken with Tropical Bowl; Seared Scallop with Fruit Salsa; Cucumber & Mango Canapes.
- Ingredients: air, konsentrat mangga, minyak kedelai, air lemon, cuka apel, bawang putih, bubuk basil, garam, gula pasir, lada hitam.
- Alternatif/redirect: Yuzu; Capri Basil; Italian Vinaigrette.

### KATEGORI: SAUS MASAK

Honey Garlic (Asia) — Harga sekitar Rp37.950
- Target customer: customer yang sering masak chicken/beef, meal prep, rice meals atau suka beef pepper rice/hotplate-style food dan ingin satu sauce serbaguna. Cuisine affinity: Asian/restaurant-inspired home cooking. Taste preference: honey + garlic, sweet-savory, non-spicy.
- Keunggulan: Saus Honey Garlic serbaguna dengan perpaduan karakter honey + garlic + sweet-savory, cocok untuk berbagai masakan dari chicken dan beef hingga tumisan, nasi/mie goreng dan dipping sauce. Beef Pepper Rice merupakan salah satu recommended usage resmi. Halal dan tanpa bahan pengawet sesuai materi produk.
- Taste profile: Sweet, savory, honey-forward, garlicky, flavorful, non-spicy. Fokus rasa pada kombinasi honey + garlic dengan sweet-savory profile.
- Cocok untuk / recommended usage: Official recommended usage: Beef Pepper Rice; Barbeque Beef; Honey Garlic Chicken; Chicken Wings; Tumisan Sayuran; Nasi/Mie Goreng; Saus Cocolan. Priority/hero usage untuk sales: Beef Pepper Rice, Honey Garlic Chicken dan Chicken Wings. Dapat digunakan sebagai cooking sauce, coating/glaze, stir-fry sauce atau dipping sauce sesuai menu.
- Ingredients: Air, Madu, Kecap asin, Bawang putih, Gula, Gula merah, Kecap manis, Kaldu ayam, Kaldu sayur, Kaldu jamur, Bawang putih bubuk, Bawang bombay bubuk.
- Kemasan 250 ml, Origin Asia, MPASI: Ya, Gluten Free: Ya, Pedas: Tidak.
- Penyimpanan: kulkas 1°C – 4°C, masa simpan: 6 bulan, pengiriman: Bisa Semua jenis pengiriman reguler/ instant/ sameday.
- Alternatif/redirect: Spicy Honey Garlic; Bulgogi; Teriyaki.

Spicy Honey Garlic — Harga sekitar Rp40.500
- Target customer: customer yang sering masak chicken/beef/rice meals atau hotplate-style dishes dan sudah menyukai honey-garlic profile tetapi menginginkan pedas. Taste preference: sweet-savory, garlic, spicy. Need: spicy version tanpa menambah cabai sendiri.
- Keunggulan: Karakter Honey Garlic dengan tambahan rasa pedas yang dibuat dari cabai asli. Memberikan perpaduan honey-garlic sweet-savory dengan spicy kick untuk customer yang menginginkan versi pedas.
- Taste profile: Sweet, savory, honey-forward, garlicky, spicy, flavorful. Pembeda sensorik utama dari Honey Garlic adalah rasa pedas dari cabai asli.
- Cocok untuk / recommended usage: Gunakan sebagai alternatif Honey Garlic pada konteks menu yang membutuhkan honey-garlic + spicy, termasuk beef/chicken, wings, vegetables, nasi/mie dan dipping. Beef Pepper Rice / hotplate-style meal dapat digunakan sebagai application logic ketika customer ingin versi pedas.
- Ingredients: Air, Madu, Kecap asin, Bawang putih, Gula, Gula merah, Cabai giling, Cabal bubuk, Kecap manis, Kaldu ayam, Kaldu Sayur, Kaldu Jamur, Bawang putih bubuk, Bawang bombay bubuk
- Alternatif/redirect: Honey Garlic; Fire; Kungpao.

Pesto (Western) — Harga sekitar Rp75.900
- Target customer: customer yang suka masak Western/Italian-style food, sering membuat pasta, chicken, fish, sandwich, pizza, salad atau risotto dan ingin satu sauce yang sangat versatile. Taste preference: fresh basil, savory, parmesan/cheesy, nutty.
- Keunggulan: Pesto sauce berbasis fresh basil leaves dengan karakter basil, Parmesan dan nutty, serta diposisikan sebagai sauce yang sangat versatile untuk berbagai jenis masakan. Materi produk menggunakan positioning “Satu Saus 100 Menu Masak”. Halal dan tanpa bahan pengawet sesuai materi produk.
- Taste profile: Fresh/herby, basil-forward, savory, Parmesan/cheesy, nutty, aromatic.
- Cocok untuk / recommended usage: Pasta; Pesto Chicken; Pizza; Fish; Vegetarian Dishes; Sandwich; Salad; Risotto. AI sebaiknya memilih 1–3 usage yang relevan dengan kebutuhan customer, bukan membaca seluruh daftar.
- Ingredients: Key ingredients confirmed (bukan daftar formula lengkap): Basil; Keju Parmesan; Kacang Otak.
- Kemasan 250 ml, Origin Western, MPASI: Ya, Gluten Free: Ya, Pedas: Tidak.
- Penyimpanan: freezer -18°C, masa simpan: 6 bulan, pengiriman: Hanya bisa Instant/ sameday/paxel.
- Cross-sell: Italian Meatball when making Italian meal. Alternatif/redirect: Marinara; Carbonara; Truffle Carbonara.

Marinara — Harga sekitar Rp30.360
- Target customer: customer yang suka memasak Western/Italian-style dishes dan mencari tomato-based sauce yang praktis. Taste preference: tomato-forward, savory, garlic/onion, non-creamy. Need: base tomato sauce tanpa membuat dari nol.
- Keunggulan: Tomato-based cooking sauce dengan pasta tomat, bawang putih dan bawang bombai sebagai base utama, sehingga customer bisa mendapatkan tomato-savory profile tanpa membuat sauce dari awal.
- Taste profile: Tomato-forward, savory, garlicky, onion-aromatic, non-creamy.
- Cocok untuk / recommended usage: Official menu belum tersedia. Untuk AI, gunakan sebagai application logic: tomato-based cooking sauce.
- Ingredients: Pasta tomat, Bawang putih, Bawang bombai, Gula, Garam
- Cross-sell: Italian Meatball for pasta/Italian meal. Alternatif/redirect: Pesto; Carbonara; Truffle Carbonara.

Carbonara — Harga sekitar Rp41.500
- Target customer: customer yang suka Western comfort food/pasta dan mencari creamy savory sauce yang praktis. Taste preference: creamy, milky, savory, umami, lightly garlicky. Need: creamy cooking sauce tanpa membuat base dari nol.
- Keunggulan: Creamy savory cooking sauce dengan susu cair dan krimer nabati sebagai base, dilengkapi kaldu sayur, kaldu jamur dan garlic untuk memberikan creamy-savory profile yang praktis.
- Taste profile: Creamy, milky, savory, umami, lightly garlicky.
- Cocok untuk / recommended usage: Official menu belum tersedia. Gunakan sebagai creamy cooking sauce berdasarkan kebutuhan customer.
- Ingredients: Krimer nabati, Susu cair, Kaldu sayur, Kaldu jamur, Garam, Gula, Bubuk bawang putih.
- Cross-sell: Creamy Cheese Sauce only when customer explicitly wants more cheesy. Alternatif/redirect: Truffle Carbonara; Marinara; Pesto.

Truffle Carbonara — Harga sekitar Rp68.500
- Target customer: customer yang suka Western/pasta creamy dishes dan secara spesifik menyukai aroma/rasa truffle. Taste preference: creamy, milky, savory, umami, truffle-aromatic. Need: creamy truffle sauce praktis.
- Keunggulan: Creamy Carbonara sauce dengan pasta truffle, menggabungkan creamy-milky base dengan karakter truffle dan savory/umami notes.
- Taste profile: Creamy, milky, savory, umami, truffle-aromatic.
- Cocok untuk / recommended usage: Official menu belum tersedia. Gunakan sebagai creamy truffle cooking sauce berdasarkan kebutuhan customer.
- Ingredients: Susu Cair, Krimer Nabati, Pasta Truffle, Minyak Mentega. Kaldu Jamur, Garam, Gula.
- Alternatif/redirect: Carbonara; Black Truffle Mushroom.

BBQ/Barbecue — Harga sekitar Rp44.275
- Target customer: customer yang suka Western/BBQ/grill-style food, steak, wings, ribs, brisket, burger, sandwich atau tacos. Taste preference: smoky, savory, bold. Functional need: satu sauce untuk marinade + cooking/coating + dipping.
- Keunggulan: Homemade-style BBQ Sauce dengan karakter smoky, savory dan bold, yang dapat digunakan sebagai marinade maupun dipping sauce untuk berbagai grill/Western-style dishes. Materi produk menyebutnya Best Selling Homemade BBQ Sauce. Halal dan tanpa bahan pengawet sesuai materi produk.
- Taste profile: Smoky, savory, bold, tangy, dengan sweet BBQ notes. Ingredients yang tersedia mendukung profil tomato, vinegar, brown sugar/honey, Worcestershire dan garlic.
- Cocok untuk / recommended usage: Dipping sauce & marinade for steak; BBQ Chicken Steak; BBQ Chicken Wings; BBQ Beef Ribs/Beef Briskets; Tofu BBQ Stir Fry; Chicken/Beef Tacos & Sandwiches; Chicken/Beef Burger; Other menus.
- Ingredients: Saus tomat, Pasta tomat, Cuka apel, Gula merah, Madu, Kecap inggris, Bawang putih, Lada hitam, Garam, Gula.
- Cross-sell: Steak/Chicken Seasoning Rub if dry seasoning is also needed. Alternatif/redirect: Mushroom; Black Truffle Mushroom; Honey Garlic.

Mushroom — Harga sekitar Rp37.950
- Target customer: customer yang suka masak Western food di rumah, terutama steak, chicken, pasta, fish, burger/sandwich, dan ingin creamy mushroom sauce tanpa membuat dari nol. Taste preference: mushroom-forward, creamy-savory, umami. Quality need: jamur asli, potongan jamur asli, kaldu sapi asli, tanpa MSG/perasa tambahan/pengawet.
- Keunggulan: Mushroom Sauce dari jamur asli dengan potongan jamur asli dan kaldu sapi asli, menghasilkan karakter mushroom-savory yang nyata dan praktis untuk berbagai masakan Western-style. Tanpa MSG, tanpa perasa tambahan, tanpa bahan pengawet, dan Halal.
- Taste profile: Creamy, mushroom-forward, savory, umami, rich, brothy. Fokus utama pada rasa jamur dan savory depth. Tidak diposisikan sebagai truffle, smoky atau spicy.
- Cocok untuk / recommended usage: Steak; Chicken; Pasta; Fish; Vegetarian Dishes; Burger; Sandwich; Pizza. Untuk AI, prioritaskan steak, chicken dan pasta sebagai hero use cases karena paling kuat untuk Western-food intent. “Vegetarian dishes” hanya berarti penggunaan pada hidangan berbasis sayuran, bukan klaim vegetarian.
- Ingredients: Jamur champignon, Kaldu sapi asli, Kaldu sayur, Kaldu jamur, Kecap inggris, Bawang putih, Bawang bombay, Garam, Gula, Lada hitam, Krimer nabati.
- Alternatif/redirect: Black Truffle Mushroom; BBQ; Carbonara.

Black Truffle Mushroom — Harga sekitar Rp59.500
- Target customer: customer yang suka Western/steakhouse-style dishes, pasta/chicken dan sudah menyukai mushroom tetapi ingin karakter truffle. Taste preference: creamy, mushroom, savory/umami, truffle-aromatic. Quality need: real truffle pate, truffle oil asli, real mushroom pieces, tanpa MSG/essence/pengawet.
- Keunggulan: Black Truffle Mushroom Sauce dengan real truffle pate dan potongan jamur asli. Truffle pate dibuat dari truffle oil asli dan potongan jamur asli, dipadukan dengan mushroom sauce berbasis jamur asli dan kaldu sapi asli. Tanpa MSG, tanpa perasa buatan/essence, tanpa pengawet dan Halal.
- Taste profile: Creamy, mushroom-forward, savory, umami, truffle-aromatic, rich. Differentiator utama dari Mushroom Sauce adalah karakter truffle.
- Cocok untuk / recommended usage: Steak; Chicken; Pasta; Fish; Vegetarian Dishes; Burger; Sandwich; Pizza; dan menu lainnya. Prioritaskan steak, pasta dan chicken sebagai hero Western use cases. “Vegetarian dishes” adalah use case pada hidangan sayur, bukan dietary claim.
- Ingredients: Truffle oil, Truffle pate, Jamur champignon, Kaldu sapi asli, Kaldu sayur, Kaldu jamur, Kecap inggris, Bawang putih, Bawang bombay, Garam, Gula, Lada hitam, Krimer nabati.
- Alternatif/redirect: Mushroom; BBQ; Truffle Carbonara.

Kungpao — Harga sekitar Rp56.500
- Target customer: customer yang sering makan nasi/rice bowl, suka masakan Asia/Chinese-style, sering masak ayam, beef, tofu atau sayuran dengan saus, dan ingin lauk nasi yang bold tanpa meracik banyak bumbu. Taste affinity: savory, spicy, tangy dan sedikit sweet. Functional need: saus praktis dengan resep authentic, 100% natural ingredients dan tanpa pengawet.
- Keunggulan: Authentic Kungpao-style sauce untuk customer yang suka rasa Asian spicy-savory dan rice pairing. Dibuat menggunakan 100% natural ingredients dan tanpa pengawet.
- Taste profile: Savory, spicy, tangy, umami, lightly sweet. Bold Asian-style profile.
- Cocok untuk / recommended usage: chicken, beef, shrimp, tofu, stir-fried vegetables, rice bowl, dan lauk pendamping nasi. Gunakan sebagai stir-fry/cooking sauce.
- Ingredients: Air, Kecap asin, Cabai kering, Cabai bubuk, Saus sambal, Saus tomat, Cuka dapur, Garam, Gula, Gula merah, Kaldu sayur, Pasta tauco, Kaldu jamur
- Alternatif/redirect: Bulgogi; Japanese Curry; Orange Sauce; Fire.

Orange Sauce — Harga sekitar Rp31.625
- Target customer: customer yang suka Chinese-American/Asian restaurant food, suka Orange Chicken, suka menu ala Panda Express, sering makan lauk crispy/protein dengan nasi, dan ingin recreate menu restaurant-style di rumah. Taste affinity: sweet, tangy, citrusy. Functional need: sauce praktis untuk chicken, beef, shrimp, salad atau dipping.
- Keunggulan: Sweet-tangy citrus Orange Sauce untuk membuat menu ala Panda Express / Orange Chicken-style secara praktis. Halal dan tanpa bahan pengawet sesuai materi produk.
- Taste profile: Sweet, tangy, citrusy/orange-forward, savory, aromatic.
- Cocok untuk / recommended usage: Orange Chicken; Orange Beef; Orange Glazed Shrimp; Orange Sauce Salad Dressing; Dipping Sauce for Fried Veggie Fritters.
- Ingredients: Air, Cabai bubuk, Bawang putih, Bawang bombay, Gula merah, Gula pasir, Garam, Cuka, Konsentrat jeruk, Kecap asin.
- Alternatif/redirect: Kungpao; Bulgogi; Japanese Curry; Asam Manis.

Bulgogi — Harga sekitar Rp42.500
- Target customer: customer yang suka Korean food, Korean rice bowl, beef/chicken dengan nasi, dan sering memilih rasa yang approachable/non-spicy. Customer yang ingin membuat Korean-style meal di rumah secara praktis. Taste affinity: sweet-savory, soy, garlic, sesame dan umami. Functional need: resep authentic, 100% natural ingredients, tanpa pengawet.
- Keunggulan: Authentic Bulgogi-style sauce dengan sweet-savory soy profile yang sangat cocok untuk beef/chicken dan rice bowl. Dibuat menggunakan 100% natural ingredients dan tanpa pengawet.
- Taste profile: Sweet, savory, soy-forward, umami, garlicky, sesame/nutty, aromatic.
- Cocok untuk / recommended usage: beef bulgogi, chicken bulgogi, beef/chicken rice bowl, stir-fry with vegetables, cooking/marinade-style sauce.
- Ingredients: Air, Madu, Kecap asin, Bawang putih, Gula, Gula merah, Kecap manis, Kaldu ayam, Kaldu sayur, Kaldu jamur, Lada hitam bubuk, Pasta wijen putih, Minyak wijen.
- Alternatif/redirect: Yakiniku; Teriyaki; Kungpao.

Japanese Curry — Harga sekitar Rp48.000
- Target customer: customer yang sering makan nasi, suka Japanese food, suka comfort food, dan suka menu one-bowl/one-plate yang praktis. Customer yang sering masak chicken/beef/vegetables tetapi ingin lauk yang mudah dipairing dengan nasi. Taste affinity: savory, aromatic curry, rounded/comforting. Functional need: authentic Japanese-style sauce dengan 100% natural ingredients dan tanpa pengawet.
- Keunggulan: Authentic Japanese Curry Sauce untuk customer yang ingin Japanese comfort-food experience secara praktis. Dibuat dari 100% natural ingredients dan tanpa pengawet, sangat cocok untuk rice-based meals.
- Taste profile: Savory, aromatic, curry-spiced, umami, rounded.
- Cocok untuk / recommended usage: Japanese curry rice, chicken curry, beef curry, vegetable curry, rice bowl.
- Ingredients: Air, tepung terigu, minyak, bumbu kari, garam, gula, bawang putih, bawang bombay, bawang putih bubuk, kaldu sayur, wortel, jahe, kaldu jamur.
- Cross-sell: Japanese Chicken Katsu Curry if customer wants ready-to-eat instead of sauce. Alternatif/redirect: Teriyaki; Sukiyaki; Bulgogi.

Sukiyaki — Harga sekitar Rp31.625
- Target customer: customer yang suka Japanese-style food, hotpot, beef + vegetables, atau rice-based meals dan mencari sauce sweet-savory soy-based. Customer yang ingin membuat beef/vegetable meal praktis tanpa meracik soy seasoning sendiri. Taste preference: sweet-savory, soy-forward, umami, rounded. Restriction check: tidak cocok untuk customer vegetarian/vegan atau yang menghindari fish broth karena ingredients mencantumkan kaldu ikan.
- Keunggulan: Japanese-style sweet-savory soy sauce dengan umami depth dari kaldu ikan dan kaldu jamur, cocok untuk customer yang menyukai Sukiyaki-style beef/vegetable meals dan rice pairing.
- Taste profile: Sweet-savory, soy-forward, umami, aromatic/oniony, rounded.
- Cocok untuk / recommended usage: Sukiyaki-style beef & vegetables; hotpot-style meals; beef/chicken rice bowl; tofu/vegetables untuk customer yang tidak memiliki restriction terhadap fish broth; Japanese-style cooking sauce.
- Ingredients: Air, Kecap asin, Gula pasir, Sirup agave, Kaldu ikan, Kaldu jamur, Bawang bombay
- Cross-sell: Collagen Broth Sukiyaki if customer needs ready-to-use broth. Alternatif/redirect: Teriyaki; Yakiniku; Japanese Curry.

Marinasi Ayam dan Ikan — Harga sekitar Rp31.300
- Target customer: customer yang sering meal prep atau memasak chicken/fish di pan, suka Asian/Japanese-like flavor, dan ingin satu sauce yang bisa dipakai sejak marinasi sampai finishing. Taste preference: savory-sweet soy, ginger, garlic, sesame, aromatic. Need: praktis untuk marinade, glaze saat cooking, atau finishing glaze tanpa meracik bumbu dari nol.
- Keunggulan: Asian/Japanese-style marinade & glaze sauce untuk ayam dan ikan dengan savory-sweet soy, ginger, garlic dan sesame profile. Bisa dipakai sebagai marinasi, glaze saat dimasak di pan, atau finishing glaze. Natural ingredients, tanpa pengawet, Halal, dengan authentic taste sesuai konfirmasi produk.
- Taste profile: Savory, lightly sweet, soy-forward, gingery, garlicky, sesame-aromatic, umami.
- Cocok untuk / recommended usage: marinasi ayam dan ikan; glaze saat ayam/ikan dimasak di pan; finishing glaze di akhir. Application logic: meal-prep chicken/fish, rice bowl, pan-seared protein.
- Ingredients: Air, Kecap asin, Jahe, Bawang putih, Bawang bombay, Gula, Garam, Kecap manis, Kaldu sayur, Kaldu jamur, Bawang putih bubuk, Lada hitam, Minyak wijen panggang.
- Cross-sell: Chicken Seasoning Rub if customer prefers dry seasoning. Alternatif/redirect: Teriyaki; Yakiniku; Fire.

Fire — Harga sekitar Rp40.480
- Target customer: customer yang sering makan nasi/rice bowl, suka ayam goreng/fried food atau protein meals dan ingin sauce yang membuat menu terasa lebih bold. Taste preference yang dikonfirmasi: pedas, peppery dan gurih. Need: spicy sauce yang versatile untuk berbagai rice bowl, ayam goreng dan menu savory.
- Keunggulan: Fire Sauce dengan karakter rasa yang sudah dikonfirmasi: pedas + peppery + gurih. Sangat relevan untuk berbagai rice bowl, ayam goreng dan menu yang membutuhkan spicy-savory kick.
- Taste profile: Spicy, peppery, savory, umami, garlicky, bold. 'Peppery' adalah user-confirmed sensory fact, bukan inference dari ingredients.
- Cocok untuk / recommended usage: berbagai jenis rice bowl; ayam goreng. Application logic: chicken, beef, crispy/fried chicken, noodles, fried snacks, vegetables, coating/drizzle/dipping sauce.
- Ingredients: Air, Cabai, Bubuk cabai, Saus sambal, Saus tomat, Pasta tomat, Bawang putih, Gula, Garam, Bubuk bawang putih, Kaldu jamur.
- Pedas: Ya.
- Cross-sell: Chili Crunch if customer wants crunchy topping too. Alternatif/redirect: Kungpao; Spicy Honey Garlic; Spicy Soy; Blackpepper.

Teriyaki — Harga sekitar Rp28.000
- Target customer: customer yang sering meal prep atau membuat chicken/beef/fish + rice, Japanese-style home cooking, dan ingin sauce yang familiar serta mudah dipakai sehari-hari. Taste preference: sweet-savory soy, ginger, garlic, umami. Need: everyday cooking/marinade/glaze-style sauce untuk protein + rice tanpa meracik seasoning sendiri.
- Keunggulan: Japanese-style sweet-savory soy sauce dengan ginger + garlic aromatic profile, praktis untuk everyday protein + rice meals.
- Taste profile: Sweet-savory, soy-forward, umami, gingery, garlicky, aromatic.
- Cocok untuk / recommended usage: Teriyaki chicken; beef; fish/salmon; tofu/vegetables; rice bowl; grilled/pan-cooked protein; marinade/cooking/glaze-style use.
- Ingredients: Air, Kecap asin, Jahe, Bawang putih, Bawang bombay, Gula, Kecap manis, Kaldu sayur, Kaldu jamur, Bawang putih bubuk, Lada hitam.
- Cross-sell: Marinasi Ayam dan Ikan if customer primarily needs wet marinade/glaze. Alternatif/redirect: Yakiniku; Sukiyaki; Bulgogi.

Yakiniku — Harga sekitar Rp41.800
- Target customer: customer yang suka Japanese grilled-meat/yakiniku-style meals, beef rice bowl, grilling atau beef/chicken + rice dan mencari garlic-sesame soy profile. Taste preference: sweet-savory, soy-forward, garlicky, sesame/nutty, umami. Need: sauce praktis untuk grilled meat/rice bowl.
- Keunggulan: Japanese-style grilled-meat sauce dengan sweet-savory soy + garlic + roasted sesame profile. Cocok untuk customer yang ingin beef/grilled-meat + rice dengan karakter sesame/umami.
- Taste profile: Sweet-savory, soy-forward, garlicky, sesame/nutty, umami, aromatic.
- Cocok untuk / recommended usage: yakiniku/grilled beef; chicken; beef rice bowl; grilled meat; stir-fry protein/vegetables; marinade/cooking/dipping-style use.
- Ingredients: Air, Kecap asin, Bawang putih, Gula, Gula merah, Kecap manis, Wijen putih panggang, Minyak wijen, Cuka dapur, Kaldu ayam, Kaldu sayur, Kaldu jamur, Bawang putih bubuk, Bawang bombay bubuk.
- Cross-sell: Steak Seasoning Rub only if customer also wants dry rub. Alternatif/redirect: Bulgogi; Teriyaki; Sukiyaki.

Salted Egg/Telur Asin — Harga sekitar Rp45.800
- Target customer: customer yang suka salted egg dishes, creamy-savory comfort food, rice bowl, crispy chicken/seafood, atau gorengan yang ingin diberi salted-egg coating/sauce. Taste preference: creamy, gurih alami dari salted egg, salted-egg dominant, non-spicy. Need: rasa salted egg kuat tanpa membuat sauce dari telur asin sendiri.
- Keunggulan: Creamy Salted Egg Sauce dengan karakter telur asin yang dominan dan gurih alami dari salted egg. Tidak diposisikan sebagai pedas. Natural ingredients, tanpa pengawet, Halal, dengan authentic taste sesuai konfirmasi produk.
- Taste profile: Creamy, salted-egg dominant, savory, rich, umami, non-spicy. Ingredients mengandung cabai keriting, tetapi sensory confirmation menyatakan produk tidak pedas; sensory confirmation harus mengalahkan inference dari ingredient cabai.
- Cocok untuk / recommended usage: salted egg chicken, shrimp/udang, squid/cumi, fish, crispy/fried protein, rice bowl, fried snacks.
- Ingredients: Air, Telur asin, Bubuk telur asin, Daun kari, Cabai keriting, Kaldu sayur, Kaldu jamur, Garam, Lada hitam, Bubuk bawang putih, Krimer nabati.
- Pedas: Tidak.
- Alternatif/redirect: Creamy Cheese Sauce; Padang; Fire.

Blackpepper — Harga sekitar Rp37.400
- Target customer: customer yang sering makan beef/chicken, steak-style meals atau rice bowl dan menyukai black pepper flavor yang jelas tetapi tidak terlalu menusuk. Taste preference: peppery, savory, slightly sweet, umami dengan intensitas black pepper medium. Need: blackpepper sauce praktis untuk protein + rice.
- Keunggulan: Blackpepper Sauce dengan karakter black pepper medium, savory dan sedikit sweet, cocok untuk beef, chicken, steak-style meals dan rice bowl. Natural ingredients, tanpa pengawet, Halal, dengan authentic taste sesuai konfirmasi produk.
- Taste profile: Peppery, savory, umami, slightly sweet, bold but medium in black-pepper intensity.
- Cocok untuk / recommended usage: blackpepper beef, blackpepper chicken, steak-style protein, rice bowl, stir-fry beef/chicken.
- Ingredients: Lada hitam bubuk, Air, Kecap manis, Saus tomat, Saus tiram, Gula, Garam.
- Cross-sell: Steak Seasoning Rub for dry-seasoning use. Alternatif/redirect: Fire; Yakiniku; Mushroom.

Padang — Harga sekitar Rp34.500
- Target customer: customer yang suka masakan Indonesia, seafood with rice, seafood feast, atau lauk yang pedas-gurih dan saucy. Taste preference: spicy, savory, slightly sweet/tangy, aromatic. Need: Saus Padang-style praktis terutama untuk seafood tanpa meracik banyak bumbu.
- Keunggulan: Saus Padang dengan authentic taste, karakter pedas-gurih dengan sedikit sweet/tangy, sangat relevan untuk seafood + rice. Dibuat dari natural ingredients, tanpa pengawet, dan Halal.
- Taste profile: Spicy, savory, aromatic, garlicky/gingery, slightly sweet, tangy.
- Cocok untuk / recommended usage: udang Saus Padang, cumi, kepiting/kerang/seafood, fish, chicken, seafood rice meal. Hero behavior: seafood + rice.
- Ingredients: Cabai, Bubuk cabai, Saus tiram, Jahe, Bawang putih, Bawang bombay, Saus tomat, Saus sambal, Gula, Garam
- Pedas: Ya.
- Alternatif/redirect: Asam Manis; Salted Egg; Fire.

Ayam Goreng Mentega — Harga sekitar Rp27.830
- Target customer: customer yang suka ayam goreng mentega-style, Chinese/Asian restaurant dishes, rice meals, atau ingin protein dengan sauce buttery-savory yang comforting. Cocok untuk chicken, beef dan seafood. Taste preference: buttery, savory, gurih, rounded. Need: buttery sauce praktis untuk berbagai protein.
- Keunggulan: Ayam Goreng Mentega Sauce dengan buttery taste dan rasa gurih, cocok bukan hanya untuk ayam tetapi juga beef dan seafood. Natural ingredients, tanpa pengawet, Halal, dengan authentic taste sesuai konfirmasi produk.
- Taste profile: Buttery, savory, umami, rounded, lightly sweet/tangy balance. 'Buttery' adalah confirmed taste, bukan claim bahwa formula memakai butter asli.
- Cocok untuk / recommended usage: chicken, beef, seafood. Application logic: ayam goreng mentega, beef, shrimp/seafood, rice bowl, pan-cooked protein.
- Ingredients: Air, Kecap asin, Kecap inggris, Cuka dapur, Saus tomat, Kaldu sayur, Kecap manis, Gula pasir, Garam, Kaldu jamur.
- Alternatif/redirect: Asam Manis; Blackpepper; Honey Garlic.

Asam Manis/ Sweet and Sour — Harga sekitar Rp27.830
- Target customer: customer yang suka sweet & sour dishes, crispy chicken/fish/shrimp, Asian restaurant-style food atau lauk nasi yang tidak creamy dan tidak fokus pedas. Taste preference: sweet, sour/tangy, savory, balanced. Need: sweet-sour sauce praktis untuk crispy/protein meals.
- Keunggulan: Authentic-taste Sweet & Sour / Asam Manis Sauce dengan sweet + tangy/sour + savory balance, cocok untuk chicken, fish, shrimp dan crispy protein + rice. Natural ingredients, tanpa pengawet dan Halal.
- Taste profile: Sweet, sour/tangy, savory, tomato-based, balanced.
- Cocok untuk / recommended usage: sweet & sour chicken; fish; shrimp; crispy protein; fried food coating; rice bowl/rice meal.
- Ingredients: Air, Saus tomat, Cuka apel, Kecap inggris, Saus tiram, Garam, Gula.
- Alternatif/redirect: Orange Sauce; Padang; Ayam Goreng Mentega.

Creamy Cheese Sauce — Harga sekitar Rp44.275
- Target customer: customer yang suka cheesy comfort food, pasta, fried food, fries, burger atau ingin menambah cheese richness ke creamy dishes. Taste preference: creamy, cheesy, savory, cheddar-forward. Need: cheese sauce praktis untuk cooking, topping, dipping, atau dikombinasikan dengan Carbonara.
- Keunggulan: Creamy Cheese Sauce dengan creamy-cheesy-savory profile dan cheddar character, versatile untuk pasta, chicken, fried foods, fries, burger serta bisa dikombinasikan dengan Carbonara. Natural ingredients, tanpa pengawet, Halal, dengan authentic taste sesuai konfirmasi produk.
- Taste profile: Creamy, cheesy, cheddar-forward, savory, rich, umami.
- Cocok untuk / recommended usage: dapat dikombinasikan dengan Carbonara; cocok untuk makanan gorengan, fries dan burger. Application logic: pasta, chicken, dipping/topping, fried snacks.
- Ingredients: Air, Keju cheddar, Bubuk keju, Krimer nabati, Kaldu sayur, Kaldu jamur, Garam, Gula, Bubuk bawang putih.
- Cross-sell: Carbonara when customer explicitly wants a more cheese-forward creamy pasta. Alternatif/redirect: Salted Egg; Carbonara; Mushroom.

### KATEGORI: BUMBU MASAK INSTANT

Sachet Bumbu Laksa Singapore 100gr — Harga sekitar Rp29.000
- Target customer: customer yang suka Singapore Laksa, noodle soup, dan seafood-noodle meals serta ingin bumbu praktis untuk membuat laksa di rumah. Taste preference: creamy/coconut-style, savory, aromatic, medium spicy. Need: membuat Laksa Singapore dengan cepat tanpa meracik bumbu laksa dari nol.
- Keunggulan: Authentic-taste Singapore Laksa seasoning dengan medium spice untuk laksa noodle; dapat dimodifikasi menjadi soup-based laksa atau dinikmati dengan seafood noodles.
- Taste profile: creamy/coconut-style, savory, aromatic, medium spicy
- Cocok untuk / recommended usage: Laksa noodle; soup-based Laksa; seafood noodle pairing.
- Ingredients: Formula ingredients lengkap belum diberikan; jangan infer dari nama produk.
- Pedas: Ya - Medium.
- Cross-sell: Seafood/noodles are meal ingredients, not forced cross-sell. Alternatif/redirect: Tori Paitan; Japanese Curry.

Sachet Bumbu Rendang 100gr — Harga sekitar Rp30.000
- Target customer: customer yang ingin memasak beef rendang/masakan Indonesia berbumbu kaya dan memilih solusi instant yang tetap berprofil authentic. Taste preference: rich, savory, aromatic-spiced, medium spicy. Need: membuat beef rendang praktis tanpa menyiapkan bumbu dari nol.
- Keunggulan: Authentic-taste Rendang seasoning dengan medium spicy profile, khusus untuk beef sesuai konfirmasi produk.
- Taste profile: rich, savory, aromatic-spiced, medium spicy
- Cocok untuk / recommended usage: beef rendang.
- Ingredients: Formula ingredients lengkap belum diberikan; jangan infer dari nama produk.
- Pedas: Ya - Medium.
- Alternatif/redirect: Bumbu Dasar Merah.

Sachet Bumbu Penang Curry 100gr — Harga sekitar Rp29.000

### KATEGORI: CONDIMENT/ COCOLAN

Spicy Mayo — Harga sekitar Rp31.625
- Target customer: customer yang sering makan gorengan, sushi, rice bowl, fries, burger atau chicken dan ingin condiment creamy-spicy yang mudah dipakai lintas menu. Taste preference: creamy, spicy, savory, medium spicy. Need: condiment serbaguna untuk berbagai makanan
- Keunggulan: Medium-spicy creamy mayo yang versatile untuk fried food, sushi, rice bowl, fries, burger, chicken dan menu lain sebagai condiment.
- Taste profile: creamy, spicy, savory, medium spicy
- Cocok untuk / recommended usage: fried food; sushi; rice bowl; fries; burger; chicken.
- Ingredients: Mayones, Sambal, Bubuk cabai, Garam
- Pedas: Ya - Medium.
- Alternatif/redirect: Mentaiko Mayo; Wasabi Mayo; Garlic Mayo.

Wasabi Mayo — Harga sekitar Rp36.700
- Target customer: customer yang suka sushi/Japanese food atau fries dan mencari condiment mayo dengan wasabi yang benar-benar kuat. Taste preference: creamy mayo + strong real-wasabi pungency, savory. Need: condiment unik untuk sushi dan fries
- Keunggulan: Kreasi unik Apron Kitchen: mayo dengan wasabi asli dan strong wasabi taste.
- Taste profile: creamy mayo + strong real-wasabi pungency, savory
- Cocok untuk / recommended usage: sushi; fries.
- Ingredients: Ingredient list lama salah — ABAIKAN. Key ingredient confirmed: wasabi asli. Formula lengkap belum diberikan.
- Pedas: Wasabi strong (bukan chili-spicy).
- Alternatif/redirect: Mentaiko Mayo; Spicy Mayo.

Cheese Mayo — Harga sekitar Rp37.950
- Target customer: customer yang suka condiment creamy-cheesy untuk fries, burger, chicken, sandwich atau fried snacks. Taste preference: creamy, cheesy, savory. Need: condiment cheese-mayo untuk comfort food/fried food
- Keunggulan: Creamy cheesy mayo terutama untuk dip/topping condiment.
- Taste profile: creamy, cheesy, savory
- Cocok untuk / recommended usage: fries; burger; fried chicken/snacks; sandwich.
- Ingredients: Mayones, Bubuk keju, Air lemon, Garam.
- Pedas: Tidak.
- Alternatif/redirect: Creamy Cheese Sauce; Garlic Mayo; Spicy Mayo.

Mentaiko Mayo — Harga sekitar Rp48.000
- Target customer: customer yang suka Japanese food, sushi, rice bowl atau fries dan ingin mayo dengan karakter mentaiko asli. Taste preference: creamy, savory, fish-roe/mentaiko-forward, mild spicy, sedikit tangy dan sedikit sweet. Need: condiment Japanese-style dengan fish roe asli dari Jepang
- Keunggulan: Mentaiko Mayo menggunakan fish roe asli dari Jepang dengan mild spicy creamy profile.
- Taste profile: creamy, savory, fish-roe/mentaiko-forward, mild spicy, sedikit tangy dan sedikit sweet
- Cocok untuk / recommended usage: sushi; rice bowl; fries; grilled seafood sebagai condiment.
- Ingredients: Mayones; pasta mentaiko (fish roe asli dari Jepang); saus tomat; saus sambal; bubuk cabai Jepang; garam; lada hitam.
- Pedas: Ya - Mild.
- Alternatif/redirect: Wasabi Mayo; Spicy Mayo; Tartar Mayo.

Tartar Mayo — Harga sekitar Rp43.000
- Target customer: customer yang sering makan fried fish, fish & chips atau fried seafood dan mencari condiment classic creamy-tangy. Taste preference: creamy, tangy/asam ringan, savory, relish/onion. Need: condiment untuk fried fish/seafood
- Keunggulan: Classic tartar-style mayo dengan creamy-tangy relish/onion profile.
- Taste profile: creamy, tangy/asam ringan, savory, relish/onion
- Cocok untuk / recommended usage: fried fish; fish & chips; fried seafood; chicken/sandwich sebagai application logic.
- Ingredients: Mayones, Bawang bombay, Relish, Telur, Garam, Gula, Cuka apel, Lada hitam.
- Pedas: Tidak.
- Alternatif/redirect: Garlic Mayo; Mentaiko Mayo; Wasabi Mayo.

Truffle Mayo — Harga sekitar Rp67.800
- Target customer: customer yang suka fries, burger, sandwich atau fried food dan ingin condiment creamy dengan truffle profile. Taste preference: creamy, savory, truffle-aromatic, rich. Need: premium-style truffle mayo condiment
- Keunggulan: Truffle Mayo dengan real truffle pate dan truffle oil mix dari Italia.
- Taste profile: creamy, savory, truffle-aromatic, rich
- Cocok untuk / recommended usage: fries; burger; sandwich; fried food.
- Ingredients: Mayonnaise; bawang putih; bawang putih bubuk; real truffle pate; truffle oil mix dari Italia; garam; gula; air lemon; kaldu jamur.
- Pedas: Tidak.
- Alternatif/redirect: Garlic Mayo; Cheese Mayo.

Garlic Mayo — Harga sekitar Rp36.000
- Target customer: customer yang suka fries, chicken, burger, sandwich atau fried food dan mencari condiment dengan garlic flavor yang kuat. Taste preference: creamy, strong garlicky, savory, sedikit sweet, sangat sedikit tangy. Need: strong-garlic mayo condiment
- Keunggulan: Garlic Mayo dengan strong garlicky-savory profile dan sedikit hint sweet/tangy.
- Taste profile: creamy, strong garlicky, savory, sedikit sweet, sangat sedikit tangy
- Cocok untuk / recommended usage: fries; chicken; burger; sandwich; fried food.
- Ingredients: Mayones, Bawang putih, Bawang putih bubuk, Garam, Air lemon
- Pedas: Tidak.
- Alternatif/redirect: Tartar Mayo; Cheese Mayo; Spicy Mayo.

Honey Mustard Smoky BBQ Mayo — Harga sekitar Rp43.000
- Target customer: customer yang suka gorengan, taco atau meat-based snacks dan mencari mayo condiment dengan sweet-smoky BBQ profile. Taste preference: creamy, sweet, smoky, BBQ-savory, sedikit tangy. Need: condiment sweet-smoky BBQ untuk fried foods dan meat/taco
- Keunggulan: Honey Mustard Smoky BBQ Mayo dengan manis-smoky BBQ profile; sangat cocok untuk gorengan dan sering dipakai pada taco karena match dengan profil daging.
- Taste profile: creamy, sweet, smoky, BBQ-savory, sedikit tangy
- Cocok untuk / recommended usage: fried food; taco; meat-based snacks; burger/sandwich sebagai condiment.
- Ingredients: Saus Tomat, Pasta Tomat. Cuka Apel Mustard, Gula Merah, Madu, Kecap Inggris, Air, Mayonnaise Rempah, Bubuk Bawang Bombay, Bubuk Bawang Putih, Garam, Lada hitam.
- Pedas: Tidak.
- Alternatif/redirect: Spicy Mayo; Garlic Mayo; Cheese Mayo.

### KATEGORI: SOUP

Collagen Broth Original (HOTPOT/STEAMBOAT) — Harga sekitar Rp73.500
- Target customer: customer yang suka hotpot/steamboat atau clear chicken-based soup dan ingin broth siap pakai tanpa concentrate. Taste preference: savory, rich chicken-broth, umami, clean. Need: ready-to-use hotpot/steamboat broth
- Keunggulan: Broth non-concentrated dari natural ingredients berbasis ayam kampung/tulang ayam; tidak perlu dibuat dari concentrate.
- Taste profile: savory, rich chicken-broth, umami, clean
- Cocok untuk / recommended usage: hotpot; steamboat; soup base.
- Ingredients: Air, tulang ayam, kaldu ayam, kaldu sayur, garam, bubuk kaldu jamur.
- Pedas: Tidak.
- Alternatif/redirect: Collagen Broth Soy; Collagen Broth Sukiyaki; Tori Paitan Original.

Collagen Broth Soy (HOTPOT/STEAMBOAT) — Harga sekitar Rp74.500
- Target customer: customer yang suka hotpot/steamboat dengan kuah soy-savory yang lebih beraroma. Taste preference: savory, soy-forward, umami, aromatic, lightly sweet. Need: ready-to-use soy hotpot broth
- Keunggulan: Broth non-concentrated berbasis ayam kampung dengan soy seasoning, garlic/onion/ginger dan sesame-oil notes.
- Taste profile: savory, soy-forward, umami, aromatic, lightly sweet
- Cocok untuk / recommended usage: hotpot; steamboat; soup base.
- Ingredients: Air, tulang ayam, kaldu ayam, kaldu sayur, soy seasoning, bawang putih, bawang bombai, jahe, minyak wijen, garam, gula pasir dan bubuk kaldu jamur.
- Pedas: Tidak.
- Alternatif/redirect: Collagen Broth Original; Collagen Broth Sukiyaki.

Collagen Broth Sukiyaki (HOTPOT/STEAMBOAT) — Harga sekitar Rp75.500
- Target customer: customer yang suka hotpot/steamboat Sukiyaki-style dengan kuah sweet-savory. Taste preference: sweet-savory, umami, Sukiyaki-style, aromatic. Need: ready-to-use Sukiyaki hotpot broth
- Keunggulan: Non-concentrated broth berbasis ayam kampung dengan Sukiyaki-style seasoning untuk hotpot/steamboat.
- Taste profile: sweet-savory, umami, Sukiyaki-style, aromatic
- Cocok untuk / recommended usage: Sukiyaki hotpot; steamboat.
- Ingredients: Air, tulang ayam, kaldu ayam, kaldu sayur, sukiyaki seasoning, rumput laut, garam, gula pasir dan bubuk kaldu jamur.
- Pedas: Tidak.
- Alternatif/redirect: Collagen Broth Soy; Sukiyaki Sauce.

Tori Paitan Ramen Base Original — Harga sekitar Rp46.750
- Target customer: customer yang ingin ramen soup authentic Japanese-style di rumah dengan chicken paitan profile tanpa concentrate. Taste preference: creamy/rich chicken broth, savory, umami. Need: ready-to-use authentic Japanese-style ramen soup
- Keunggulan: Tori Paitan non-concentrated dari natural ingredients berbasis ayam kampung untuk ramen soup.
- Taste profile: creamy/rich chicken broth, savory, umami
- Cocok untuk / recommended usage: ramen soup.
- Ingredients: Formula lengkap belum diberikan. Base confirmed: natural ingredients berbasis ayam kampung; non-concentrated.
- Pedas: Tidak.
- Alternatif/redirect: Tori Paitan Miso; Tori Paitan Spicy.

Tori Paitan Ramen Base Miso — Harga sekitar Rp48.750
- Target customer: customer yang suka ramen Jepang dengan rich chicken broth plus miso-savory/umami profile. Taste preference: creamy/rich chicken broth, miso-savory, umami. Need: ready-to-use Tori Paitan Miso ramen soup
- Keunggulan: Authentic Japanese-style non-concentrated ramen soup berbasis ayam kampung dengan miso profile.
- Taste profile: creamy/rich chicken broth, miso-savory, umami
- Cocok untuk / recommended usage: miso ramen soup.
- Ingredients: Formula lengkap belum diberikan. Base confirmed: natural ingredients berbasis ayam kampung; non-concentrated.
- Pedas: Tidak.
- Alternatif/redirect: Tori Paitan Original; Tori Paitan Spicy.

Tori Paitan Ramen Base Spicy — Harga sekitar Rp48.750
- Target customer: customer yang suka ramen Jepang dengan rich chicken broth dan spicy kick ringan. Taste preference: creamy/rich chicken broth, savory, umami, mild spicy. Need: ready-to-use mild-spicy Tori Paitan ramen soup
- Keunggulan: Authentic Japanese-style non-concentrated ramen soup berbasis ayam kampung dengan mild spicy profile.
- Taste profile: creamy/rich chicken broth, savory, umami, mild spicy
- Cocok untuk / recommended usage: spicy ramen soup.
- Ingredients: Formula lengkap belum diberikan. Base confirmed: natural ingredients berbasis ayam kampung; non-concentrated.
- Pedas: Ya - Mild.
- Alternatif/redirect: Tori Paitan Original; Tori Paitan Miso.

### KATEGORI: CONDIMENT, BUTTER, AND JAM

Garlic Herbs Butter — Harga sekitar Rp78.200
- Target customer: customer yang sering membuat garlic bread, steak atau pasta dan ingin butter siap pakai untuk memberi garlic-herb flavor. Taste preference: buttery, garlicky, savory, herb-aromatic. Need: garlic-herb butter untuk roti, steak dan pasta
- Keunggulan: Butter dengan garlic dan herb blend untuk toast/bread, steak dan pasta.
- Taste profile: buttery, garlicky, savory, herb-aromatic
- Cocok untuk / recommended usage: garlic bread/toast; steak; pasta.
- Ingredients: Mentega New Zealand, Minyak Zaitun. Bawang putih, Garam, Sage, Thyme, Rosemary dan Peterseli.
- Alternatif/redirect: Truffle Herbs Butter.

Truffle Herbs Butter — Harga sekitar Rp88.200
- Target customer: customer yang suka bread, steak atau pasta dan ingin buttery herb profile dengan truffle. Taste preference: buttery, savory, herb-aromatic, truffle-aromatic. Need: truffle-herb butter untuk bread/steak/pasta
- Keunggulan: Butter dengan real truffle pate + truffle oil mix dari Italia dan herb profile.
- Taste profile: buttery, savory, herb-aromatic, truffle-aromatic
- Cocok untuk / recommended usage: bread/toast; steak; pasta.
- Ingredients: New Zealand Butter, Olive oil, Truffle pate, Truffle oil. Sea Salt, Sage, Thyme, Parsley.
- Alternatif/redirect: Garlic Herbs Butter.

Kaya Jam — Harga sekitar Rp61.000
- Target customer: customer yang mencari selai roti berbahan alami dengan pandan-coconut profile dan membutuhkan pilihan yang cocok untuk vegan. Taste preference: sweet, pandan-aromatic, coconut-rich. Need: vegan-friendly srikaya jam untuk roti
- Keunggulan: Srikaya Jam dari daun pandan, brown sugar dan coconut milk; cocok untuk vegan.
- Taste profile: sweet, pandan-aromatic, coconut-rich
- Cocok untuk / recommended usage: selai roti/toast.
- Ingredients: Key ingredients confirmed (bukan formula lengkap): daun pandan, brown sugar, coconut milk.
- Cross-sell: Gluten Free Pancake Mix if customer wants breakfast pairing. Alternatif/redirect: Salted Caramel.

Salted Caramel — Harga sekitar Rp58.000
- Target customer: customer yang suka spread/topping caramel dan mencari sweet-salty buttery-style profile. Taste preference: sweet, salty, caramelized, buttery-style. Need: salted caramel spread/topping dengan coconut sugar + vegan butter
- Keunggulan: Salted Caramel berbahan coconut sugar, vegan butter, salt dan sedikit glucose.
- Taste profile: sweet, salty, caramelized, buttery-style
- Cocok untuk / recommended usage: bread/toast; pancake; dessert topping sebagai application logic.
- Ingredients: Key ingredients confirmed (bukan formula lengkap): coconut sugar, vegan butter, salt, sedikit glucose.
- Cross-sell: Pancake Mix when relevant. Alternatif/redirect: Srikaya Jam.

### KATEGORI: CONDIMENT, BUTTER, JAM, SEASONING RUB

Apron Kitchen Chili Crunch Low Calorie — Harga sekitar Rp42.000
- Target customer: customer yang sering makan rice bowl, gorengan atau berbagai savory meals dan ingin topping spicy-crunchy yang praktis. Taste preference: medium spicy, savory, garlicky, shallot-aromatic, crunchy. Need: baked-not-fried chili crunch untuk berbagai hidangan
- Keunggulan: Chili Crunch dari cabai asli/chili flakes, garlic dan shallot; seluruh komponen crunchy dibaked, bukan digoreng.
- Taste profile: medium spicy, savory, garlicky, shallot-aromatic, crunchy
- Cocok untuk / recommended usage: rice bowl; gorengan; berbagai savory dishes sebagai topping/condiment.
- Ingredients: Key ingredients confirmed (bukan formula lengkap): cabai asli/chili flakes, garlic, shallot, kaldu jamur, salt. Crunch components dibaked, bukan digoreng.
- Pedas: Ya - Medium.
- Alternatif/redirect: Fire; Spicy Mayo.

Apron Kitchen Chicken Seasoning Rub Powder — Harga sekitar Rp45.000
- Target customer: customer yang sering memasak chicken dengan grill, pan, air fryer atau oven dan ingin seasoning rub siap pakai tanpa prep. Taste preference: savory, herby, peppery-aromatic; sudah salted. Need: all-purpose chicken rub untuk grill/pan/air fryer/oven
- Keunggulan: Seasoning rub dengan rosemary, parsley, thyme, blackpepper dan herb blend; sudah salted.
- Taste profile: savory, herby, peppery-aromatic; sudah salted
- Cocok untuk / recommended usage: chicken grill; pan-cooked chicken; air fryer; oven.
- Ingredients: Key ingredients confirmed (bukan formula lengkap): rosemary, parsley, thyme, blackpepper, mix herbs lainnya; sudah salted.
- Alternatif/redirect: Marinasi Ayam dan Ikan.

Apron Kitchen Steak Seasoning Rub Powder — Harga sekitar Rp45.000
- Target customer: customer yang sering membuat beef steak/grilled beef dan ingin dry rub yang langsung cocok untuk beef. Taste preference: savory, peppery/herby, mustard-paprika aromatic; sudah salted. Need: steak-focused dry rub dengan mustard powder, paprika dan non-MSG beef broth
- Keunggulan: Seasoning rub untuk beef steak dengan mustard powder, paprika dan kaldu sapi non-MSG; herb profile mirip Chicken Rub.
- Taste profile: savory, peppery/herby, mustard-paprika aromatic; sudah salted
- Cocok untuk / recommended usage: beef steak; grilled/pan-cooked beef.
- Ingredients: Key components confirmed (bukan formula lengkap): mustard powder, paprika, kaldu sapi non-MSG; herb profile mirip Chicken Seasoning Rub; sudah salted.
- Alternatif/redirect: Blackpepper; Chicken Seasoning Rub.

Apron Kitchen Curry Seasoning Rub Powder — Harga sekitar Rp45.000
- Target customer: customer yang sering membuat beef or lamb steak/grilled chicken dan ingin dry rub yang ada cita rasa rempah kari. Taste preference: curry, aromatic rich, savory, peppery/herby, mustard-paprika aromatic; sudah salted. Need: steak-focused dry rub dengan mustard powder, paprika dan non-MSG beef broth
- Keunggulan: Seasoning rub untuk beef steak dengan mustard powder, paprika dan kaldu sapi non-MSG; herb profile mirip Chicken Rub.

### KATEGORI: KEBUTUHAN DASAR MEMASAK

Bawang Merah Goreng — Harga sekitar Rp56.000
- Target customer: customer yang sering masak masakan Indonesia dan ingin menghemat prep bawang untuk topping/finishing. Taste preference: fried shallot aroma/flavor, savory-aromatic. Need: ready-anytime fried shallot untuk menghemat cooking prep
- Keunggulan: Bawang merah yang sudah digoreng dan siap digunakan; fokus USP adalah convenience/no prep.
- Taste profile: fried shallot aroma/flavor, savory-aromatic
- Cocok untuk / recommended usage: nasi; soup/soto; mie; topping masakan Indonesia sebagai application logic.
- Ingredients: Product fact confirmed: bawang merah yang sudah digoreng, ready-to-use. Formula detail lain belum diberikan.
- Alternatif/redirect: Bawang Putih Goreng Cincang; Bawang Putih Goreng Iris.

Bawang Putih Goreng Cincang — Harga sekitar Rp49.900
- Target customer: customer yang sering butuh garlic dalam masakan dan ingin menghilangkan proses kupas/cincang/goreng. Taste preference: fried garlic, strong aromatic, savory. Need: ready-anytime chopped fried garlic
- Keunggulan: Bawang putih yang sudah digoreng dan dicincang; perbedaan utama dengan versi iris adalah bentuk/tekstur, bukan formula rasa.
- Taste profile: fried garlic, strong aromatic, savory
- Cocok untuk / recommended usage: topping; stir-fry finishing; rice/noodles/soup sebagai application logic.
- Ingredients: Product fact confirmed: bawang putih yang sudah digoreng dan dicincang, ready-to-use. Formula detail lain belum diberikan.
- Alternatif/redirect: Bawang Putih Goreng Iris; Bawang Merah Goreng.

Bawang Putih Goreng Iris — Harga sekitar Rp43.500
- Target customer: customer yang sering butuh garlic dalam masakan dan ingin ready-to-use sliced fried garlic untuk menghemat prep. Taste preference: fried garlic, strong aromatic, savory. Need: ready-anytime sliced fried garlic
- Keunggulan: Bawang putih yang sudah digoreng dan diiris; beda dari versi cincang hanya bentuk/tekstur.
- Taste profile: fried garlic, strong aromatic, savory
- Cocok untuk / recommended usage: topping; stir-fry finishing; rice/noodles/soup sebagai application logic.
- Ingredients: Product fact confirmed: bawang putih yang sudah digoreng dan diiris, ready-to-use. Formula detail lain belum diberikan.
- Alternatif/redirect: Bawang Putih Goreng Cincang; Bawang Merah Goreng.

Bumbu Dasar Kuning — Harga sekitar Rp47.000
- Target customer: customer yang sering masak masakan Indonesia berbumbu kuning dan ingin menghilangkan tahap prep bumbu dasar. Taste preference: savory, aromatic Indonesian yellow-spice base; taste details mengikuti authentic product profile. Need: no-prep Indonesian yellow base
- Keunggulan: Bumbu dasar serbaguna untuk soto kuning, ayam/bebek, ikan/seafood, masakan bersantan dan menu kuning lain.
- Taste profile: savory, aromatic Indonesian yellow-spice base; taste details mengikuti authentic product profile
- Cocok untuk / recommended usage: Soto Lamongan/Ambengan; ayam goreng kuning; opor; bebek goreng; ikan bakar; pepes/pesmol; gulai/kari/terik; acar kuning; nasi kuning.
- Ingredients: Formula ingredients lengkap belum diberikan; gunakan menu mapping/user-confirmed product facts, jangan infer komposisi.
- Alternatif/redirect: Bumbu Dasar Merah; Bumbu Dasar Putih.

Bumbu Dasar Merah — Harga sekitar Rp48.500
- Target customer: customer yang sering masak balado, sambal goreng, bumbu merah atau lauk Indonesia berwarna/berprofil merah dan ingin no-prep base. Taste preference: savory, aromatic, red-spice Indonesian base; spice level tidak ditentukan. Need: no-prep Indonesian red base
- Keunggulan: Bumbu dasar untuk aneka balado, ayam/daging bumbu merah, nasi/bihun goreng merah, ikan/seafood bumbu merah dan sambal goreng.
- Taste profile: savory, aromatic, red-spice Indonesian base; spice level tidak ditentukan
- Cocok untuk / recommended usage: telur/kentang/terong/ayam balado; ayam bumbu merah; tetelan; rendang; nasi/bihun goreng merah; tumis tahu/tempe; tongkol/cumi/ikan bakar merah; sambal goreng ati/krecek.
- Ingredients: Formula ingredients lengkap belum diberikan; gunakan menu mapping/user-confirmed product facts, jangan infer komposisi.
- Alternatif/redirect: Bumbu Dasar Kuning; Bumbu Dasar Putih; Rendang sachet.

Bumbu Dasar Putih — Harga sekitar Rp45.000
- Target customer: customer yang sering masak sop, soto bening, lodeh, tumis, nasi/mie goreng non-red atau semur dan ingin no-prep base. Taste preference: savory, aromatic, mild/non-red Indonesian base. Need: no-prep Indonesian white base
- Keunggulan: Bumbu dasar untuk soup/white-base dishes, tumisan, nasi/mie goreng non-red dan semur.
- Taste profile: savory, aromatic, mild/non-red Indonesian base
- Cocok untuk / recommended usage: sop ayam/daging/buntut/sayur; Soto Kudus/coto Makassar/soto bening; sayur lodeh; tumis buncis/kangkung; nasi/mie goreng non-red; semur daging/tahu-tempe.
- Ingredients: Formula ingredients lengkap belum diberikan; gunakan menu mapping/user-confirmed product facts, jangan infer komposisi.
- Alternatif/redirect: Bumbu Dasar Kuning; Bumbu Dasar Merah.

### KATEGORI: READY TO EAT/ MAKANAN SIAP SAJI

Italian Meatball — Harga sekitar Rp85.000
- Target customer: customer yang ingin makanan Italia praktis/frozen dan suka pasta serta beef meatball tanpa prep panjang. Taste preference: savory, beefy, herby, Italian-style. Need: fully-cooked frozen 100% ground-beef meatball; tinggal dipanaskan
- Keunggulan: Italian Meatball dari 100% ground beef + mix herbs, sudah matang/frozen; cocok dengan pasta dan sauce Apron Kitchen.
- Taste profile: savory, beefy, herby, Italian-style
- Cocok untuk / recommended usage: pasta; Marinara; Carbonara; Pesto; Italian-style meals.
- Ingredients: Key ingredients confirmed (bukan formula lengkap): 100% ground beef + mix herbs. Produk sudah matang/frozen.
- Cross-sell: Marinara; Pesto; Carbonara as confirmed sauce pairings. Alternatif/redirect: Italian Meat Lasagna; Mac & Cheese.

Italian Meat Lasagna — Harga sekitar Rp50.000
- Target customer: customer yang ingin Italian comfort food siap saji tanpa masak dari nol dan suka marinara + beef. Taste preference: savory, tomato/marinara-based, beefy, rich. Need: fully-cooked ready-to-heat beef lasagna berbasis Marinara Apron Kitchen
- Keunggulan: Italian Meat Lasagna sudah matang, menggunakan Marinara-based sauce dan beef asli; praktis dibawa dan tinggal dipanaskan.
- Taste profile: savory, tomato/marinara-based, beefy, rich
- Cocok untuk / recommended usage: ready-to-eat lasagna; Italian meal.
- Ingredients: Key components confirmed (bukan formula lengkap): beef asli + Marinara-based sauce. Produk sudah matang.
- Alternatif/redirect: Mac & Cheese; Italian Meatball.

Mac & Cheese — Harga sekitar Rp48.000
- Target customer: customer yang ingin cheesy comfort food siap saji tanpa memasak pasta/cheese sauce dari nol. Taste preference: creamy, cheesy, savory, rich. Need: fully-cooked ready-to-heat Mac & Cheese dengan cheese sauce base tersendiri
- Keunggulan: Mac & Cheese sudah matang; base cheese sauce-nya berbeda dari produk standalone Creamy Cheese Sauce.
- Taste profile: creamy, cheesy, savory, rich
- Cocok untuk / recommended usage: ready-to-eat Mac & Cheese.
- Ingredients: Formula lengkap belum diberikan. Confirmed: own cheese sauce base yang berbeda dari standalone Creamy Cheese Sauce. Produk sudah matang.
- Alternatif/redirect: Italian Meat Lasagna.

Japanese Chicken Katsu Curry — Harga sekitar Rp50.000
- Target customer: customer yang ingin Japanese chicken katsu curry praktis tanpa menyiapkan katsu/curry dari nol. Taste preference: savory, Japanese curry, comforting, non-spicy. Need: fully-cooked chicken katsu curry menggunakan ayam kampung dan curry base yang sama dengan Japanese Curry Sauce Apron Kitchen
- Keunggulan: Chicken katsu + curry, tanpa nasi; non-spicy; tinggal dipanaskan.
- Taste profile: savory, Japanese curry, comforting, non-spicy
- Cocok untuk / recommended usage: chicken katsu curry; pair with rice separately.
- Ingredients: Key components confirmed (bukan formula lengkap): ayam kampung chicken katsu + curry base yang sama dengan Japanese Curry Sauce Apron Kitchen. Tanpa nasi.
- Pedas: Tidak.
- Cross-sell: Rice is not included; no forced cross-sell unless sold separately. Alternatif/redirect: Japanese Curry.

### KATEGORI: READY TO EAT/ MAKANAN SIAP SAJI/ SNACK

Snack Kentang Mustofa Original — Harga sekitar Rp45.000
- Target customer: customer yang suka snack/lauk/topping kentang crunchy dan ingin ready-to-eat Indonesian-style potato product non-spicy. Taste preference: crunchy, savory, lightly sweet, non-spicy. Need: hand-cut real potato Mustofa Original, ready-to-eat dan tanpa MSG
- Keunggulan: Kentang asli hand-cut, crunchy, Original/non-spicy, tanpa MSG.
- Taste profile: crunchy, savory, lightly sweet, non-spicy
- Cocok untuk / recommended usage: snack; lauk nasi; topping sebagai application logic.
- Ingredients: Key ingredient confirmed: hand-cut kentang asli. Original/non-spicy; tanpa MSG. Formula lengkap belum diberikan.
- Pedas: Tidak.
- Alternatif/redirect: Snack Kentang Mustofa Spicy.

Snack Kentang Mustofa Spicy — Harga sekitar Rp45.000
- Target customer: customer yang suka snack/lauk/topping kentang crunchy dan ingin medium spicy kick. Taste preference: crunchy, savory, medium spicy. Need: hand-cut real potato Mustofa Spicy dengan chili powder + salt, tanpa MSG
- Keunggulan: Kentang asli hand-cut, medium spicy, menggunakan chili powder + salt, tanpa MSG.
- Taste profile: crunchy, savory, medium spicy
- Cocok untuk / recommended usage: snack; lauk nasi; topping sebagai application logic.
- Ingredients: Key ingredients confirmed: hand-cut kentang asli, chili powder, garam; medium spicy; tanpa MSG. Formula lengkap belum diberikan.
- Pedas: Ya - Medium.
- Alternatif/redirect: Snack Kentang Mustofa Original.

Curry Chicken Wings 500g — Harga sekitar Rp68.000

Fresh Salad Pack 150g — Harga sekitar Rp29.000

Garlic Croutons 100g — Harga sekitar Rp48.000

### KATEGORI: PANCAKE MIX/ TEPUNG PANCAKE

Apron Kitchen Gluten Free Pancake Mix Original — Harga sekitar Rp33.000
- Target customer: customer yang ingin membuat pancake dengan cepat, mencari gluten-free pancake mix, dan menghargai chia seed/instant convenience. Taste preference: classic pancake profile; sweetness/texture exact belum dikonfirmasi. Need: instant gluten-free pancake mix yang menghemat waktu
- Keunggulan: Gluten Free Pancake Mix Original dengan chia seed; praktis dan instant untuk membuat pancake.
- Taste profile: classic pancake profile; sweetness/texture exact belum dikonfirmasi
- Cocok untuk / recommended usage: pancake.
- Ingredients: Tepung gluten free mix, gula kelapa, baking powder, baking soda, garam, krimer nabati (mengandung susu), vanilla extract, chia seed, Isolat protein soya, xanthan gum.
- Gluten Free: Ya.
- Cross-sell: Srikaya Jam; Salted Caramel when relevant. Alternatif/redirect: Apron Kitchen Ube Mochi Pancake Mix Gluten Free.

Apron Kitchen Ube Mochi Pancake Mix Gluten Free — Harga sekitar Rp48.000
- Target customer: customer yang ingin gluten-free pancake dengan chewy mochi texture dan real ube flavor. Taste preference: chewy/mochi texture, medium real-ube flavor. Need: instant gluten-free Ube Mochi Pancake Mix yang menghemat waktu.
- Keunggulan: Ube Mochi Pancake Mix: gluten free, chewy texture, medium ube taste dari ube asli bukan essence, dengan chia seed.
- Taste profile: chewy/mochi texture, medium real-ube flavor
- Cocok untuk / recommended usage: ube mochi pancake.
- Ingredients: Tepung Gluten Free mix, tepung Ubi Ungu, gula kelapa, baking powder, baking soda, garam, buttermilk (krimer nabati), vanilla extract, Ubi extract, chia seed, xanthan gum, bubuk bunga telang, bubuk buat bit, pewarna alami buah naga.
- Gluten Free: Ya.
- Cross-sell: Srikaya Jam; Salted Caramel when relevant. Alternatif/redirect: Apron Kitchen Gluten Free Pancake Mix Original.

### KATEGORI: SAMBAL, CHILI SEASONING AND OTHERS

Sambal Terasi Merah — Harga sekitar Rp38.000

Sambal Hijau Ulek Pedas — Harga sekitar Rp38.000

Mala Seasoning Oil (Asia) — Harga sekitar Rp79.000
- Target customer: customer yang suka Mala Xiang Guo, Mala Tang, mala noodles, atau tumisan mala tetapi tidak ingin repot membeli dan menyiapkan Sichuan peppercorn, cabai kering, aromatics, rempah dan berbagai sauce secara terpisah. Customer yang ingin membuat mala restaurant-style di rumah dengan proses jauh lebih simple. Taste preference: mild spicy, numbing/kebas khas Sichuan peppercorn, savory, umami dan aromatic. Need utama: complete instant mala seasoning base yang mengurangi prep dan jumlah bumbu yang harus dibeli.
- Keunggulan: 100% all-natural Instant Mala Seasoning Oil yang menggabungkan red & green Sichuan peppercorn, cabai, garlic, ginger, shallot dan berbagai rempah asli yang di-slow roast untuk mengeluarkan aromanya. Satu seasoning oil dapat digunakan untuk membangun rasa Mala Xiang Guo, Mala Tang, mala noodles dan tumisan mala tanpa perlu meracik banyak sauce/rempah secara terpisah. Halal, tanpa pengawet, tanpa MSG.
- Taste profile: Mild spicy ±3/10, numbing/kebas khas Sichuan peppercorn, savory, umami, aromatic, Sichuan-peppercorn-forward, garlicky, gingery, warm-spiced. Karakter khas produk bukan high heat, tetapi kombinasi mild chili heat + numbing sensation + aroma rempah kompleks.
- Cocok untuk / recommended usage: Mala Xiang Guo; Mala Tang; mala noodles; tumisan/osengan mala. Application Logic: dapat dipadukan dengan beef, chicken, seafood, tofu, mushroom, vegetables atau noodles sesuai menu customer.
- Ingredients: Minyak Kelapa Sawit, Sichuan Peppercorn merah, Sichuan Peppercorn Hijau, Cabe Kering, Bawang Putih, Jahe, Bawang Merah, Rempah, Bubuk Cabai, Kaldu Jamur, Kecap Kedelai Hitam, Garam, Gula.
- Kemasan 200g, Origin Asia, MPASI: no, Gluten Free: yes, Pedas: yes, mild., Dairy: no.
- Penyimpanan: suhu ruang: 6 bulan. chiller: 12 bulan, masa simpan: 6 bulan (suhu ruang) 12 bulan (chiller), pengiriman: reguler.

Fresh Chuka Wakame

Keju mozzarella parut (Shredded Mozzarella Cheese) 200g

PRODUK TAMBAHAN — PASTA (sumber: TEMPLATE CHAT Update.docx)
- Pasta Semolina Basil Spinach (MENGANDUNG TELUR) — Ingredients: tepung semolina, telur, air, minyak zaitun, garam, basil, bayam.
- Gluten Free Pasta Basil Spinach (MENGANDUNG TELUR, jadi bukan egg-free meski gluten free) — Ingredients: tepung sorghum, tepung cassava, tepung beras merah, tepung ketan, quaker/oat, telur, minyak zaitun, air, garam, basil, bayam.
- Kalau customer punya alergi/pantangan tertentu, tanyakan dulu sebelum rekomendasi kedua pasta ini.

PERSONA AI CUSTOMER SERVICE (sumber: TEMPLATE CHAT Update.docx)
- Nama persona: "Ari" — AI Food Advisor dari Apron Kitchen. Boleh dipakai untuk kenalan di awal chat kalau natural, mis. "Aku Ari, AI Food Advisor dari Apron Kitchen yang siap bantu cari sauce paling cocok."

ATURAN KLAIM SERTIFIKASI — PENTING, JANGAN OVERCLAIM (update dari TEMPLATE CHAT Update.docx)
- Halal: seluruh produk olahan Apron Kitchen (saus maupun frozen food/ready-to-eat) sudah bersertifikasi Halal.
- BPOM: SEBAGIAN BESAR produk masih dalam proses pengajuan izin BPOM — jangan pernah bilang "sudah BPOM" untuk produk selain yang disebut berikut. Yang SUDAH resmi BPOM: Italian Meat Lasagna, Mac & Cheese, Japanese Chicken Katsu Curry.
- MSG: saus masak Apron Kitchen dibuat tanpa tambahan MSG — rasa gurih didapat dari kaldu jamur. Hindari klaim berlebihan seperti "tanpa bahan kimia apapun"; gunakan wording spesifik "tanpa tambahan MSG".
- Tanpa bahan pengawet berlaku untuk semua produk sejak awal berdiri — karena itu penyimpanan sesuai anjuran (chiller/freezer) penting untuk menjaga kualitas.

ATURAN GLUTEN — GLOBAL (update dari TEMPLATE CHAT Update.docx)
- Hampir semua produk Apron Kitchen gluten free, TERMASUK seluruh saus masak lain, Gluten Free Pancake Mix, Ube Mochi Pancake Mix, Kaya Jam, Vegan Salted Caramel, sambal, butter, Tori Paitan/Ramen Base, Collagen Soup/Broth, dan kondimen lainnya.
- Yang MENGANDUNG gluten hanya: Japanese Curry Sauce (saus masak); dan dari Ready-to-Eat: Italian Meat Lasagna, Mac & Cheese, Japanese Chicken Katsu Curry.
- Kalau customer punya alergi berat/celiac, tetap tanyakan dulu sebelum rekomendasi karena ada risiko cross-contamination yang belum bisa dipastikan.

VARIAN VEGAN / VEGETARIAN / ALLIUM-FREE (update dari TEMPLATE CHAT Update.docx)
- Saus tanpa bawang (vegan friendly): Ayam Goreng Mentega Sauce, Asam Manis/Sweet & Sour Sauce, Roasted Sesame Dressing.
- Saus masak vegetarian-friendly dari sisi komposisi (bukan allium-free): Sukiyaki, Orange Sauce, Teriyaki, Marinasi Ayam & Ikan, Marinara, Asam Manis/Sweet & Sour.
- Salad Dressing vegetarian-friendly: Italian Vinaigrette, Italian Vinaigrette Zero Sugar, Yuzu Vinaigrette, Roasted Sesame, Spicy Soy, Mango Vinaigrette, Capri Basil.

CUSTOM ORDER / FORMULA KHUSUS (update dari TEMPLATE CHAT Update.docx)
- Apron Kitchen melayani custom formula: sugar-free (pakai stevia), allium-free (tanpa bawang), berbasis olive oil, atau custom ingredient lain sesuai permintaan (mis. untuk cafe/resto yang develop menu baru).
- Minimum custom order: 3 Liter per varian. Harga dihitung ulang oleh tim produksi sesuai formula — arahkan ke admin untuk proses lebih lanjut, jangan menyebutkan harga pasti.

INFORMASI B2B / GROSIR (update dari TEMPLATE CHAT Update.docx)
- Kemasan B2B: pouch 1 kg (berbeda dari kemasan retail 250 gr/botol).
- Minimum order B2B: 3 kg PER VARIAN (bukan 3 kg total keseluruhan order) — boleh mix beberapa varian berbeda dalam satu order, asal tiap varian yang dipilih minimal 3 kg (3 pouch × 1 kg).
- Contoh perbandingan harga (Honey Garlic Sauce): Retail Rp37.950/250 gr vs B2B Rp111.550/1 kg.
- Rendemen porsi per 1 kg sauce (perkiraan, tergantung resep aktual): 10 gr/porsi ≈ 100 porsi; 20 gr/porsi ≈ 50 porsi; 25 gr/porsi ≈ 40 porsi; 30 gr/porsi ≈ 33 porsi.
- Cara hitung sauce cost per porsi: (harga B2B per kg ÷ 1000) × gram sauce per porsi. Contoh: sauce Rp111.550/kg dipakai 20 gr/porsi → sekitar Rp2.231/porsi.
- B2B cocok untuk cafe baru, cloud kitchen, home business, dan catering yang masih trial menu — sarankan mulai dari 2-3 varian dulu (masing-masing 3 kg) sebelum scale up ke varian yang paling laku.

TAKARAN PEMAKAIAN SEASONING RUB (update dari TEMPLATE CHAT Update.docx)
- Chicken/Steak/Curry Seasoning Rub Powder: untuk 1 kg dada ayam, gunakan 35-40 gr (rasa normal/balanced) atau 45-50 gr (rasa lebih strong/bold).
- Untuk steak/daging kambing (lamb), rekomendasikan Steak Seasoning Rub atau Curry Seasoning Rub.

PASTA CAKE — PANDUAN PENYIMPANAN TAMBAHAN (update dari TEMPLATE CHAT Update.docx)
- Suhu ruang: tahan sekitar 6-8 jam setelah dipanggang.
- Chiller/kulkas: tahan sekitar 3-4 hari.
- Kalau mau disimpan lebih lama, pindahkan ke wadah tertutup/Tupperware lalu simpan di freezer: tahan sekitar 3 bulan.

TANDA KERUSAKAN PRODUK — KLARIFIKASI TAMBAHAN (update dari TEMPLATE CHAT Update.docx)
- Bunyi "psst" kecil saat PERTAMA KALI membuka segel induksi adalah NORMAL (akibat perubahan tekanan/proses hot filling) — bukan otomatis tanda rusak.
- Yang benar-benar jadi tanda kerusakan dan harus dihentikan konsumsinya: warna berubah signifikan jadi gelap/coklat kehitaman, bau busuk/tidak sedap, rasa jadi asam padahal seharusnya tidak asam, gas/tekanan berlebihan (sampai bergas/meledak) saat dibuka, atau titik-titik putih (tanda jamur) khususnya di vinaigrette.
- Kalau ragu, minta customer kirim foto/video + nama produk + tanggal diterima + cara penyimpanan sebelum diproses lebih lanjut — jangan konsumsi dulu kalau ada tanda mencurigakan.

CARA MASAK — CATATAN TAMBAHAN (update dari TEMPLATE CHAT Update.docx)
- Untuk cream sauce yang terlalu kental saat dimasak, tambahkan sedikit-sedikit air atau susu cair sampai kekentalan sesuai selera (jangan langsung banyak, supaya tekstur creamy tetap terjaga).
- Untuk saus frozen, wajib thawing/dicairkan dulu sekitar 1 jam sebelum dimasak.

PENGIRIMAN — DETAIL & KLARIFIKASI TAMBAHAN (update dari TEMPLATE CHAT Update.docx, melengkapi kebijakan pengiriman yang sudah ada)
- Cutoff Sameday: order sebelum pukul 14:00 WIB, diproses & dikirim hari yang sama.
- Cutoff Instant: order sebelum pukul 16:00 WIB, diproses & dikirim hari yang sama.
- Cutoff Paxel Nextday (untuk order di luar Shopee/WA direct): sebelum pukul 13:00 WIB, karena pickup terakhir Paxel sekitar pukul 14:00.
- Pengiriman tetap ada di hari Minggu & tanggal merah, tapi jam operasional lebih pendek (hanya setengah hari).
- Prinsip penting: waktu proses/dispatch Apron Kitchen TIDAK SAMA dengan estimasi transit kurir. Barang ready stock & packing cepat diproses segera; setelah diserahkan ke kurir (JNE/J&T/SPX dll), estimasi perjalanan reguler sekitar 2-3 hari tergantung kota tujuan — itu bukan waktu toko baru mulai memproses pesanan.
- Wajib pakai kurir cepat (Sameday/Instant/Paxel Nextday, BUKAN reguler) karena mengandung dairy: Caesar Dressing, Spicy Ranch. Begitu paket sampai, langsung simpan di chiller 2-5°C.
- Relatif aman dikirim kurir reguler ke luar kota (mengandung cuka sebagai pengawet alami, tahan 7-10 hari suhu ruang): Italian Vinaigrette, Roasted Sesame, dan varian dressing bercuka lain — tetap sarankan customer langsung masukkan ke kulkas begitu paket sampai.
- Saus frozen/cream tidak boleh dikirim kurir reguler (bisa rusak & ditolak kurir); untuk sameday, saus akan dibekukan dulu sebelum dikirim agar tetap terjaga kondisinya.
- Tarif referensi Paxel Nextday (origin Jakarta Barat, kategori berdasarkan jumlah botol: S = 1-2 botol, M = 3-4 botol, L = lebih dari 4 botol) untuk beberapa kota utama:
  - Jakarta Barat/Pusat/Selatan/Timur/Utara: S Rp13.000, M Rp17.000-20.000, L Rp22.000-29.000.
  - Bogor/Depok/Tangerang/Tangerang Selatan/Bekasi: S Rp14.000, M Rp24.000, L Rp32.000.
  - Bandung (Metro/Sukajadi): S Rp20.000, M Rp35.000, L Rp45.000.
  - Semarang/Solo/Yogyakarta/Magelang: S Rp23.000, M Rp38.000, L Rp55.000.
  - Surabaya/Sidoarjo: S Rp26.000, M Rp40.000, L Rp57.000.
  - Malang: S Rp25.000, M Rp45.000, L Rp57.000.
  - Kota lain di luar daftar ini: cek dulu ke admin sebelum menjanjikan tarif/coverage, jangan asal kasih estimasi.
- Tarif referensi JNE REG (per 1 kg, dari Jakarta):
  - Jakarta/Bogor/Depok/Tangerang/Bekasi/Cikarang: sekitar Rp10.000, estimasi 1-2 hari.
  - Bandung: sekitar Rp12.000, estimasi 1-2 hari.
  - Surabaya: sekitar Rp20.000, estimasi 1-2 hari.
  - Palembang: sekitar Rp23.000, estimasi 2-3 hari.
  - Makassar: sekitar Rp56.000, estimasi 2-3 hari.
  - Yogyakarta: estimasi 2-3 hari (tarif pasti belum tersedia, cek dulu ke admin).
  - Kota lain yang belum disebutkan: jangan asal kasih estimasi harga/waktu, arahkan untuk dicek dulu ke admin.

KONTAK RESMI
- WhatsApp: 0818 0889 6959 (https://wa.me/6281808896959)
- Instagram: @Apronkitchen.official
- Lokasi: Jakarta, Indonesia
`.trim();

module.exports = { APRON_KITCHEN_KNOWLEDGE };
