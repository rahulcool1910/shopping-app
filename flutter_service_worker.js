'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "57ab93a4bba0ddcacb49fcbbeb6d0ca4",
"index.html": "8a72da3c038d4d84d886bae8964c3af9",
"/": "8a72da3c038d4d84d886bae8964c3af9",
"main.dart.js": "bfb9e00f2bff229c2acfc95f423a185a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "1990d4987ddd921436f89cf9954a33f7",
"Archive.zip": "469de22a930fd6823773038fae2acb85",
"assets/AssetManifest.json": "7ab81282c7b3df909b228a14e57102dd",
"assets/NOTICES": "6fa9d7a07cb85093559ca406277728f0",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/assets/svg/oval.svg": "23bc8b2522a93cc68cc1d4c60f85e075",
"assets/assets/svg/undraw_gone_shopping_vwmc.svg": "aefce4489355e8e0515c6e5248a511ec",
"assets/assets/svg/undraw_Successful_purchase_re_mpig.svg": "3d1698c0eef354190cda5753a1f7255c",
"assets/assets/svg/suite.svg": "22a92c4bf44ad4d0dee7d9f59fe7951d",
"assets/assets/svg/marilyn_mandrow.svg": "efefccdfc1987d1aa9694313102beea4",
"assets/assets/svg/undraw_girl_just_wanna_have_fun_9d5u.svg": "65c6eb030b38c54c1c2cbf125eeed12c",
"assets/assets/recommended4.jpg": "f2fef34ab5e1338cd0252ecf785bd8b6",
"assets/assets/Mask%2520Group%25208.jpg": "72a979d018f64071cc2424e29752076c",
"assets/assets/Mask%2520Group%25209.jpg": "db3f66dbd52c1c364389b5530fab176e",
"assets/assets/recommended5.jpg": "a12694510e8c59d607dad4f77ac57630",
"assets/assets/Men.jpg": "3d4125770dc9334ef9c3f8bf1c51173f",
"assets/assets/product8.jpg": "4b5ae7d16a697fddeb3f62585e51735e",
"assets/assets/Group%252066.jpg": "7e3e45173836b4361cd8373b6d7af277",
"assets/assets/recommended6.jpg": "835ba9e3a8153250dd4bc88e1f63a133",
"assets/assets/shopping_bag.svg": "e2cb38952df30fa71b3498d91fcac989",
"assets/assets/recommended2.jpg": "147ba9b8f64f66357232776524e7e013",
"assets/assets/Mask_Group_12.jpg": "90ccccb36e8fe10b51f087f4fcf35757",
"assets/assets/Group%252062.jpg": "0953c6f521fbd9801de08f53dbb4de21",
"assets/assets/recommended3.jpg": "f9f224982402f6ba885ec336e50bf84e",
"assets/assets/recommended1.jpg": "dedf0df63ca72200544e110da5f6a430",
"assets/assets/product3_1.jpg": "bce1b80b00be68b88e58b95a9698bb36",
"assets/assets/Mask%2520Group%252010.jpg": "0c813a4186eeebb1e0624ad3fad0755c",
"assets/assets/product3_2.jpg": "6babd0f7e8981d840cb8f0ac22d21138",
"assets/assets/Kids.jpg": "517c75029dd1cf829931a07b52c3c016",
"assets/assets/Group%252039.jpg": "8e14029064afa6040c161ab57aa71b7c",
"assets/assets/Group%252038.jpg": "916c1a708b87ead6cb03ba0683bfe09a",
"assets/assets/Women.jpg": "629c790a30c9ea3c211567168b8769c2",
"assets/assets/product3_3.jpg": "004746f83c7c570de52b0e7f780402bc",
"assets/assets/Group%252029.jpg": "0917ac03da28823a279b5326ed69db4e",
"assets/assets/product3_4.jpg": "a351a8f906fe3f0bfc23d87f1f8d7618",
"assets/assets/Component%25201%2520%25E2%2580%2593%25201.jpg": "ebbb89273c9f0dc6d18978456bff08af",
"assets/assets/colour%2520palette.txt": "a43c35c283b9826dac574c19dd74e21f",
"assets/assets/Group_9.jpg": "cdc94bdbcbe2cd12eea4d44036a8b98e",
"assets/assets/r-removebg-preview.jpg": "d9331f1913b8b4ba080ae676109ad2e0",
"assets/assets/Avatar.jpg": "a36223caab8be059222903772b8d0cf7",
"assets/assets/Group%252024.jpg": "fd0b942e7f1d8a30223821f2733a4495",
"assets/assets/Mask%2520Group%252020.jpg": "017c5aebe719a41595857a6df89bbfd8",
"assets/assets/trending1.jpg": "aa9e102b3a29c0b73ba41a5206a3c5b8",
"assets/assets/Cosmetics.jpg": "801dd50f8c9cd5c498b2415915d341f4",
"assets/assets/Mask%2520Group%252021.jpg": "7c46f48610dff9e6fedaa7ebf15b588c",
"assets/assets/Mask%2520Group%252023.jpg": "faa55c06b981269d1fe59abe829adb55",
"assets/assets/Masks.jpg": "97511179dbc76f05b73ba50680df939d",
"assets/assets/Group%252022.jpg": "190b32e9970c477bd9bfc401771abdfe",
"assets/assets/trending2.jpg": "06563c2ace7636b34a364dca88cf95bc",
"assets/assets/Avatar1.png": "ea2f9538e90fc5e2f50efa1ac6168ff0",
"assets/assets/Mask%2520Group%252022.jpg": "9b8c6b37645ba6fb82755031f5497ece",
"assets/assets/product2.jpg": "607194833fc170379ee591e0e762bfad",
"assets/assets/Group%252078.jpg": "edc77382efca4c59bd11cdd6a10caad1",
"assets/assets/Accessories.jpg": "6923fc7c54c097ae36933ecc0b3b7b90",
"assets/assets/product3.jpg": "f2846e83414a8fb2f1de7de019792b13",
"assets/assets/product1.jpg": "e48a3d1781c986bbf43b0531eada4c8f",
"assets/assets/Mask%2520Group%25203.jpg": "c5894e05bc6423af13a7d8e6bc302334",
"assets/assets/offer4.jpg": "63f6b89b7374e2c52139956bd1498b11",
"assets/assets/product4.jpg": "69db6902aa90c8f806dcd0eb4e2e3915",
"assets/assets/Mask%2520Group%25207.jpg": "580701bd1bbe2c8cc4f48377eb69dd2a",
"assets/assets/Mask%2520Group%25206.jpg": "0c0d948df0e1620bc482f35043079746",
"assets/assets/product5.jpg": "5fab94443b25c8af6f8d23e916c41036",
"assets/assets/offer1.jpg": "994135afffcde4e7cfa18dd278ce43df",
"assets/assets/offer3.jpg": "92d2a6feb9495b23aa8eede6096af1d8",
"assets/assets/flare/camera.flr": "c9443b7e6a63246beb8e78b59a97a3da",
"assets/assets/flare/logo.flr": "e69c1b05ddc682b829899696bf03b787",
"assets/assets/flare/menu.flr": "2f0557396f7f74d30acc95198f0fd06e",
"assets/assets/flare/test.flr": "b2ec9109e557244e22a4badd81c53cc5",
"assets/assets/flare/heart.flr": "aed4850e9db0fd2e3471a944e64a0e95",
"assets/assets/flare/head.flr": "8cb0bb455a9b3dfc6f8fc0d291ebbb80",
"assets/assets/flare/house.flr": "8c4bacf6fcef2e6d6aade85fb81c25ce",
"assets/assets/flare/cart.flr": "75e58117ac0e9ffeec0820efff222534",
"assets/assets/flare/planet.flr": "8e5b36e93900ef8dae00bbebbe8ed1fc",
"assets/assets/Mask%2520Group%25204.jpg": "b4df2ea86f955ec5516b6e9cc98b9837",
"assets/assets/product7.jpg": "f751a91456530838e85601362685d00c",
"assets/assets/Mask_Group_19.jpg": "be7457fbec73c561201295129eb38fba",
"assets/assets/product6.jpg": "4fb6008460632c40b6ce4dbfdb5fb3fa",
"assets/assets/Mask%2520Group%25205.jpg": "886335c25df454c57ab42e1f5df3cc25",
"assets/assets/offer2.jpg": "24abad2c2409cc50feffa667df21cd09"
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
