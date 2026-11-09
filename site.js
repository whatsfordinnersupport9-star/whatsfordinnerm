(function(){try{if(localStorage.getItem("cu_ck"))return}catch(e){}
var d=document.createElement("div");d.setAttribute("role","dialog");
d.style.cssText="position:fixed;left:0;right:0;bottom:0;z-index:9;background:#12302a;color:#fff;padding:12px 16px;display:flex;gap:12px;flex-wrap:wrap;align-items:center;justify-content:center;font:15px/1.4 sans-serif";
d.innerHTML='Сайт использует файлы cookie и память браузера для работы и показа рекламы. <a href="privacy.html" style="color:#f0b34a">Подробнее</a> <button style="font:inherit;cursor:pointer;border:0;border-radius:6px;padding:.4rem .9rem;background:#f0b34a;color:#2a1a02;font-weight:700">Понятно</button>';
d.querySelector("button").onclick=function(){try{localStorage.setItem("cu_ck","1")}catch(e){}d.remove()};
document.body.appendChild(d)})();
