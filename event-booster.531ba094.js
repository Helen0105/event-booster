let e=document.querySelector(".cards-container"),t=document.querySelector(".observer"),o="nJnqUpjVKnQW4ldoNLIbcXh4MnaUUVhG",n=1;async function i(e){let t=await fetch(`https://app.ticketmaster.com/discovery/v2/events.json?keyword=&size=12&page=${n}&apikey=${o}`);return await t.json()}async function r(){let t=await i();console.log(t);let o=t._embedded.events;console.log(o);let n=`<svg width="153" height="143" viewBox="0 0 153 143" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M50 0.5H152.5V93C152.5 120.338 130.338 142.5 103 142.5H0.5V50C0.5 22.6619 22.6619 0.5 50 0.5Z" stroke="#DC56C5" stroke-opacity="0.3"/>
</svg>`,r=o.map(e=>`<li class="card-photo" id="${e.id}">
        <div class="icon-decor">${n}</div>
            <img src="${e.images[0].url}" alt="#" class="card-img">
            <h5>${e.name}</h5>
            <h6>${e.dates.start.localDate}</h6>
            <p>${e._embedded.venues[0].name}</p>
        </li>`).join("");e.insertAdjacentHTML("beforeend",r)}r(),new IntersectionObserver(e=>{e.forEach(async e=>{n+=1,await r()})},{rootMargin:"200px"}).observe(t);var a={};async function s(e){let t=await fetch(`https://app.ticketmaster.com/discovery/v2/events.json?id=${e}&size=1&apikey=${o}`);return await t.json()}a=(function e(t,o,n){function i(a,s){if(!o[a]){if(!t[a]){var l=void 0;if(!s&&l)return l(a,!0);if(r)return r(a,!0);var c=Error("Cannot find module '"+a+"'");throw c.code="MODULE_NOT_FOUND",c}var d=o[a]={exports:{}};t[a][0].call(d.exports,function(e){return i(t[a][1][e]||e)},d,d.exports,e,t,o,n)}return o[a].exports}for(var r=void 0,a=0;a<n.length;a++)i(n[a]);return i})({1:[function(e,t,o){Object.defineProperty(o,"__esModule",{value:!0}),o.create=o.visible=void 0;var n=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],o=document.createElement("div");return o.innerHTML=e.trim(),!0===t?o.children:o.firstChild},i=function(e,t){var o=e.children;return 1===o.length&&o[0].tagName===t},r=function(e){return null!=(e=e||document.querySelector(".basicLightbox"))&&!0===e.ownerDocument.body.contains(e)};o.visible=r,o.create=function(e,t){var o,a,s,l,c,d,u,f=(o=e=function(e){var t="string"==typeof e,o=e instanceof HTMLElement==1;if(!1===t&&!1===o)throw Error("Content must be a DOM element/node or string");return!0===t?Array.from(n(e,!0)):"TEMPLATE"===e.tagName?[e.content.cloneNode(!0)]:Array.from(e.children)}(e),a=t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(null==(e=Object.assign({},e)).closable&&(e.closable=!0),null==e.className&&(e.className=""),null==e.onShow&&(e.onShow=function(){}),null==e.onClose&&(e.onClose=function(){}),"boolean"!=typeof e.closable)throw Error("Property `closable` must be a boolean");if("string"!=typeof e.className)throw Error("Property `className` must be a string");if("function"!=typeof e.onShow)throw Error("Property `onShow` must be a function");if("function"!=typeof e.onClose)throw Error("Property `onClose` must be a function");return e}(t),l=(s=n('\n		<div class="basicLightbox '.concat(a.className,'">\n			<div class="basicLightbox__placeholder" role="dialog"></div>\n		</div>\n	'))).querySelector(".basicLightbox__placeholder"),o.forEach(function(e){return l.appendChild(e)}),c=i(l,"IMG"),d=i(l,"VIDEO"),u=i(l,"IFRAME"),!0===c&&s.classList.add("basicLightbox--img"),!0===d&&s.classList.add("basicLightbox--video"),!0===u&&s.classList.add("basicLightbox--iframe"),s),m=function(e){var o;return!1!==t.onClose(h)&&(o=function(){if("function"==typeof e)return e(h)},f.classList.remove("basicLightbox--visible"),setTimeout(function(){return!1===r(f)||f.parentElement.removeChild(f),o()},410),!0)};!0===t.closable&&f.addEventListener("click",function(e){e.target===f&&m()});var h={element:function(){return f},visible:function(){return r(f)},show:function(e){var o;return!1!==t.onShow(h)&&(o=function(){if("function"==typeof e)return e(h)},document.body.appendChild(f),setTimeout(function(){requestAnimationFrame(function(){return f.classList.add("basicLightbox--visible"),o()})},10),!0)},close:m};return h}},{}]},{},[1])(1),e.addEventListener("click",async e=>{let t=e.target.closest("li");if(t){let e=t.id;console.log(e);let o=await s(e);console.log(o);let n=await o._embedded.events[0];console.log(n),a.create(`
  <div class="modal-window">
  
        <img src="${n.images[0].url}" class="modal-profile-img" alt="" />
       <div class="modal-inside"> 
        <img src="${n.images[0].url}" class="modal-big-img" alt="" />
        <div class="modal-info">
            <ul>
                <li>
                    <h6>INFO</h6>
                    <p>${n.name}</p>
                </li>
                <li>
                    <h6>WHEN</h6>
                    <p>${n.dates.start.localDate}</p>
                    <p>${n.dates.start.localTime}</p>
                </li>
                <li>
                    <h6>WHERE</h6>
                    <p>${n._embedded.venues[0].name}</p>
                    <p>${n._embedded.venues[0].city[0]}</p>
                </li>
                <li>
                    <h6>WHO</h6>
                    <p>${n.promoter.name}</p>
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
//# sourceMappingURL=event-booster.531ba094.js.map
