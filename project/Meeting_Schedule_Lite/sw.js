var CACHE_PREFIX = 'MS';

var CACHE_VERSION_MAJOR = 0;
var CACHE_VERSION_MINOR = 1;
var CACHE_VERSION_PATCH = 2;

var CACHE_VERSION = CACHE_VERSION_MAJOR+'.'+CACHE_VERSION_MINOR+'.'+CACHE_VERSION_PATCH;

const staticCacheName = 's-'+CACHE_PREFIX+'-'+CACHE_VERSION;
const dynamicCacheName = 'd-'+CACHE_PREFIX+'-'+CACHE_VERSION_MAJOR+'.'+CACHE_VERSION_MINOR;

const assetUrls = [
	'/',

	'/index.html',
	'/manifest.json',

	'/js/canvg.js',
	'/js/FileSaver.js',
	'/js/rgbcolor.js',
	'/js/StackBlur.js',

	'/img/favicon.ico',
	'/img/apple-touch-icon.png',
	'/img/icon-192.png',
	'/img/icon-512.png',
	'/img/icon-192-maskable.png',
	'/img/icon-512-maskable.png',
	'/img/Logo-152.png',
	'/img/Logo-167.png',
	'/img/Logo-180.png',

	'/woff/L0xuDF4xlVMF-BfR8bXMIhJHg45mwgGEFl0_3vq_QOW4Ep0.woff2',
	'/woff/L0xuDF4xlVMF-BfR8bXMIhJHg45mwgGEFl0_3vq_ROW4.woff2'
]

self.addEventListener('install', async event => {
  const cache = await caches.open(staticCacheName)
  await cache.addAll(assetUrls)
})

self.addEventListener('activate', async event => {
  const cacheNames = await caches.keys()
  await Promise.all(
    cacheNames
      .filter(name => name !== staticCacheName)
      .filter(name => name !== dynamicCacheName)
      .map(name => caches.delete(name))
  )
})

self.addEventListener('fetch', event => {
  const {request} = event

  const url = new URL(request.url)
  if (url.origin === location.origin) {
    event.respondWith(cacheFirst(request))
  } else {
    event.respondWith(networkFirst(request))
  }
	event.waitUntil((async () => {
		if (!event.clientId) return;
		const client = await clients.get(event.clientId);
		if (!client) return;
		client.postMessage({
			msg: `${CACHE_PREFIX}-${CACHE_VERSION}`
		})
	})());
})

self.addEventListener('message', event => {
	if (event.data === 'skipWaiting') return skipWaiting();
});


async function cacheFirst(request) {
  const cached = await caches.match(request)
  return cached ?? await fetch(request)
}

async function networkFirst(request) {
  const cache = await caches.open(dynamicCacheName)
  try {
    const response = await fetch(request)
    await cache.put(request, response.clone())
		return response
  } catch (e) {
    const cached = await cache.match(request)
    return cached ?? new Response("Network error happened", {
      status: 404,
      headers: { "Content-Type": "text/plain" },
    })
  }
}
