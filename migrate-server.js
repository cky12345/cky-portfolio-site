const http = require('http');
const fs = require('fs');
const path = require('path');
const root = __dirname;
const configPath = path.join(root, 'cky-portfolio-config.json');
const frameAssetDir = path.join(root, 'assets', 'frames');
function materializeFrameSelections(config) {
  fs.mkdirSync(frameAssetDir, {recursive:true});
  for (const [id, entry] of Object.entries(config.frames || {})) {
    if (!Array.isArray(entry?.frames)) continue;
    entry.frames = entry.frames.map((item, index) => {
      if (!item || typeof item.dataUrl !== 'string' || !item.dataUrl.startsWith('data:image/')) return item;
      const match = /^data:image\/([a-z0-9.+-]+);base64,(.*)$/i.exec(item.dataUrl);
      if (!match) return item;
      const extension = match[1].toLowerCase() === 'jpeg' ? 'jpg' : match[1].toLowerCase().replace(/[^a-z0-9]/g, '') || 'bin';
      const filename = `${String(id).replace(/[^a-z0-9_-]+/gi, '_')}-${String(index + 1).padStart(2, '0')}.${extension}`;
      fs.writeFileSync(path.join(frameAssetDir, filename), Buffer.from(match[2], 'base64'));
      const next = {...item, src:`assets/frames/${filename}`};
      delete next.dataUrl;
      return next;
    });
  }
  return config;
}
function writeConfigArtifacts(merged) {
  const normalized = materializeFrameSelections(merged);
  fs.writeFileSync(configPath, JSON.stringify(normalized, null, 2), 'utf8');
  fs.writeFileSync(path.join(root, 'cky-portfolio-config-live.js'), `window.__CKY_PORTFOLIO_CONFIG__ = ${JSON.stringify(normalized)};`, 'utf8');
  const indexPath = path.join(root, 'index.html');
  const index = fs.readFileSync(indexPath, 'utf8').replace(/cky-portfolio-config-live\.js\?v=[^"']+/i, `cky-portfolio-config-live.js?v=${normalized.version}`);
  fs.writeFileSync(indexPath, index, 'utf8');
  const selectorPath = path.join(root, 'frame-selector.html');
  const selector = fs.readFileSync(selectorPath, 'utf8').replace(/cky-portfolio-config-live\.js\?v=[^"']+/i, `cky-portfolio-config-live.js?v=${normalized.version}`);
  fs.writeFileSync(selectorPath, selector, 'utf8');
}
http.createServer((request, response) => {
  if (request.method === 'OPTIONS' && request.url === '/__migrate-config') {
    response.writeHead(204, {'Access-Control-Allow-Origin':'*','Access-Control-Allow-Methods':'POST, OPTIONS','Access-Control-Allow-Headers':'Content-Type'}); response.end(); return;
  }
  response.setHeader('Access-Control-Allow-Origin', '*');
  if (request.method !== 'POST' || request.url !== '/__migrate-config') { response.writeHead(404); response.end(); return; }
  let body = '';
  request.on('data', chunk => { body += chunk; });
  request.on('end', () => {
    try {
      const incoming = JSON.parse(body);
      const current = JSON.parse(fs.readFileSync(configPath, 'utf8'));
      const merged = {...current, ...incoming, version:Math.max(Number(current.version) || 0, Number(incoming.version) || 0) + 1, exportedAt:new Date().toISOString()};
      writeConfigArtifacts(merged);
      response.writeHead(200, {'Content-Type':'application/json'}); response.end(JSON.stringify({ok:true}));
    } catch (error) { response.writeHead(400); response.end(String(error)); }
  });
}).listen(8010, '127.0.0.1');
