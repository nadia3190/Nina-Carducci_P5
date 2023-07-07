if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./service-worker.js')
    .then(registration => {
      console.log('Service Worker registered successfully:', registration);
    })
    .catch(error => {
      console.log('Service Worker registration failed:', error);
    });
}


self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('app-cache').then(function(cache) {
      return cache.addAll([
        './',
        './index.html',
        './assets/style.css',
        '.assets/script.js',
        './assets/bootstrap/bootstrap.min.css',
        './assets/style.css',
        './assets/media-query-1000px.css',
        './assets/media-query-650px.css',
        './assets/maugallery.js',
        './assets/scripts.js',
        './assets/images/nina-lossy.webp',
        './assets/images/instagram.png',
        './assets/images/slider/nicholas-green-nPz8akkUmDI-unsplash-1921w-lossy.webp',
        './assets/images/slider/nicholas-green-nPz8akkUmDI-unsplash-1500w-lossy.webp',
        './assets/images/slider/nicholas-green-nPz8akkUmDI-unsplash-650w-lossy.webp',
        './assets/images/slider/ryoji-iwata-wUZjnOv7t0g-unsplash-1921w-lossy.webp',
        './assets/images/slider/ryoji-iwata-wUZjnOv7t0g-unsplash-1500w-lossy.webp',
        './assets/images/slider/ryoji-iwata-wUZjnOv7t0g-unsplash-650w-lossy.webp',
        './assets/images/slider/edward-cisneros-3_h6-1NPDGw-unsplash-1921w-lossy.webp',
        './assets/images/slider/edward-cisneros-3_h6-1NPDGw-unsplash-1500w-lossy.webp',
        './assets/images/slider/edward-cisneros-3_h6-1NPDGw-unsplash-650w-lossy.webp',
        './assets/images/gallery/concerts/aaron-paul-wnX-fXzB6Cw-unsplash-lossy.webp',
        './assets/images/gallery/entreprise/ali-morshedlou-WMD64tMfc4k-unsplash-lossy.webp',
        './assets/images/gallery/entreprise/jason-goodman-tHO1_OuKbg0-unsplash-lossy.webp',
        './assets/images/gallery/mariage/hannah-busing-RvF2R_qMpRk-unsplash-lossy.webp',
        './assets/images/gallery/portraits/ade-tunji-rVkhWWZFAtQ-unsplash-lossy.webp',
        './assets/images/gallery/mariage/jakob-owens-SiniLJkXhMc-unsplash-lossy.webp',
        './assets/images/gallery/portraits/nino-van-prattenburg--443cl1uR_8-unsplash-lossy.webp',
        './assets/images/gallery/concerts/austin-neill-hgO1wFPXl3I-unsplash-lossy.webp',
        './assets/images/gallery/entreprise/mateus-campos-felipe-Fsgzm8N0hIY-unsplash-lossy.webp',
        'https://maps.googleapis.com/maps/api/js?key=AIzaSyCMGEwEORkg9aRTO75iSIRUMV7FtBmuh7k&libraries=places&callback=initMap',
        'https://code.jquery.com/jquery-3.4.1.min.js',
        'https://www.googletagmanager.com/gtag/js?id=G-K6EELY8TG4'
      ]);
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      if (response) {
        return response;
      }
      return fetch(event.request);
    })
  );
});
