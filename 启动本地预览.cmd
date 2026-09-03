@echo off
cd /d "%~dp0"
echo CKY Portfolio Preview
echo Open: http://127.0.0.1:8000/frame-selector.html
echo Keep this window open while editing.
node preview-server.js
pause
