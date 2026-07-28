let e=document.querySelector(".cards-container"),t=document.querySelector(".observer"),o=1;async function n(e){let t=await fetch(`https://app.ticketmaster.com/discovery/v2/events.json?keyword=&size=12&page=${o}&apikey=nJnqUpjVKnQW4ldoNLIbcXh4MnaUUVhG`);return await t.json()}async function s(){let t=await n();console.log(t);let o=t._embedded.events;console.log(o);let s=o.map(e=>`<li class="card-photo" id="${e.id}">
      <div class="icon-decor"><svg width="100%" height="100%" viewBox="0 0 153 143" fill="none" xmlns="http://www.w3.org/2000/svg" > 
<path d="M50 0.5H152.5V93C152.5 120.338 130.338 142.5 103 142.5H0.5V50C0.5 22.6619 22.6619 0.5 50 0.5Z" stroke="#DC56C5" stroke-opacity="0.3"/>
</svg> </div>
        <img src="${e.images[0].url}" alt="#" class="card-img">
            <h5>${e.name}</h5>
            <h6>${e.dates.start.localDate}</h6>
            <p>${e._embedded.venues[0].name}</p>
        </li>`).join("");e.insertAdjacentHTML("beforeend",s)}s(),new IntersectionObserver(e=>{e.forEach(async e=>{o+=1,await s()})},{rootMargin:"200px"}).observe(t),console.log("Chat GPT here"),console.log("Event Booster");
//# sourceMappingURL=event-booster.bfc603ba.js.map
