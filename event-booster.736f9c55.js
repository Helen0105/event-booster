let e=document.querySelector(".cards-container"),t=document.querySelector(".observer"),n="qQY07Zm0RD8YKy3gsorYQLo9A9b0GEnX",o=0,r="",i="";async function a(){let e=`https://app.ticketmaster.com/discovery/v2/events.json?size=12&page=${o}&apikey=${n}`;r&&(e+=`&keyword=${encodeURIComponent(r)}`),i&&(e+=`&countryCode=${i}`);try{let t=await fetch(e);return await t.json()}catch(e){console.error("Помилка під час завантаження даних:",e)}}async function s(){let t=await a(),n=t?._embedded?.events;if(!n||0===n.length){0===o&&(e.innerHTML='<p class="no-results">Подій не знайдено</p>');return}let r=`<svg width="153" height="143" viewBox="0 0 153 143" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M50 0.5H152.5V93C152.5 120.338 130.338 142.5 103 142.5H0.5V50C0.5 22.6619 22.6619 0.5 50 0.5Z" stroke="#DC56C5" stroke-opacity="0.3"/>
</svg>`,i=n.map(e=>{let t=e.images?.[0]?.url||"",n=e.dates?.start?.localDate||"Дата невідома",o=e._embedded?.venues?.[0]?.name||"Локація невідома";return`<li class="card-photo" id="${e.id}">
        <div class="icon-decor">${r}</div>
            <img src="${t}" alt="${e.name}" class="card-img">
            <h5>${e.name}</h5>
            <h6>${n}</h6>
            <p>${o}</p>
        </li>`}).join("");e.insertAdjacentHTML("beforeend",i)}new IntersectionObserver(e=>{e.forEach(async e=>{e.isIntersecting&&(await s(),o+=1)})},{rootMargin:"200px"}).observe(t);let c=document.querySelector("#countryInput"),l=document.querySelector(".country-list"),d=document.querySelector(".header__icons");function u(){l.classList.toggle("is-open")}l.innerHTML=[{name:"Australia",code:"AU"},{name:"Brazil",code:"BR"},{name:"United States",code:"US"},{name:"Germany",code:"DE"},{name:"Great Britain",code:"GB"},{name:"Poland",code:"PL"},{name:"Canada",code:"CA"},{name:"Spain",code:"ES"},{name:"France",code:"FR"},{name:"Netherlands",code:"NL"}].map(({name:e,code:t})=>`<li class="country__item" data-code="${t}">${e}</li>`).join(""),c.addEventListener("click",u),d.addEventListener("click",u),l.addEventListener("click",async t=>{if("LI"!==t.target.tagName)return;let n=t.target;c.value=n.textContent;let a=n.dataset.code;l.classList.remove("is-open"),function(t="",n=""){i=t,r=n,o=0,e.innerHTML=""}(a),await s()});var m={};async function f(e){let t=await fetch(`https://app.ticketmaster.com/discovery/v2/events.json?id=${e}&size=1&apikey=${n}`);return await t.json()}m=(function e(t,n,o){function r(a,s){if(!n[a]){if(!t[a]){var c=void 0;if(!s&&c)return c(a,!0);if(i)return i(a,!0);var l=Error("Cannot find module '"+a+"'");throw l.code="MODULE_NOT_FOUND",l}var d=n[a]={exports:{}};t[a][0].call(d.exports,function(e){return r(t[a][1][e]||e)},d,d.exports,e,t,n,o)}return n[a].exports}for(var i=void 0,a=0;a<o.length;a++)r(o[a]);return r})({1:[function(e,t,n){Object.defineProperty(n,"__esModule",{value:!0}),n.create=n.visible=void 0;var o=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=document.createElement("div");return n.innerHTML=e.trim(),!0===t?n.children:n.firstChild},r=function(e,t){var n=e.children;return 1===n.length&&n[0].tagName===t},i=function(e){return null!=(e=e||document.querySelector(".basicLightbox"))&&!0===e.ownerDocument.body.contains(e)};n.visible=i,n.create=function(e,t){var n,a,s,c,l,d,u,m=(n=e=function(e){var t="string"==typeof e,n=e instanceof HTMLElement==1;if(!1===t&&!1===n)throw Error("Content must be a DOM element/node or string");return!0===t?Array.from(o(e,!0)):"TEMPLATE"===e.tagName?[e.content.cloneNode(!0)]:Array.from(e.children)}(e),a=t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(null==(e=Object.assign({},e)).closable&&(e.closable=!0),null==e.className&&(e.className=""),null==e.onShow&&(e.onShow=function(){}),null==e.onClose&&(e.onClose=function(){}),"boolean"!=typeof e.closable)throw Error("Property `closable` must be a boolean");if("string"!=typeof e.className)throw Error("Property `className` must be a string");if("function"!=typeof e.onShow)throw Error("Property `onShow` must be a function");if("function"!=typeof e.onClose)throw Error("Property `onClose` must be a function");return e}(t),c=(s=o('\n		<div class="basicLightbox '.concat(a.className,'">\n			<div class="basicLightbox__placeholder" role="dialog"></div>\n		</div>\n	'))).querySelector(".basicLightbox__placeholder"),n.forEach(function(e){return c.appendChild(e)}),l=r(c,"IMG"),d=r(c,"VIDEO"),u=r(c,"IFRAME"),!0===l&&s.classList.add("basicLightbox--img"),!0===d&&s.classList.add("basicLightbox--video"),!0===u&&s.classList.add("basicLightbox--iframe"),s),f=function(e){var n;return!1!==t.onClose(h)&&(n=function(){if("function"==typeof e)return e(h)},m.classList.remove("basicLightbox--visible"),setTimeout(function(){return!1===i(m)||m.parentElement.removeChild(m),n()},410),!0)};!0===t.closable&&m.addEventListener("click",function(e){e.target===m&&f()});var h={element:function(){return m},visible:function(){return i(m)},show:function(e){var n;return!1!==t.onShow(h)&&(n=function(){if("function"==typeof e)return e(h)},document.body.appendChild(m),setTimeout(function(){requestAnimationFrame(function(){return m.classList.add("basicLightbox--visible"),n()})},10),!0)},close:f};return h}},{}]},{},[1])(1),e.addEventListener("click",async e=>{let t=e.target.closest("li");if(t){let e=t.id;console.log(e);let n=await f(e);console.log(n);let o=await n._embedded.events[0];console.log(o),m.create(`
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
//# sourceMappingURL=event-booster.736f9c55.js.map
