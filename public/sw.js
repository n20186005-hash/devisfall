/* Devi's Fall Pokhara — service worker v2026-10-26 */
const VERSION = 'devisfall-v2026-10-26';
const CORE = [
  '/', '/pravesh-shulka/', '/khulne-samaya/', '/bato/', '/en/', '/en/entry-fee/', '/en/opening-hours/', '/en/how-to-reach/',
  '/site.webmanifest',
  '/favicon.svg',
  '/favicon-32.png',
  '/favicon-16.png',
  '/apple-touch-icon.png',
  '/logo.svg',
  '/images/devis-fall-monsoon.jpg',
  '/images/devis-fall-gorge.jpg',
  '/images/devis-fall-rock-channel.jpg',
  '/images/devis-fall-from-gupteshwor-cave.jpg',
];

self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(VERSION).then((cache) => cache.addAll(CORE)).catch(() => {})
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((key) => key !== VERSION).map((key) => caches.delete(key)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const { request } = event;
  if (request.method !== 'GET') return;
  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  // Navigation: network-first with offline fallback to the same cached page.
  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request)
        .then((response) => {
          const copy = response.clone();
          if (response.ok) caches.open(VERSION).then((cache) => cache.put(request, copy)).catch(() => {});
          return response;
        })
        .catch(async () => (await caches.match(request)) || new Response('Offline: this page is not cached. / अफलाइन: यो पृष्ठ सुरक्षित छैन।', {status:503,headers:{'Content-Type':'text/plain; charset=utf-8'}}))
    );
    return;
  }

  // Static assets: cache-first, then network.
  event.respondWith(
    caches.match(request).then(
      (cached) =>
        cached ||
        fetch(request).then((response) => {
          if (response.ok && (url.pathname.startsWith('/images/') || url.pathname.endsWith('.svg') || url.pathname.endsWith('.png') || url.pathname.endsWith('.webmanifest'))) {
            const copy = response.clone();
            if (response.ok) caches.open(VERSION).then((cache) => cache.put(request, copy)).catch(() => {});
          }
          return response;
        })
    )
  );
});
