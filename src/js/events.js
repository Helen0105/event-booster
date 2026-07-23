export const containerEl = document.querySelector(".cards-container");
const observerEl = document.querySelector(".observer");
export const APIKey = "qQY07Zm0RD8YKy3gsorYQLo9A9b0GEnX";
let page = 0;
let currentSearch = "";       
let currentCountryCode = "";  
let search = "";

// fetch(`https://app.ticketmaster.com/discovery/v2/events.json?apikey=${APIKey}`).then((res) => res.json())
// .then((res) => console.log(res._embedded)
// )



export function setFilters(countryCode = "", keyword = "") {
  currentCountryCode = countryCode;
  currentSearch = keyword;
  page = 0; 
  containerEl.innerHTML = ""; 
}

// async function getEvents(filter) {
//   const res = await fetch(
//     `https://app.ticketmaster.com/discovery/v2/events.json?keyword=${search}&size=12&page=${page}&apikey=${APIKey}`,
//   );
//   const data = await res.json();
//   // const events = data._embedded
//   // const events = data._embedded
//   // console.log(events);

//   return data;
// }



async function getEvents() {
  
  let url = `https://app.ticketmaster.com/discovery/v2/events.json?size=12&page=${page}&apikey=${APIKey}`;
  
  if (currentSearch) url += `&keyword=${encodeURIComponent(currentSearch)}`;
  if (currentCountryCode) url += `&countryCode=${currentCountryCode}`;

  try {
    const res = await fetch(url);
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Помилка під час завантаження даних:", error);
  }
}



// export async function renderCards() {
//   const data = await getEvents();
//   console.log(data);
//   const events = data._embedded.events;
//   console.log(events);

//   const frame = `<svg width="153" height="143" viewBox="0 0 153 143" fill="none" xmlns="http://www.w3.org/2000/svg">
// <path d="M50 0.5H152.5V93C152.5 120.338 130.338 142.5 103 142.5H0.5V50C0.5 22.6619 22.6619 0.5 50 0.5Z" stroke="#DC56C5" stroke-opacity="0.3"/>
// </svg>`;

//   {
//     /* <img src="./images/frame.svg" alt="icon" class="icon-decor"> */
//   }

//   const item = events
//     .map((elem) => {
//       return `<li class="card-photo" id="${elem.id}">
//         <div class="icon-decor">${frame}</div>
//             <img src="${elem.images[0].url}" alt="#" class="card-img">
//             <h5>${elem.name}</h5>
//             <h6>${elem.dates.start.localDate}</h6>
//             <p>${elem._embedded.venues[0].name}</p>
//         </li>`;
//     })
//     .join("");

//   containerEl.insertAdjacentHTML("beforeend", item);
// }


export async function renderCards() {
  const data = await getEvents();
  const events = data?._embedded?.events;

  if (!events || events.length === 0) {
    if (page === 0) {
      containerEl.innerHTML = `<p class="no-results">Подій не знайдено</p>`;
    }
    return;
  }

  const frame = `<svg width="153" height="143" viewBox="0 0 153 143" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M50 0.5H152.5V93C152.5 120.338 130.338 142.5 103 142.5H0.5V50C0.5 22.6619 22.6619 0.5 50 0.5Z" stroke="#DC56C5" stroke-opacity="0.3"/>
</svg>`;

  const itemsMarkup = events
    .map((elem) => {
      const imageUrl = elem.images?.[0]?.url || "";
      const date = elem.dates?.start?.localDate || "Дата невідома";
      const venue = elem._embedded?.venues?.[0]?.name || "Локація невідома";

      return `<li class="card-photo" id="${elem.id}">
        <div class="icon-decor">${frame}</div>
            <img src="${imageUrl}" alt="${elem.name}" class="card-img">
            <h5>${elem.name}</h5>
            <h6>${date}</h6>
            <p>${venue}</p>
        </li>`;
    })
    .join("");

  containerEl.insertAdjacentHTML("beforeend", itemsMarkup);
}



// renderCards();

// export const observer = new IntersectionObserver(
//   (entry) => {
//     entry.forEach(async (e) => {
//       if (e.isIntersecting) {
//         page += 1;
//         await renderCards();
//       }
//     });
//   },
//   {
//     rootMargin: "200px",
//   },
// );

// observer.observe(observerEl);


export const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(async (entry) => {
      if (entry.isIntersecting) {
        await renderCards();
        page += 1; 
      }
    });
  },
  { rootMargin: "200px" }
);

observer.observe(observerEl);














// const soundEl = document.querySelector("#hoverSound");
// soundEl.volume = 0.1;

// // containerEl.addEventListener("mouseover", (e) => {
// //     const card = e.target.closest("li");

// //     if (card && containerEl.contains(card)) {
// //         soundEl.currentTime = 0;
// //         soundEl.play();
// //     }
// // });

// let canPlay = true;

// containerEl.addEventListener("mouseover", (e) => {
//     const card = e.target.closest("li");

//     if (!card || !containerEl.contains(card)) return;

//     if (!canPlay) return;

//     canPlay = false;

//     soundEl.currentTime = 0;
//     soundEl.play();

//     setTimeout(() => {
//         canPlay = true;
//     }, 200); // задержка в миллисекундах
// });
