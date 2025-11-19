// sw.js – minimal, mit sofortigem Update

self.addEventListener('install', (event) => {
  // neue Version sofort aktivieren
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  // alle offenen Seiten übernehmen
  event.waitUntil(clients.claim());
});

// Kein spezielles Caching – Browser lädt immer direkt vom Server
self.addEventListener('fetch', (event) => {
  // Standard: alles normal durchreichen
  return;
});

