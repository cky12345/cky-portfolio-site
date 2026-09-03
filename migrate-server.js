const http = require('http');
const fs = require('fs');
const path = require('path');
const root = __dirname;
http.createServer((request, response) => {
  response.setHeader('Access-Control-Allow-Origin', '*');
  if (request.method !== 'POST' || request.url !== '/__migrate-config') { response.writeHead(404); response.end(); return; }
  let body = '';
  request.on('data', chunk => { body += chunk; });
  request.on('end', () => {
    try {
      const incoming = JSON.parse(body);
      const configPath = path.join(root, 'cky-portfolio-config.json');
      const current = JSON.parse(fs.readFileSync(configPath, 'utf8'));
      const merged = {...current, ...incoming, version:Math.max(Number(current.version) || 0, Number(incoming.version) || 0) + 1, exportedAt:new Date().toISOString()};
      fs.writeFileSync(configPath, JSON.stringify(merged, null, 2), 'utf8');
      response.writeHead(200, {'Content-Type':'application/json'}); response.end(JSON.stringify({ok:true}));
    } catch (error) { response.writeHead(400); response.end(String(error)); }
  });
}).listen(8010, '127.0.0.1');
