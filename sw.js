const CACHE_NAME = 'study-timer-v1';
const assets = [
  './',
  './index.html',
  './manifest.json'
];

// تثبيت ملفات الكاش
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(assets);
    })
  );
});

// استرجاع الملفات عند انقطاع النت
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
