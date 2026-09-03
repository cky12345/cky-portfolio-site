@echo off
cd /d "%~dp0"
echo CKY Portfolio Preview
echo Open: http://127.0.0.1:8000/frame-selector.html
echo Keep this window open while editing. Saves can sync to the project files automatically.
echo After syncing, use Git to commit cky-portfolio-config.json and cky-portfolio-config-live.js.
node preview-server.js
pause
