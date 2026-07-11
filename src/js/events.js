const containerEl = document.querySelector(".cards-container");
const observerEl = document.querySelector(".observer");
const APIKey = "nJnqUpjVKnQW4ldoNLIbcXh4MnaUUVhG";
let page = 1;

let search = "";

// fetch(`https://app.ticketmaster.com/discovery/v2/events.json?apikey=${APIKey}`).then((res) => res.json())
// .then((res) => console.log(res._embedded)
// )

async function getEvents(filter) {
  const res = await fetch(
    `https://app.ticketmaster.com/discovery/v2/events.json?keyword=${search}&size=12&page=${page}&apikey=${APIKey}`,
  );
  const data = await res.json();
  // const events = data._embedded
  // const events = data._embedded
  // console.log(events);

  return data;
}

async function renderCards() {
  const data = await getEvents();
  console.log(data);
  const events = data._embedded.events;
  console.log(events);

  const item = events
    .map((elem) => {
      return `<li class="card-photo">
        <img src="./images/frame.svg" alt="icon" class="icon-decor">
            <img src="${elem.images[0].url}" alt="#" class="card-img">
            <h5>${elem.name}</h5>
            <h6>${elem.dates.start.localDate}</h6>
            <p>${elem._embedded.venues[0].name}</p>
        </li>`;
    })
    .join("");

  containerEl.insertAdjacentHTML("beforeend", item);
}

renderCards();

const observer = new IntersectionObserver(
  (entry) => {
    entry.forEach(async (e) => {
      page += 1;
      await renderCards();
    });
  },
  {
    rootMargin: "200px",
  },
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
