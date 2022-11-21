self.addEventListener('install', e => {
    e.waitUntil(
        caches.open('static').then(cache => {
            return cache.addAll([
                "./",
                "images/favicon.png",
                "main.js",
                "utils.js",
                "filters.js",
                "camera.js",
                "audio/camera-13695.wav",
                "style.css",
                "sw.js",
                "favicon.ico",
                "manifest.json"
                ])
        })
    )
})

self.addEventListener("fetch",e =>{
    console.log('request_handle')
    e.respondWith(
        caches.match(e.request).then(res =>{
            return res || fetch(e.request)
        })
        )
})
