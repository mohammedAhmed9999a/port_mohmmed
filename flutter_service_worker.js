'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "de5774c5cd31ca1e6deae20638e1b323",
"assets/AssetManifest.bin.json": "aface87dc62afba396f0bbcc66a341ea",
"assets/AssetManifest.json": "0a9925f3cf7e9e940d00251091461008",
"assets/assets/image/Arrow.png": "03033ebfcfd0f49350c95eadc175cc28",
"assets/assets/image/DocBook.png": "26bbb05f5743771f0d73267f1f8e9248",
"assets/assets/image/doctor.png": "7d5045a63c9444d8df2277b42e3c0a09",
"assets/assets/image/doctorBook.png": "2047f1da955216807c3c3cc4a322cc76",
"assets/assets/image/facebook.png": "0240819d4fb8f619905fe3a138bcdde1",
"assets/assets/image/flutter.png": "5c14d256d51ed877ddf0c32a6e16a201",
"assets/assets/image/flutterIcon.png": "3c5c4b9551c5b1439cd74a2c69898843",
"assets/assets/image/flutterIcon1.png": "d1fa0f0915d34a4a5e01a5f6667fae55",
"assets/assets/image/horse.png": "c818e46278a9046c0fafcdaae6f24c17",
"assets/assets/image/icons8-dart-96.png": "2e0719b33b5cdd1ece46611b4d3d4a81",
"assets/assets/image/icons8-email-64.png": "51efd5e54fcfdffd0c106b2128870c49",
"assets/assets/image/icons8-facebook-144.png": "d4bfb7b58f3a8064589782488d82fd4f",
"assets/assets/image/icons8-firebase-a-google's-mobile-platform-that-helps-you-quickly-develop-high-quality-apps-96.png": "5bb2cb1d383353e6ced80930d1097615",
"assets/assets/image/icons8-github-128.png": "391224f4a41ff395304b4fb07d599e3e",
"assets/assets/image/icons8-github-144.png": "1bee0a982c33b953ebbd97b483aef1c8",
"assets/assets/image/icons8-github-64.png": "536f41464baac2b7f6eaa7e03f613f6c",
"assets/assets/image/icons8-github-96.png": "f4e308af32e12afea86e01fe069f34cf",
"assets/assets/image/icons8-linked-in-144.png": "07fc726475115bb0415e1b3e30572599",
"assets/assets/image/icons8-rest-api-64.png": "c2e5d28ae7bd2d67ec14463a19865a71",
"assets/assets/image/icons8-rest-api-96.png": "28d1eb3021a4d66a38026bcc26fbe5f4",
"assets/assets/image/icons8-whatsapp-128.png": "ccd847855e185cc55c4f8c317c5ec739",
"assets/assets/image/image%25201.png": "22f33f6d5f6101fe246f80a4ed6eb557",
"assets/assets/image/Linked.png": "35758a9e22c1e002e4005cd63ea74270",
"assets/assets/image/moh.png": "2030d20fe66dd62e39ed17d7d4786afa",
"assets/assets/image/moh1.png": "239e51ef2a0b224201951d6e9bd62ec3",
"assets/assets/image/mreth.png": "2319b64666c2e7565fa43044d9171cbe",
"assets/assets/image/newsApp.png": "47747a6107acaed9e7c1fe82ad28d1a8",
"assets/assets/image/news_icon.png": "55c7c5d16b41268824a862412a23a94d",
"assets/assets/image/p1.png": "09a2617c06d7f13e2a031759c948cf33",
"assets/assets/image/p2.png": "6789811d4c190d0296b4dc80cd52478c",
"assets/assets/image/Rectangle.png": "6d66a333eb91a5de899ec90ef0091e26",
"assets/assets/image/shopping.png": "a5f81f8827b3149e98e2542b3b5dd71b",
"assets/assets/image/smart.jpg": "b05ca42fe4a9070eed3843782948057b",
"assets/assets/image/test.png": "fef3135a87ca268b8c6dca6577d6f8bc",
"assets/assets/image/vecteezy_veterinarian-icon.png": "c248d580655663efbddfc987e79dfa52",
"assets/assets/image/weather.png": "311189e9e1585ca33a1a94e83ea89959",
"assets/assets/image/weather1.png": "deb45cd0f4ee5fe5d3df13fb7cdde29f",
"assets/assets/image/weatherApp.png": "96debd1d8fd1e54875d7acc00d4f2e92",
"assets/assets/image/WhatsApp.png": "697d416f3d4d5c98f36f6707f84eddfd",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/NOTICES": "1bdb9e73ba3231b6647ed9f40f43a907",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "0ad24a4a58a03bcc13258d9c6ffbd98f",
"/": "0ad24a4a58a03bcc13258d9c6ffbd98f",
"main.dart.js": "d019724ff363ff1e9752e43d697d3510",
"manifest.json": "4468e854e57d4f5e165f671d76f86389",
"version.json": "8585d3ccf3c6a8fdf38d3dfdb419457c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
