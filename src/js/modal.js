import { containerEl } from "./events";
import { APIKey } from "./events";

import * as basicLightbox from "basiclightbox";
import "basiclightbox/dist/basicLightbox.min.css";

const icon = `<svg width="29" height="20" viewBox="0 0 29 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.22222 0L0 0L0 19.3333H3.22222L3.22222 0Z" fill="#0E0E0E"/>
<path d="M11.3266 0L8.10439 0L8.10439 19.3333H11.3266L11.3266 0Z" fill="#0E0E0E"/>
<path d="M16.2088 0L12.9866 0L12.9866 19.3333H16.2088L16.2088 0Z" fill="#0E0E0E"/>
<path d="M28.9999 0L24.2154 0L24.2154 19.3333H28.9999L28.9999 0Z" fill="#0E0E0E"/>
<path d="M6.44449 0L4.88219 0L4.88219 19.3333H6.44449L6.44449 0Z" fill="#0E0E0E"/>
<path d="M19.3333 0L17.771 0L17.771 19.3333H19.3333L19.3333 0Z" fill="#0E0E0E"/>
<path d="M22.5555 0L20.9932 0L20.9932 19.3333H22.5555L22.5555 0Z" fill="#0E0E0E"/>
</svg>
`;

const cross = `<svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.28557 25C0.95625 25 0.626931 24.8747 0.376724 24.6227C-0.125574 24.1204 -0.125574 23.306 0.376724 22.8038L22.8043 0.376714C23.3066 -0.125571 24.121 -0.125571 24.6233 0.376714C25.1256 0.878999 25.1256 1.69333 24.6233 2.19593L2.19598 24.6227C1.94389 24.8732 1.61457 25 1.28557 25Z" fill="#4C00FE"/>
<path d="M23.7147 25C23.3854 25 23.0564 24.8747 22.8059 24.6227L0.376724 2.19593C-0.125574 1.69333 -0.125574 0.878999 0.376724 0.376714C0.879022 -0.125571 1.69337 -0.125571 2.19598 0.376714L24.6233 22.8038C25.1256 23.306 25.1256 24.1204 24.6233 24.6227C24.3712 24.8732 24.0422 25 23.7147 25Z" fill="#4C00FE"/>
</svg>
`;

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

  <div class="modal-close-img"> ${cross} </div>
  
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
                    <p>${icon}#</p>
                    <a href="#">BUY TICKETS</a>
                    <p>${icon}#</p>
                    <a href="#">BUY TICKETS</a>
                </li>
            </ul>
        </div>
    </div>
    <button>MORE FROM THIS AUTHOR</button>
    </div>
`);

    instance.show();
    const closeBtnEL = document.querySelector(".modal-close-img");
    closeBtnEL.addEventListener("click", (e) => {
      instance.close();
    });

    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        instance.close();
      }
    });
  }
});
