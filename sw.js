const CACHE_NAME = "tun-personality-v5-1-20260723";
const CORE_ASSETS = [
  "./",
  "./index.html",
  "./styles.css",
  "./config.js",
  "./analytics.js",
  "./app.js",
  "./register-sw.js",
  "./og-cover.jpg",
  "./manifest.webmanifest",
  "./asset-01.webp",
  "./asset-02.webp",
  "./asset-03.webp",
  "./asset-04.webp",
  "./asset-05.webp",
  "./asset-06.webp",
  "./asset-07.webp",
  "./asset-08.webp",
  "./asset-09.webp",
  "./asset-10.webp",
  "./asset-11.webp",
  "./asset-12.webp",
  "./asset-13.webp",
  "./loading-campus.webp",
  "./loading-club.webp",
  "./loading-course.webp",
  "./loading-dorm.webp",
  "./loading-food.webp",
  "./loading-friends.webp",
  "./loading-growth.webp",
  "./loading-love.webp",
  "./loading-parttime.webp",
  "./loading-report.webp",
  "./loading-saving.webp",
  "./loading-sleep.webp",
  "./result-campus.webp",
  "./result-club.webp",
  "./result-course.webp",
  "./result-dorm.webp",
  "./result-food.webp",
  "./result-friends.webp",
  "./result-growth.webp",
  "./result-love.webp",
  "./result-parttime.webp",
  "./result-report.webp",
  "./result-saving.webp",
  "./result-sleep.webp"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(CORE_ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key)))
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", event => {
  if (event.request.method !== "GET") return;

  const requestUrl = new URL(event.request.url);

  if (event.request.mode === "navigate") {
    event.respondWith(
      fetch(event.request)
        .then(response => {
          const copy = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put("./index.html", copy));
          return response;
        })
        .catch(() => caches.match("./index.html"))
    );
    return;
  }

  if (requestUrl.origin === self.location.origin) {
    event.respondWith(
      caches.match(event.request).then(cached => {
        const network = fetch(event.request).then(response => {
          const copy = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, copy));
          return response;
        });
        return cached || network;
      })
    );
  }
});
