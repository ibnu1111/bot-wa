# Apron Kitchen — WhatsApp Bot (Baileys + Gemini AI)

Bot WhatsApp customer service otomatis untuk Apron Kitchen. Alurnya sesuai diagram:
scan QR untuk login, dengarkan pesan masuk, cek jawaban rule-based dulu, kalau tidak ada
yang cocok baru dilempar ke Google Gemini, lalu balas otomatis lewat `sendMessage()`.

## 1. Dapatkan API key Google Gemini (gratis, tanpa kartu kredit)

1. Buka https://aistudio.google.com/apikey dan login pakai akun Google.
2. Klik **Create API Key**, pilih project (atau buat baru), salin key-nya.
3. Simpan key tersebut, jangan commit ke git.

## 2. Setup project

```bash
cd bot
npm install
copy .env.example .env      # Windows PowerShell: Copy-Item .env.example .env
```

Buka `.env`, isi:
```
GEMINI_API_KEY=AIzaxxxxxxxx
```


## 3. Sesuaikan rule-based FAQ

Edit [src/rules.js](src/rules.js), isi jawaban untuk kata kunci umum (alamat, jam operasional,
harga, dll) sesuai data Apron Kitchen yang sebenarnya. Pesan yang tidak cocok kata kunci apapun
akan otomatis diteruskan ke Gemini.

## 4. Jalankan bot

```bash
npm start
```

- Terminal akan menampilkan QR code.
- Buka WhatsApp di HP → **Setelan > Perangkat Tertaut (Linked Devices) > Tautkan Perangkat** → scan QR tersebut.
- Setelah tersambung, folder `auth_info/` akan dibuat otomatis untuk menyimpan sesi login (jangan dihapus/commit) supaya tidak perlu scan ulang tiap start.
- Kirim pesan dari nomor WhatsApp lain ke nomor yang login — bot akan otomatis membalas.

## Struktur

```
bot/
├── src/
│   ├── index.js   # koneksi Baileys, QR login, listener pesan, kirim balasan
│   ├── rules.js   # daftar keyword → jawaban tetap (rule-based)
│   └── ai.js       # wrapper panggil Gemini untuk pesan di luar rule-based
├── .env.example
└── package.json
```

## Catatan

- Baileys adalah library tidak resmi untuk WhatsApp Web; gunakan dengan wajar (jangan spam/broadcast massal) untuk menghindari nomor diblokir WhatsApp.
- Simpan folder `auth_info/` di tempat aman jika deploy ke server — berisi kredensial sesi WhatsApp.
