'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "7630d734ef07a8febb4db0a27dd3abdb",
"assets/assets/gallery/Cyberpunk%25202077/00.jpg": "4c9e888e46c832d706f194dff5c4009a",
"assets/assets/gallery/Cyberpunk%25202077/01.jpg": "26e2c3257d6817bce7d9ca5c238c51d6",
"assets/assets/gallery/Cyberpunk%25202077/02.jpg": "ce2ccb38d83cd8287baffd86ceff3cb1",
"assets/assets/gallery/Cyberpunk%25202077/03.jpg": "40c54afae447f1eb2cd1d64b9c6653e9",
"assets/assets/gallery/Death%2520Stranding/00.jpg": "ee9983eba3c2d07aa3e13a3d3f1db6d8",
"assets/assets/gallery/Death%2520Stranding/01.jpg": "15231f144132be710d854f7bba6be6e2",
"assets/assets/gallery/Death%2520Stranding/02.jpg": "a800f0dded3babe222477ae0fcb3aaaa",
"assets/assets/gallery/Death%2520Stranding/03.png": "cd26fa9de08a05cd88bde4094e56aa71",
"assets/assets/gallery/Elden%2520Ring/00.jpg": "b2af52595ae259874ea7f77c29c30b9a",
"assets/assets/gallery/Elden%2520Ring/01.jpg": "05f45d3d321ffaa384be5e219fc8a3ec",
"assets/assets/gallery/Elden%2520Ring/02.jpg": "d1ccac973ae6a86115971c943545de0a",
"assets/assets/gallery/Elden%2520Ring/03.jpg": "c61b5fc1dc99167696ca3db8a777df15",
"assets/assets/gallery/Forza%2520Horizon%25204/00.png": "203490cccc8eaf0a7daaec71a866f360",
"assets/assets/gallery/Forza%2520Horizon%25204/01.png": "4b301e787a6a01b7d1561b4b245710ed",
"assets/assets/gallery/Forza%2520Horizon%25204/02.png": "080bbbf55a63eba0fcb195382a4160b0",
"assets/assets/gallery/Forza%2520Horizon%25204/03.png": "bf6e1ab52f923ef4edd727dd8cf72300",
"assets/assets/gallery/Forza%2520Horizon%25204/04.png": "2aab68063476ca91076892c4ab683a04",
"assets/assets/gallery/Forza%2520Horizon%25204/05.png": "ce0fff7b11acfd2a45924a92e357b134",
"assets/assets/gallery/Forza%2520Horizon%25204/06.png": "fb3b2d9175443b3eaaa4df457f923380",
"assets/assets/gallery/God%2520of%2520War/00.jpg": "7e4a5b81f78b27efddaf7a866d48e1ce",
"assets/assets/gallery/God%2520of%2520War/01.jpg": "f44e2f0c0b37dc4c27c50548a7d609e6",
"assets/assets/gallery/God%2520of%2520War/02.jpg": "bb179c177b1279f0b2bd9406b506d241",
"assets/assets/gallery/God%2520of%2520War/03.jpg": "5276c82625687099333229e176a571d5",
"assets/assets/gallery/God%2520of%2520War/04.jpg": "1ab19d75c98b393b5639d6f97121d924",
"assets/assets/gallery/God%2520of%2520War/05.jpg": "3f38a63559ba2c6cb135330677e98310",
"assets/assets/gallery/God%2520of%2520War/Eir.jpg": "4fe2c004f15e4c266c9c9a01d78c3149",
"assets/assets/gallery/God%2520of%2520War/Geirdriful.jpg": "fd1bf8b4b6899937cd42e4acedf71110",
"assets/assets/gallery/God%2520of%2520War/Gondul.jpg": "acf8b323c8f34302350233dbbfe0e76c",
"assets/assets/gallery/God%2520of%2520War/Gunnr.jpg": "f60d444c3516a45d2b64d7d973293093",
"assets/assets/gallery/God%2520of%2520War/Hildr.jpg": "8d5c0c611eaf2755d3d19e85403516ff",
"assets/assets/gallery/God%2520of%2520War/Kara.jpg": "6b29b4cb4a80ae867c5033d32c9017be",
"assets/assets/gallery/God%2520of%2520War/Olrun.jpg": "72f308fbf6515bf5441880bf8ce349f7",
"assets/assets/gallery/God%2520of%2520War/Rota.jpg": "c2d6967f1b4ea6f4c005279171ba2b19",
"assets/assets/gallery/God%2520of%2520War/Sigrun.jpg": "54f9eab78b8050a21fc793c477cb454a",
"assets/assets/gallery/Red%2520Dead%2520Redemption%25202/00.png": "019e62ccb7bc0eb43d9c3c88a62b5079",
"assets/assets/gallery/Red%2520Dead%2520Redemption%25202/01.png": "85077aaf58b995707478e8a902c1b0c3",
"assets/assets/gallery/Red%2520Dead%2520Redemption%25202/02.png": "bf8fb58e0df036f00b27ca8af05e2156",
"assets/assets/gallery/Red%2520Dead%2520Redemption%25202/03.png": "a70733f33aedf3f039176eee13880ced",
"assets/assets/gallery/Red%2520Dead%2520Redemption%25202/04.png": "6023a6364f796574301fb05484688660",
"assets/assets/gallery/Red%2520Dead%2520Redemption%25202/05.png": "a93192ad9c73c3dfd27cd69e0c0ac91b",
"assets/assets/gallery/Red%2520Dead%2520Redemption%25202/06.png": "c466ba5d62079ee86b16123c3f08fa60",
"assets/assets/gallery/Red%2520Dead%2520Redemption%25202/07.png": "ea156c8b22cb8a236ade3ca3a5df2fcb",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/NOTICES": "558c7d88ed633d49c6585673806e9261",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "9a905fbaedd97fa6a34ca3855277dede",
"/": "9a905fbaedd97fa6a34ca3855277dede",
"main.dart.js": "a7256a1ec25a38b72058cea1117d8b74",
"manifest.json": "e74af8957b5899dc6da961caee768ec9",
"version.json": "009c9e65172e010890f7f65fde438006"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
