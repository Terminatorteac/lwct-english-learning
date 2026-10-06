const CACHE='lwct-dictionary-v5-domain1272';
const ROOT=new URL('./',self.location.href);
const SHELL=['index.html','dictionary-data.json','english-data.json'];
self.addEventListener('install',event=>event.waitUntil((async()=>{
  const cache=await caches.open(CACHE);
  await cache.addAll(SHELL.map(path=>new URL(path,ROOT).href));
  await self.skipWaiting();
})()));
self.addEventListener('activate',event=>event.waitUntil((async()=>{
  for(const key of await caches.keys())if(key.startsWith('lwct-dictionary-')&&key!==CACHE)await caches.delete(key);
  await self.clients.claim();
})()));
self.addEventListener('fetch',event=>{
  const request=event.request,url=new URL(request.url);
  if(request.method!=='GET'||url.origin!==ROOT.origin||!url.pathname.startsWith(ROOT.pathname))return;
  if(request.mode==='navigate')event.respondWith((async()=>{
    const controller=new AbortController(),timer=setTimeout(()=>controller.abort(),4000);
    try{const response=await fetch(request,{signal:controller.signal});if(!response.ok)throw Error('HTTP error');const cache=await caches.open(CACHE);await cache.put(new URL('index.html',ROOT).href,response.clone());return response;}
    catch{const cached=await caches.match(new URL('index.html',ROOT).href);return cached||Response.error();}
    finally{clearTimeout(timer);}
  })());
  else if(['dictionary-data.json','english-data.json'].some(path=>url.pathname===new URL(path,ROOT).pathname))event.respondWith((async()=>{
    const cache=await caches.open(CACHE),cached=await cache.match(request);
    if(cached)return cached;
    const response=await fetch(request);if(response.ok)await cache.put(request,response.clone());return response;
  })());
});
