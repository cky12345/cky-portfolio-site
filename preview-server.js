const http = require('http');
const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname);
const host = '127.0.0.1';
const port = 8000;
const configPath = path.join(root, 'cky-portfolio-config.json');
function writeConfigArtifacts(merged) {
  fs.writeFileSync(configPath, JSON.stringify(merged, null, 2), 'utf8');
  fs.writeFileSync(path.join(root, 'cky-portfolio-config-live.js'), `window.__CKY_PORTFOLIO_CONFIG__ = ${JSON.stringify(merged)};`, 'utf8');
}
const mimeTypes = {
  '.html':'text/html; charset=utf-8', '.js':'text/javascript; charset=utf-8', '.css':'text/css; charset=utf-8',
  '.json':'application/json; charset=utf-8', '.png':'image/png', '.jpg':'image/jpeg', '.jpeg':'image/jpeg',
  '.gif':'image/gif', '.svg':'image/svg+xml', '.mp4':'video/mp4', '.webm':'video/webm', '.ogg':'video/ogg',
  '.pdf':'application/pdf', '.woff':'font/woff', '.woff2':'font/woff2'
};

function sendError(response, status, message) {
  response.writeHead(status, {'Content-Type':'text/plain; charset=utf-8'});
  response.end(message);
}

http.createServer((request, response) => {
  if (request.method === 'OPTIONS' && request.url === '/__migrate-config') {
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    response.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    response.writeHead(204); response.end(); return;
  }
  if (request.method === 'POST' && request.url === '/__migrate-config') {
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    response.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    let body = '';
    request.on('data', chunk => { body += chunk; if (body.length > 25_000_000) request.destroy(); });
    request.on('end', () => {
      try {
        const incoming = JSON.parse(body);
        const current = JSON.parse(fs.readFileSync(configPath, 'utf8'));
        const merged = {...current, ...incoming, version:Math.max(Number(current.version) || 0, Number(incoming.version) || 0) + 1, exportedAt:new Date().toISOString()};
        writeConfigArtifacts(merged);
        response.writeHead(200, {'Content-Type':'application/json; charset=utf-8'});
        response.end(JSON.stringify({ok:true, configPath}));
      } catch (error) { sendError(response, 400, String(error)); }
    });
    return;
  }
  let pathname;
  try { pathname = decodeURIComponent(new URL(request.url, `http://${host}:${port}`).pathname); }
  catch { sendError(response, 400, 'Bad request'); return; }
  if (pathname.endsWith('/')) pathname += 'index.html';
  const filePath = path.resolve(root, '.' + pathname);
  if (filePath !== root && !filePath.startsWith(root + path.sep)) { sendError(response, 403, 'Forbidden'); return; }

  fs.stat(filePath, (statError, stat) => {
    if (statError || !stat.isFile()) { sendError(response, 404, 'Not found'); return; }
    const contentType = mimeTypes[path.extname(filePath).toLowerCase()] || 'application/octet-stream';
    const commonHeaders = {'Accept-Ranges':'bytes', 'Content-Type':contentType, 'Cache-Control':'no-cache'};
    const range = request.headers.range;
    if (range) {
      const match = /^bytes=(\d*)-(\d*)$/.exec(range);
      if (!match) { response.writeHead(416, {...commonHeaders, 'Content-Range':`bytes */${stat.size}`}); response.end(); return; }
      const start = match[1] ? Number(match[1]) : 0;
      const end = match[2] ? Math.min(Number(match[2]), stat.size - 1) : stat.size - 1;
      if (!Number.isFinite(start) || !Number.isFinite(end) || start > end || start >= stat.size) {
        response.writeHead(416, {...commonHeaders, 'Content-Range':`bytes */${stat.size}`}); response.end(); return;
      }
      response.writeHead(206, {...commonHeaders, 'Content-Range':`bytes ${start}-${end}/${stat.size}`, 'Content-Length':end - start + 1});
      if (request.method === 'HEAD') { response.end(); return; }
      fs.createReadStream(filePath, {start, end}).pipe(response);
      return;
    }
    response.writeHead(200, {...commonHeaders, 'Content-Length':stat.size});
    if (request.method === 'HEAD') { response.end(); return; }
    fs.createReadStream(filePath).pipe(response);
  });
}).listen(port, host, () => {
  console.log(`CKY portfolio preview: http://${host}:${port}/frame-selector.html`);
});
