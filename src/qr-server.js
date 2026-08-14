const http = require('http');
const QRCode = require('qrcode');

// State QR/koneksi disimpan di memori, dibaca oleh halaman web saat diakses.
let latestQr = null;
let status = 'starting'; // starting | qr | connected | reconnecting | logged_out

function setQr(qr) {
  latestQr = qr;
  status = 'qr';
}

function setStatus(newStatus) {
  status = newStatus;
  if (newStatus === 'connected') latestQr = null;
}

function renderPage(bodyHtml, refreshSeconds) {
  const refreshTag = refreshSeconds ? `<meta http-equiv="refresh" content="${refreshSeconds}">` : '';
  return `<!DOCTYPE html>
<html lang="id">
<head><meta charset="UTF-8" />${refreshTag}<title>Apron Kitchen Bot</title></head>
<body style="font-family:sans-serif;text-align:center;padding:48px;background:#111;color:#eee">
${bodyHtml}
</body>
</html>`;
}

function startQrServer() {
  const port = process.env.PORT || 3000;
  const accessToken = process.env.QR_ACCESS_TOKEN;

  const server = http.createServer(async (req, res) => {
    const url = new URL(req.url, `http://${req.headers.host}`);

    if (url.pathname !== '/' && url.pathname !== '/qr') {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('Not found');
      return;
    }

    // Wajib sertakan ?token=... yang sama dengan QR_ACCESS_TOKEN, supaya QR login tidak bisa diakses sembarang orang.
    if (accessToken && url.searchParams.get('token') !== accessToken) {
      res.writeHead(403, { 'Content-Type': 'text/plain' });
      res.end('Forbidden — token akses salah/tidak ada.');
      return;
    }

    if (status === 'connected') {
      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
      res.end(renderPage('<h2>✅ Bot WhatsApp Apron Kitchen sudah terhubung</h2>'));
      return;
    }

    if (!latestQr) {
      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
      res.end(renderPage('<h2>Menunggu QR code...</h2><p>Halaman auto-refresh tiap 3 detik.</p>', 3));
      return;
    }

    const qrImageDataUrl = await QRCode.toDataURL(latestQr, { width: 320 });
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(
      renderPage(
        `<h2>Scan QR code untuk login WhatsApp</h2>
         <img src="${qrImageDataUrl}" width="320" height="320" style="background:#fff;padding:12px;border-radius:8px" />
         <p>WhatsApp &gt; Setelan &gt; Perangkat Tertaut &gt; Tautkan Perangkat.<br/>Halaman auto-refresh tiap 15 detik (QR akan diperbarui otomatis).</p>`,
        15
      )
    );
  });

  server.listen(port, () => {
    console.log(`QR web server listening on port ${port}`);
  });
}

module.exports = { startQrServer, setQr, setStatus };
