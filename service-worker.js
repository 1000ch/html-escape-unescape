const CACHE_KEY = 'v1';

self.addEventListener('install', e => {

  e.waitUntil(
    caches.open(CACHE_KEY).then(cache => {
      return cache.addAll([
        'index.html',
        'app.js'
      ]);
    }).catch(e => console.log(e))
  );
});

self.addEventListener('fetch', e => {

  e.respondWith(
    caches.open(CACHE_KEY).then(cache => {
      return cache.match(e.request).then(response => {
        return response || fetch(e.request.clone()).then(response => {
          cache.put(e.request, response.clone());
          return response;
        });
      });
    })
  );
});
