var CACHE_PREFIX = 'A';

var CACHE_VERSION_MAJOR = 0;
var CACHE_VERSION_MINOR = 1;
var CACHE_VERSION_PATCH = 1;

var CACHE_VERSION = CACHE_VERSION_MAJOR+'.'+CACHE_VERSION_MINOR+'.'+CACHE_VERSION_PATCH;

const staticCacheName = 's-'+CACHE_PREFIX+'-'+CACHE_VERSION;
const dynamicCacheName = 'd-'+CACHE_PREFIX+'-'+CACHE_VERSION_MAJOR+'.'+CACHE_VERSION_MINOR;

const assetUrls = [
	'/',

	'/index.html',
	'/manifest.json',

	'/audio/click.mp3',
	'/audio/end.mp3',
	'/audio/error.mp3',
	'/audio/start.mp3',
	'/audio/timer.mp3',
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
