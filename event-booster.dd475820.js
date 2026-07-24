let e=document.querySelector(".cards-container"),t=document.querySelector(".observer"),n="qQY07Zm0RD8YKy3gsorYQLo9A9b0GEnX",o=0,r="",a="";function i(t="",n=""){a=t,r=n,o=0,e.innerHTML=""}async function s(){let e=`https://app.ticketmaster.com/discovery/v2/events.json?size=12&page=${o}&apikey=${n}`;r&&(e+=`&keyword=${encodeURIComponent(r)}`),a&&(e+=`&countryCode=${a}`);try{let t=await fetch(e);return await t.json()}catch(e){console.error("Помилка під час завантаження даних:",e)}}async function c(){let t=await s(),n=t?._embedded?.events;if(!n||0===n.length){0===o&&(e.innerHTML='<p class="no-results">Подій не знайдено</p>');return}let r=`<svg width="153" height="143" viewBox="0 0 153 143" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M50 0.5H152.5V93C152.5 120.338 130.338 142.5 103 142.5H0.5V50C0.5 22.6619 22.6619 0.5 50 0.5Z" stroke="#DC56C5" stroke-opacity="0.3"/>
</svg>`,a=n.map(e=>{let t=e.images?.[0]?.url||"",n=e.dates?.start?.localDate||"Дата невідома",o=e._embedded?.venues?.[0]?.name||"Локація невідома";return`<li class="card-photo" id="${e.id}">
        <div class="icon-decor">${r}</div>
            <img src="${t}" alt="${e.name}" class="card-img">
            <h5>${e.name}</h5>
            <h6>${n}</h6>
            <p>${o}</p>
        </li>`}).join("");e.insertAdjacentHTML("beforeend",a)}new IntersectionObserver(e=>{e.forEach(async e=>{e.isIntersecting&&(await c(),o+=1)})},{rootMargin:"200px"}).observe(t);let l=document.querySelector("#countryInput"),d=document.querySelector(".country-list"),u=document.querySelector(".header__icons");function m(){d.classList.toggle("is-open")}d.innerHTML=[{name:"Australia",code:"AU"},{name:"Brazil",code:"BR"},{name:"United States",code:"US"},{name:"Germany",code:"DE"},{name:"Great Britain",code:"GB"},{name:"Poland",code:"PL"},{name:"Canada",code:"CA"},{name:"Spain",code:"ES"},{name:"France",code:"FR"},{name:"Netherlands",code:"NL"}].map(({name:e,code:t})=>`<li class="country__item" data-code="${t}">${e}</li>`).join(""),l.addEventListener("click",m),u.addEventListener("click",m),d.addEventListener("click",async e=>{if("LI"!==e.target.tagName)return;let t=e.target;l.value=t.textContent;let n=t.dataset.code;d.classList.remove("is-open"),i(n),await c()});let f=document.querySelector("#searchInput"),v="",p=null;d.addEventListener("click",async e=>{if("LI"!==e.target.tagName)return;let t=e.target;l.value=t.textContent,v=t.dataset.code,d.classList.remove("is-open"),i(v,f.value.trim()),await c()}),f.addEventListener("input",e=>{clearTimeout(p),p=setTimeout(async()=>{let t=e.target.value.trim();i(v,t),await c()},500)});var h={};async function g(e){let t=await fetch(`https://app.ticketmaster.com/discovery/v2/events.json?id=${e}&size=1&apikey=${n}`);return await t.json()}h=(function e(t,n,o){function r(i,s){if(!n[i]){if(!t[i]){var c=void 0;if(!s&&c)return c(i,!0);if(a)return a(i,!0);var l=Error("Cannot find module '"+i+"'");throw l.code="MODULE_NOT_FOUND",l}var d=n[i]={exports:{}};t[i][0].call(d.exports,function(e){return r(t[i][1][e]||e)},d,d.exports,e,t,n,o)}return n[i].exports}for(var a=void 0,i=0;i<o.length;i++)r(o[i]);return r})({1:[function(e,t,n){Object.defineProperty(n,"__esModule",{value:!0}),n.create=n.visible=void 0;var o=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=document.createElement("div");return n.innerHTML=e.trim(),!0===t?n.children:n.firstChild},r=function(e,t){var n=e.children;return 1===n.length&&n[0].tagName===t},a=function(e){return null!=(e=e||document.querySelector(".basicLightbox"))&&!0===e.ownerDocument.body.contains(e)};n.visible=a,n.create=function(e,t){var n,i,s,c,l,d,u,m=(n=e=function(e){var t="string"==typeof e,n=e instanceof HTMLElement==1;if(!1===t&&!1===n)throw Error("Content must be a DOM element/node or string");return!0===t?Array.from(o(e,!0)):"TEMPLATE"===e.tagName?[e.content.cloneNode(!0)]:Array.from(e.children)}(e),i=t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(null==(e=Object.assign({},e)).closable&&(e.closable=!0),null==e.className&&(e.className=""),null==e.onShow&&(e.onShow=function(){}),null==e.onClose&&(e.onClose=function(){}),"boolean"!=typeof e.closable)throw Error("Property `closable` must be a boolean");if("string"!=typeof e.className)throw Error("Property `className` must be a string");if("function"!=typeof e.onShow)throw Error("Property `onShow` must be a function");if("function"!=typeof e.onClose)throw Error("Property `onClose` must be a function");return e}(t),c=(s=o('\n		<div class="basicLightbox '.concat(i.className,'">\n			<div class="basicLightbox__placeholder" role="dialog"></div>\n		</div>\n	'))).querySelector(".basicLightbox__placeholder"),n.forEach(function(e){return c.appendChild(e)}),l=r(c,"IMG"),d=r(c,"VIDEO"),u=r(c,"IFRAME"),!0===l&&s.classList.add("basicLightbox--img"),!0===d&&s.classList.add("basicLightbox--video"),!0===u&&s.classList.add("basicLightbox--iframe"),s),f=function(e){var n;return!1!==t.onClose(v)&&(n=function(){if("function"==typeof e)return e(v)},m.classList.remove("basicLightbox--visible"),setTimeout(function(){return!1===a(m)||m.parentElement.removeChild(m),n()},410),!0)};!0===t.closable&&m.addEventListener("click",function(e){e.target===m&&f()});var v={element:function(){return m},visible:function(){return a(m)},show:function(e){var n;return!1!==t.onShow(v)&&(n=function(){if("function"==typeof e)return e(v)},document.body.appendChild(m),setTimeout(function(){requestAnimationFrame(function(){return m.classList.add("basicLightbox--visible"),n()})},10),!0)},close:f};return v}},{}]},{},[1])(1),e.addEventListener("click",async e=>{let t=e.target.closest("li");if(t){let e=t.id;console.log(e);let n=await g(e);console.log(n);let o=await n._embedded.events[0];console.log(o),h.create(`
  <div class="modal-window">
  
        <img src="${o.images[0].url}" class="modal-profile-img" alt="" />
       <div class="modal-inside"> 
        <img src="${o.images[0].url}" class="modal-big-img" alt="" />
        <div class="modal-info">
            <ul>
                <li>
                    <h6>INFO</h6>
                    <p>${o.name}</p>
                </li>
                <li>
                    <h6>WHEN</h6>
                    <p>${o.dates.start.localDate}</p>
                    <p>${o.dates.start.localTime}</p>
                </li>
                <li>
                    <h6>WHERE</h6>
                    <p>${o._embedded.venues[0].name}</p>
                    <p>${o._embedded.venues[0].city[0]}</p>
                </li>
                <li>
                    <h6>WHO</h6>
                    <p>${o.promoter.name}</p>
                </li>
                <li>
                    <h6>PRICES</h6>
                    <p>#</p>
                    <a href="#">BUY TICKETS</a>
                    <p>#</p>
                    <a href="#">BUY TICKETS</a>
                </li>
            </ul>
        </div>
    </div>
    <button>MORE FROM THIS AUTHOR</button>
    </div>
`).show()}}),console.log("Event Booster");
//# sourceMappingURL=event-booster.dd475820.js.map
