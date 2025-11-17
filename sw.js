
// sw.js – minimal, nur für "installierbar"
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  clients.claim();
});

// Kein Offline-Caching nötig am Anfang
self.addEventListener('fetch', (event) => {
  // Standard: Browser macht ganz normal weiter
});
