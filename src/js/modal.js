import { containerEl } from "./events";
import { APIKey } from "./events";

import * as basicLightbox from "basiclightbox";
import "basiclightbox/dist/basicLightbox.min.css";

async function getEventById(id) {
  const res = await fetch(
    `https://app.ticketmaster.com/discovery/v2/events.json?id=${id}&size=1&apikey=${APIKey}`,
  );
  const data = await res.json();
  // const events = data._embedded
  // const events = data._embedded
  // console.log(events);

  return data;
}

containerEl.addEventListener("click", async (e) => {
  const li = e.target.closest("li");
  if (li) {
    const id = li.id;
    console.log(id);

    const data = await getEventById(id);
    console.log(data);

    const event = await data._embedded.events[0];
    console.log(event);
    

    const instance = basicLightbox.create(`
  <div class="modal-window">
  
        <img src="${event.images[0].url}" class="modal-profile-img" alt="" />
       <div class="modal-inside"> 
        <img src="${event.images[0].url}" class="modal-big-img" alt="" />
        <div class="modal-info">
            <ul>
                <li>
                    <h6>INFO</h6>
                    <p>${event.name}</p>
                </li>
                <li>
                    <h6>WHEN</h6>
                    <p>${event.dates.start.localDate}</p>
                    <p>${event.dates.start.localTime}</p>
                </li>
                <li>
                    <h6>WHERE</h6>
                    <p>${event._embedded.venues[0].name}</p>
                    <p>${event._embedded.venues[0].city[0]}</p>
                </li>
                <li>
                    <h6>WHO</h6>
                    <p>${event.promoter.name}</p>
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
`);

    instance.show(); 
  }
});
