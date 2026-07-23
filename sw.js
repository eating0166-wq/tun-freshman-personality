const CACHE_NAME = "tun-personality-v5-20260723";
const CORE_ASSETS = [
  "./",
  "./index.html",
  "./assets/styles.css",
  "./assets/config.js",
  "./assets/analytics.js",
  "./assets/app.js",
  "./assets/register-sw.js",
  "./assets/og-cover.jpg",
  "./manifest.webmanifest",
  "./images/asset-01.webp",
  "./images/asset-02.webp",
  "./images/asset-03.webp",
  "./images/asset-04.webp",
  "./images/asset-05.webp",
  "./images/asset-06.webp",
  "./images/asset-07.webp",
  "./images/asset-08.webp",
  "./images/asset-09.webp",
  "./images/asset-10.webp",
  "./images/asset-11.webp",
  "./images/asset-12.webp",
  "./images/asset-13.webp",
  "./images/loading-campus.webp",
  "./images/loading-club.webp",
  "./images/loading-course.webp",
  "./images/loading-dorm.webp",
  "./images/loading-food.webp",
  "./images/loading-friends.webp",
  "./images/loading-growth.webp",
  "./images/loading-love.webp",
  "./images/loading-parttime.webp",
  "./images/loading-report.webp",
  "./images/loading-saving.webp",
  "./images/loading-sleep.webp",
  "./images/result-campus.webp",
  "./images/result-club.webp",
  "./images/result-course.webp",
  "./images/result-dorm.webp",
  "./images/result-food.webp",
  "./images/result-friends.webp",
  "./images/result-growth.webp",
  "./images/result-love.webp",
  "./images/result-parttime.webp",
  "./images/result-report.webp",
  "./images/result-saving.webp",
  "./images/result-sleep.webp"
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
