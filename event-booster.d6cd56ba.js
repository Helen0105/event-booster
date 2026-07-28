let e=document.querySelector(".cards-container"),t=document.querySelector(".observer"),n="qQY07Zm0RD8YKy3gsorYQLo9A9b0GEnX",o=0,i="",a="";function r(t="",n=""){a=t,i=n,o=0,e.innerHTML=""}async function l(){let e=`https://app.ticketmaster.com/discovery/v2/events.json?size=12&page=${o}&apikey=${n}`;i&&(e+=`&keyword=${encodeURIComponent(i)}`),a&&(e+=`&countryCode=${a}`);try{let t=await fetch(e);return await t.json()}catch(e){console.error("Помилка під час завантаження даних:",e)}}async function s(){let t=await l(),n=t?._embedded?.events;if(!n||0===n.length){0===o&&(e.innerHTML='<p class="no-results">Подій не знайдено</p>');return}let i=`<svg width="153" height="143" viewBox="0 0 153 143" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M50 0.5H152.5V93C152.5 120.338 130.338 142.5 103 142.5H0.5V50C0.5 22.6619 22.6619 0.5 50 0.5Z" stroke="#DC56C5" stroke-opacity="0.3"/>
</svg>`,a=`<svg width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.5 0C1.57011 0 0 1.55933 0 3.47595C0 5.88495 3.50344 10 3.50344 10C3.50344 10 7 5.76648 7 3.47595C7 1.55933 5.42995 0 3.5 0ZM4.55602 4.49371C4.26484 4.78284 3.88245 4.92743 3.5 4.92743C3.11761 4.92743 2.7351 4.78284 2.44404 4.49371C1.86173 3.91547 1.86173 2.97455 2.44404 2.39624C2.72601 2.11609 3.10108 1.96179 3.5 1.96179C3.89892 1.96179 4.27393 2.11615 4.55602 2.39624C5.13833 2.97455 5.13833 3.91547 4.55602 4.49371Z" fill="white"/>
</svg>
`,r=n.map(e=>{let t=e.images?.[0]?.url||"",n=e.dates?.start?.localDate||"Дата невідома",o=e._embedded?.venues?.[0]?.name||"Локація невідома";return`<li class="card-photo" id="${e.id}">
        <div class="icon-decor">${i}</div>
            <img src="${t}" alt="${e.name}" class="card-img">
            <h5>${e.name}</h5>
            <h6>${n}</h6>
            <p>${a}${o}</p>
        </li>`}).join("");e.insertAdjacentHTML("beforeend",r)}new IntersectionObserver(e=>{e.forEach(async e=>{e.isIntersecting&&(await s(),o+=1)})},{rootMargin:"200px"}).observe(t);let c=document.querySelector("#countryInput"),d=document.querySelector(".country-list"),u=document.querySelector(".header__icons");function m(){d.classList.toggle("is-open")}d.innerHTML=[{name:"Australia",code:"AU"},{name:"Brazil",code:"BR"},{name:"United States",code:"US"},{name:"Germany",code:"DE"},{name:"Great Britain",code:"GB"},{name:"Poland",code:"PL"},{name:"Canada",code:"CA"},{name:"Spain",code:"ES"},{name:"France",code:"FR"},{name:"Netherlands",code:"NL"}].map(({name:e,code:t})=>`<li class="country__item" data-code="${t}">${e}</li>`).join(""),c.addEventListener("click",m),u.addEventListener("click",m),d.addEventListener("click",async e=>{if("LI"!==e.target.tagName)return;let t=e.target;c.value=t.textContent;let n=t.dataset.code;d.classList.remove("is-open"),r(n),await s()});let h=document.querySelector("#searchInput"),f="",v=null;d.addEventListener("click",async e=>{if("LI"!==e.target.tagName)return;let t=e.target;c.value=t.textContent,f=t.dataset.code,d.classList.remove("is-open"),r(f,h.value.trim()),await s()}),h.addEventListener("input",e=>{clearTimeout(v),v=setTimeout(async()=>{let t=e.target.value.trim();r(f,t),await s()},500)});var p={};p=(function e(t,n,o){function i(r,l){if(!n[r]){if(!t[r]){var s=void 0;if(!l&&s)return s(r,!0);if(a)return a(r,!0);var c=Error("Cannot find module '"+r+"'");throw c.code="MODULE_NOT_FOUND",c}var d=n[r]={exports:{}};t[r][0].call(d.exports,function(e){return i(t[r][1][e]||e)},d,d.exports,e,t,n,o)}return n[r].exports}for(var a=void 0,r=0;r<o.length;r++)i(o[r]);return i})({1:[function(e,t,n){Object.defineProperty(n,"__esModule",{value:!0}),n.create=n.visible=void 0;var o=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=document.createElement("div");return n.innerHTML=e.trim(),!0===t?n.children:n.firstChild},i=function(e,t){var n=e.children;return 1===n.length&&n[0].tagName===t},a=function(e){return null!=(e=e||document.querySelector(".basicLightbox"))&&!0===e.ownerDocument.body.contains(e)};n.visible=a,n.create=function(e,t){var n,r,l,s,c,d,u,m=(n=e=function(e){var t="string"==typeof e,n=e instanceof HTMLElement==1;if(!1===t&&!1===n)throw Error("Content must be a DOM element/node or string");return!0===t?Array.from(o(e,!0)):"TEMPLATE"===e.tagName?[e.content.cloneNode(!0)]:Array.from(e.children)}(e),r=t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(null==(e=Object.assign({},e)).closable&&(e.closable=!0),null==e.className&&(e.className=""),null==e.onShow&&(e.onShow=function(){}),null==e.onClose&&(e.onClose=function(){}),"boolean"!=typeof e.closable)throw Error("Property `closable` must be a boolean");if("string"!=typeof e.className)throw Error("Property `className` must be a string");if("function"!=typeof e.onShow)throw Error("Property `onShow` must be a function");if("function"!=typeof e.onClose)throw Error("Property `onClose` must be a function");return e}(t),s=(l=o('\n		<div class="basicLightbox '.concat(r.className,'">\n			<div class="basicLightbox__placeholder" role="dialog"></div>\n		</div>\n	'))).querySelector(".basicLightbox__placeholder"),n.forEach(function(e){return s.appendChild(e)}),c=i(s,"IMG"),d=i(s,"VIDEO"),u=i(s,"IFRAME"),!0===c&&l.classList.add("basicLightbox--img"),!0===d&&l.classList.add("basicLightbox--video"),!0===u&&l.classList.add("basicLightbox--iframe"),l),h=function(e){var n;return!1!==t.onClose(f)&&(n=function(){if("function"==typeof e)return e(f)},m.classList.remove("basicLightbox--visible"),setTimeout(function(){return!1===a(m)||m.parentElement.removeChild(m),n()},410),!0)};!0===t.closable&&m.addEventListener("click",function(e){e.target===m&&h()});var f={element:function(){return m},visible:function(){return a(m)},show:function(e){var n;return!1!==t.onShow(f)&&(n=function(){if("function"==typeof e)return e(f)},document.body.appendChild(m),setTimeout(function(){requestAnimationFrame(function(){return m.classList.add("basicLightbox--visible"),n()})},10),!0)},close:h};return f}},{}]},{},[1])(1);let g=`<svg width="29" height="20" viewBox="0 0 29 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.22222 0L0 0L0 19.3333H3.22222L3.22222 0Z" fill="#0E0E0E"/>
<path d="M11.3266 0L8.10439 0L8.10439 19.3333H11.3266L11.3266 0Z" fill="#0E0E0E"/>
<path d="M16.2088 0L12.9866 0L12.9866 19.3333H16.2088L16.2088 0Z" fill="#0E0E0E"/>
<path d="M28.9999 0L24.2154 0L24.2154 19.3333H28.9999L28.9999 0Z" fill="#0E0E0E"/>
<path d="M6.44449 0L4.88219 0L4.88219 19.3333H6.44449L6.44449 0Z" fill="#0E0E0E"/>
<path d="M19.3333 0L17.771 0L17.771 19.3333H19.3333L19.3333 0Z" fill="#0E0E0E"/>
<path d="M22.5555 0L20.9932 0L20.9932 19.3333H22.5555L22.5555 0Z" fill="#0E0E0E"/>
</svg>
`;async function L(e){let t=await fetch(`https://app.ticketmaster.com/discovery/v2/events.json?id=${e}&size=1&apikey=${n}`);return await t.json()}e.addEventListener("click",async e=>{let t=e.target.closest("li");if(t){let e=t.id;console.log(e);let n=await L(e);console.log(n);let o=await n._embedded.events[0];console.log(o),p.create(`
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
                    <p>${g}#</p>
                    <a href="#">BUY TICKETS</a>
                    <p>${g}#</p>
                    <a href="#">BUY TICKETS</a>
                </li>
            </ul>
        </div>
    </div>
    <button>MORE FROM THIS AUTHOR</button>
    </div>
`).show()}}),console.log("Event Booster");
//# sourceMappingURL=event-booster.d6cd56ba.js.map
