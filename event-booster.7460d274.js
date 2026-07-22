let e=document.querySelector(".cards-container"),t=document.querySelector(".observer"),n="qQY07Zm0RD8YKy3gsorYQLo9A9b0GEnX",o=1;async function i(e){let t=await fetch(`https://app.ticketmaster.com/discovery/v2/events.json?keyword=&size=12&page=${o}&apikey=${n}`);return await t.json()}async function r(){let t=await i();console.log(t);let n=t._embedded.events;console.log(n);let o=`<svg width="153" height="143" viewBox="0 0 153 143" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M50 0.5H152.5V93C152.5 120.338 130.338 142.5 103 142.5H0.5V50C0.5 22.6619 22.6619 0.5 50 0.5Z" stroke="#DC56C5" stroke-opacity="0.3"/>
</svg>`,r=n.map(e=>`<li class="card-photo" id="${e.id}">
        <div class="icon-decor">${o}</div>
            <img src="${e.images[0].url}" alt="#" class="card-img">
            <h5>${e.name}</h5>
            <h6>${e.dates.start.localDate}</h6>
            <p>${e._embedded.venues[0].name}</p>
        </li>`).join("");e.insertAdjacentHTML("beforeend",r)}r(),new IntersectionObserver(e=>{e.forEach(async e=>{e.isIntersecting&&(o+=1,await r())})},{rootMargin:"200px"}).observe(t);let a=document.querySelector("#countryInput"),s=document.querySelector(".country-list"),c=document.querySelector(".header__icons");function l(){s.classList.toggle("is-open")}s.innerHTML=[{name:"United States",code:"US"},{name:"Germany",code:"DE"},{name:"Great Britain",code:"GB"},{name:"Poland",code:"PL"},{name:"Canada",code:"CA"},{name:"Spain",code:"ES"},{name:"France",code:"FR"},{name:"Netherlands",code:"NL"},{name:"Australia",code:"AU"},{name:"Brazil",code:"BR"}].map(({name:e,code:t})=>`<li class="country__item" data-code="${t}">${e}</li>`).join(""),a.addEventListener("click",l),c.addEventListener("click",l),s.addEventListener("click",t=>{var o;if("LI"!==t.target.tagName)return;let i=t.target;a.value=i.textContent;let c=i.dataset.code;s.classList.remove("is-open"),console.log("1. Функция вызванa для страны:",o=c),fetch(`https://app.ticketmaster.com/discovery/v2/events.json?apikey=${n}&countryCode=${o}`).then(e=>e.json()).then(t=>{console.log("2. Ответ от API:",t),console.log("3. Найденные события:",t._embedded?t._embedded.events:[]),e.innerHTML="",r()}).catch(e=>console.log("помилкаааааа",e))});var d={};async function u(e){let t=await fetch(`https://app.ticketmaster.com/discovery/v2/events.json?id=${e}&size=1&apikey=${n}`);return await t.json()}d=(function e(t,n,o){function i(a,s){if(!n[a]){if(!t[a]){var c=void 0;if(!s&&c)return c(a,!0);if(r)return r(a,!0);var l=Error("Cannot find module '"+a+"'");throw l.code="MODULE_NOT_FOUND",l}var d=n[a]={exports:{}};t[a][0].call(d.exports,function(e){return i(t[a][1][e]||e)},d,d.exports,e,t,n,o)}return n[a].exports}for(var r=void 0,a=0;a<o.length;a++)i(o[a]);return i})({1:[function(e,t,n){Object.defineProperty(n,"__esModule",{value:!0}),n.create=n.visible=void 0;var o=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=document.createElement("div");return n.innerHTML=e.trim(),!0===t?n.children:n.firstChild},i=function(e,t){var n=e.children;return 1===n.length&&n[0].tagName===t},r=function(e){return null!=(e=e||document.querySelector(".basicLightbox"))&&!0===e.ownerDocument.body.contains(e)};n.visible=r,n.create=function(e,t){var n,a,s,c,l,d,u,m=(n=e=function(e){var t="string"==typeof e,n=e instanceof HTMLElement==1;if(!1===t&&!1===n)throw Error("Content must be a DOM element/node or string");return!0===t?Array.from(o(e,!0)):"TEMPLATE"===e.tagName?[e.content.cloneNode(!0)]:Array.from(e.children)}(e),a=t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(null==(e=Object.assign({},e)).closable&&(e.closable=!0),null==e.className&&(e.className=""),null==e.onShow&&(e.onShow=function(){}),null==e.onClose&&(e.onClose=function(){}),"boolean"!=typeof e.closable)throw Error("Property `closable` must be a boolean");if("string"!=typeof e.className)throw Error("Property `className` must be a string");if("function"!=typeof e.onShow)throw Error("Property `onShow` must be a function");if("function"!=typeof e.onClose)throw Error("Property `onClose` must be a function");return e}(t),c=(s=o('\n		<div class="basicLightbox '.concat(a.className,'">\n			<div class="basicLightbox__placeholder" role="dialog"></div>\n		</div>\n	'))).querySelector(".basicLightbox__placeholder"),n.forEach(function(e){return c.appendChild(e)}),l=i(c,"IMG"),d=i(c,"VIDEO"),u=i(c,"IFRAME"),!0===l&&s.classList.add("basicLightbox--img"),!0===d&&s.classList.add("basicLightbox--video"),!0===u&&s.classList.add("basicLightbox--iframe"),s),f=function(e){var n;return!1!==t.onClose(v)&&(n=function(){if("function"==typeof e)return e(v)},m.classList.remove("basicLightbox--visible"),setTimeout(function(){return!1===r(m)||m.parentElement.removeChild(m),n()},410),!0)};!0===t.closable&&m.addEventListener("click",function(e){e.target===m&&f()});var v={element:function(){return m},visible:function(){return r(m)},show:function(e){var n;return!1!==t.onShow(v)&&(n=function(){if("function"==typeof e)return e(v)},document.body.appendChild(m),setTimeout(function(){requestAnimationFrame(function(){return m.classList.add("basicLightbox--visible"),n()})},10),!0)},close:f};return v}},{}]},{},[1])(1),e.addEventListener("click",async e=>{let t=e.target.closest("li");if(t){let e=t.id;console.log(e);let n=await u(e);console.log(n);let o=await n._embedded.events[0];console.log(o),d.create(`
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
//# sourceMappingURL=event-booster.7460d274.js.map
