(function(){try{if(localStorage.getItem("cu_ck"))return}catch(e){}
var d=document.createElement("div");d.setAttribute("role","dialog");
d.style.cssText="position:fixed;left:0;right:0;bottom:0;z-index:9;background:#12302a;color:#fff;padding:12px 16px;display:flex;gap:12px;flex-wrap:wrap;align-items:center;justify-content:center;font:15px/1.4 sans-serif";
var K={ru:['Сайт использует файлы cookie и память браузера для работы и показа рекламы. ','Подробнее','Понятно'],en:['This site uses cookies and browser storage to work and to show ads. ','Learn more','Got it'],az:['Sayt işləmək və reklam göstərmək üçün cookie və brauzer yaddaşından istifadə edir. ','Ətraflı','Aydındır']},lg='ru';try{lg=localStorage.getItem('cu_lang')||(navigator.language||'ru').slice(0,2)}catch(e){}K=K[lg]||K.en;
d.innerHTML=K[0]+'<a href="privacy.html" style="color:#f0b34a">'+K[1]+'</a> <button style="font:inherit;cursor:pointer;border:0;border-radius:6px;padding:.4rem .9rem;background:#f0b34a;color:#2a1a02;font-weight:700">'+K[2]+'</button>';
d.querySelector("button").onclick=function(){try{localStorage.setItem("cu_ck","1")}catch(e){}d.remove()};
document.body.appendChild(d)})();
