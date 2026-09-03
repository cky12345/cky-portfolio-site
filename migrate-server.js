const http = require('http');
const fs = require('fs');
const path = require('path');
const root = __dirname;
const configPath = path.join(root, 'cky-portfolio-config.json');
function writeConfigArtifacts(merged) {
  fs.writeFileSync(configPath, JSON.stringify(merged, null, 2), 'utf8');
  fs.writeFileSync(path.join(root, 'cky-portfolio-config-live.js'), `window.__CKY_PORTFOLIO_CONFIG__ = ${JSON.stringify(merged)};`, 'utf8');
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
