let e=document.querySelector(".cards-container"),o=document.querySelector(".observer"),t=1;async function a(e){let o=await fetch(`https://app.ticketmaster.com/discovery/v2/events.json?keyword=&size=12&page=${t}&apikey=nJnqUpjVKnQW4ldoNLIbcXh4MnaUUVhG`);return await o.json()}async function n(){let o=await a();console.log(o);let t=o._embedded.events;console.log(t);let n=t.map(e=>`<li class="card-photo">
        <img src="./images/frame.svg" alt="icon" class="icon-decor">
            <img src="${e.images[0].url}" alt="#" class="card-img">
            <h5>${e.name}</h5>
            <h6>${e.dates.start.localDate}</h6>
            <p>${e._embedded.venues[0].name}</p>
        </li>`).join("");e.insertAdjacentHTML("beforeend",n)}n(),new IntersectionObserver(e=>{e.forEach(async e=>{t+=1,await n()})},{rootMargin:"200px"}).observe(o),console.log("Chat GPT here"),console.log("Event Booster");
//# sourceMappingURL=event-booster.1b3387b2.js.map
