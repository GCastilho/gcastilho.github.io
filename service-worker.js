!function(){"use strict";const e=["client/client.cc6456e9.js","client/VideoList.395518d1.js","client/index.21c8bea1.js","client/ArticlesList.6da32c1b.js","client/index.2ec9638f.js","client/Article.7fc26480.js","client/[slug].ea4cbcf1.js","client/index.4c72a5a7.js","client/index.866be88a.js","client/[slug].ecc88bc1.js","client/index.8571cb0b.js","client/[slug].6e868afe.js","client/index.a3de42e5.js","client/[slug].6e2bbe53.js","client/index.4dcb1038.js","client/[slug].a3d4c76a.js","client/about.d02d0632.js","client/index.770dde3b.js","client/[slug].1c11bc3b.js","client/index.8175769f.js","client/fetchK2ArticlesFromPage.a91284f9.js","client/fetchK2Article.2f9f077a.js","client/client.06e9ed11.js"].concat(["service-worker-index.html","css/articles.css","favicon.png","global.css","great-success.png","images/2020/01/12/logo_100px.png","logo-192.png","logo-512.png","manifest.json"]),t=new Set(e);self.addEventListener("install",t=>{t.waitUntil(caches.open("cache1588790116687").then(t=>t.addAll(e)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(async e=>{for(const t of e)"cache1588790116687"!==t&&await caches.delete(t);self.clients.claim()}))}),self.addEventListener("fetch",e=>{if("GET"!==e.request.method||e.request.headers.has("range"))return;const c=new URL(e.request.url);c.protocol.startsWith("http")&&(c.hostname===self.location.hostname&&c.port!==self.location.port||(c.host===self.location.host&&t.has(c.pathname)?e.respondWith(caches.match(e.request)):"only-if-cached"!==e.request.cache&&e.respondWith(caches.open("offline1588790116687").then(async t=>{try{const c=await fetch(e.request);return t.put(e.request,c.clone()),c}catch(c){const s=await t.match(e.request);if(s)return s;throw c}}))))})}();
