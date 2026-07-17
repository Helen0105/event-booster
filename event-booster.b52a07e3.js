let e=document.querySelector(".cards-container"),t=document.querySelector(".observer"),a=1;async function o(e){let t=await fetch(`https://app.ticketmaster.com/discovery/v2/events.json?keyword=&size=12&page=${a}&apikey=nJnqUpjVKnQW4ldoNLIbcXh4MnaUUVhG`);return await t.json()}async function n(){let t=await o();console.log(t);let a=t._embedded.events;console.log(a);let n=a.map(e=>`<li class="card-photo">
        <img src="./images/frame.svg" alt="icon" class="icon-decor">
            <img src="${e.images[0].url}" alt="#" class="card-img">
            <h5>${e.name}</h5>
            <h6>${e.dates.start.localDate}</h6>
            <p>${e._embedded.venues[0].name}</p>
        </li>`).join("");e.insertAdjacentHTML("beforeend",n)}n(),new IntersectionObserver(e=>{e.forEach(async e=>{a+=1,await n()})},{rootMargin:"200px"}).observe(t),console.log("Event Booster");
//# sourceMappingURL=event-booster.b52a07e3.js.map
