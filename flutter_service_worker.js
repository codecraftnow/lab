'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "2579f237ff469bae9ea343fcdb5e24d4",
"assets/AssetManifest.bin.json": "089a6e840c4fca9b66af3724c3ec5d4a",
"assets/AssetManifest.json": "0c3b0284b55f755a27c085719dc4de23",
"assets/assets/animations/flask.json": "e0023f683d90c7b65c59756bb2d41192",
"assets/assets/animations/Lab.json": "3ccd012cfc8984e99bf7d7089be10dca",
"assets/assets/drugs/argan_oil.png": "d133b94789070a2c7a2898d4462c75f3",
"assets/assets/drugs/hyaluronic%2520acid.png": "5d29a279ab1382db93d3b4a7690e6237",
"assets/assets/drugs/niacinamide.png": "f704248cda111ea25ced9b6857f5ff49",
"assets/assets/drugs/retinol.png": "ddd3f037a43a8fe840151b91bcb9d5c8",
"assets/assets/drugs/salicylic_acid.png": "ad485c263acae54c6335dd6a0a648c71",
"assets/assets/drugs/vitamin_c.png": "cae5572925d2af4d8ae12fbcb084fbf9",
"assets/assets/lab.jpg": "4ffa80e0972b6eed3027113e77d5684e",
"assets/assets/lab3.jpg": "e05210d88aa64f357649b429eb341baa",
"assets/assets/lab4.jpg": "99422f3d95d072faee5f4b347a2bea85",
"assets/assets/lab55.jpg": "c0ae4a9f2b979d0c87764dcaf368019e",
"assets/assets/LabBackroung.png": "d68f20dcbe1d2c5027b3dd8888f059b4",
"assets/assets/scenarios/acne_after.jpg": "f07141499f81d312030acf879b5b433d",
"assets/assets/scenarios/acne_before.jpg": "9b8112214e540b1dc1e51e427ff48009",
"assets/assets/scenarios/aging_after.jpg": "672d47896d6973843623de3476149062",
"assets/assets/scenarios/aging_before.jpg": "5161052ccc4100176b5b1cc8f0f4aba7",
"assets/assets/scenarios/dry_skin_after.jpg": "b0ef20ea9eae71809ea38e5b3e12bcf9",
"assets/assets/scenarios/dry_skin_before.jpg": "16892bd0c721753b4b417ea71f27df4c",
"assets/assets/scenarios/dull_skin_after.jpg": "611ad186b2e6a68f13544321b1e779d2",
"assets/assets/scenarios/dull_skin_before.jpg": "7385c9905198e95b9486752f98986d28",
"assets/assets/scenarios/hyperpigmentation_after.jpg": "c15300454c2f03d7e9c9784603128402",
"assets/assets/scenarios/hyperpigmentation_before.jpg": "134b6e00ff260fc8b50c5030014d0ef4",
"assets/assets/sounds/click.mp3": "e0cec2d05ad08b1a5405a569568a47f6",
"assets/assets/sounds/success.mp3": "6ac681c5d7d12fa6bfe023a4fe85c91b",
"assets/assets/sounds/wronganswer.mp3": "bbeec126c4790a1a7858ff3a7466ad22",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "c5723a39afb72f601a08fc911fa86e0e",
"assets/NOTICES": "da62b5f8b8c6adeb9894092f3043533c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "1de46283d6e6f88f5124198cf4cd1f2b",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "c134378487f8b3b26e6acd817b72d0e5",
"/": "c134378487f8b3b26e6acd817b72d0e5",
"main.dart.js": "bbcf95abc2ee73642a32e9195c3acf74",
"manifest.json": "b8d1aa19608b3b068c0ab9c5ac8f5079",
"version.json": "e49e6f8936314f13c79150563447c0ea"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
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
