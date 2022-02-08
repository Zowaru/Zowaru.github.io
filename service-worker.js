// questo file viene avviato nel caso in cui l' "app" venga aperta in modalità offline

// nome per istanza di cache
const cacheName = 'cache-v3';

// lista dei file in pre-cache
const precacheResources = ['/', '/index.html', '/stile/style.css', '/main.js', '/img/clock.png', '/interrogazioni/index.html'];

// mentre "installa" il sito, scarica la lista dei file nella pre-cache
self.addEventListener('install', (event) => {
  console.log('Installazione sito...');
  event.waitUntil(caches.open(cacheName).then((cache) => cache.addAll(precacheResources)));
});

self.addEventListener('activate', (event) => {
  console.log('Service worker activate event!');
});

// per qualsiasi richiesta di fetch, prova a rispondere con le risorse in cache
self.addEventListener('fetch', (event) => {
  console.log('Fetch intercepted for:', event.request.url);
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }

      return fetch(event.request);
    }),
  );
});
