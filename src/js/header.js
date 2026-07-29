import confetti from 'canvas-confetti';



const logo = document.querySelector(".header__title")

logo.addEventListener('mouseenter', () => {
  confetti({
    particleCount: 100,
    spread: 70,
    origin: {
      x: 0.5,
      y: 0.3,
    },
    colors: ['#DC56C5', '#e219c1', '#d88fcc']
  });

//   confetti();
});

import { setFilters, renderCards } from "./events";

const countries = [
     {name: 'Australia', code: 'AU'},
     {name: 'Brazil', code: 'BR'}, 
     {name: 'United States', code: 'US'},
     {name: 'Germany', code: 'DE'}, 
     {name: 'Great Britain', code: 'GB'}, 
     {name: 'Poland', code: 'PL'}, 
     {name: 'Canada', code: 'CA'}, 
     {name: 'Spain', code: 'ES'}, 
     {name: 'France', code: 'FR'},
     {name: 'Netherlands', code: 'NL'}, 
    ];


    const countryInput = document.querySelector('#countryInput');
    const countryList = document.querySelector('.country-list');
    const countryArrow = document.querySelector('.header__icons');


    function renderCountryList() {
        const markup = countries 
        .map(({name, code}) => {
            return `<li class="country__item" data-code="${code}">${name}</li>`
        })
        .join('')
countryList.innerHTML = markup;
    } 

    renderCountryList();




    function toggleDropdown() {
        countryList.classList.toggle('is-open');
    }

    countryInput.addEventListener('click', toggleDropdown);
    countryArrow.addEventListener('click', toggleDropdown);


    countryList.addEventListener('click', async (event) => {
        if(event.target.tagName !== "LI") return;
        const selectedItem = event.target;
       countryInput.value = selectedItem.textContent;

const countryCode = selectedItem.dataset.code;
countryList.classList.remove('is-open');

setFilters(countryCode);
  await renderCards();


    })



    function fetchEventsByCountry(code){
        console.log("1. Функція викликана для країни:", code);
        const url = `https://app.ticketmaster.com/discovery/v2/events.json?apikey=${APIKey}&countryCode=${code}`;
fetch(url)
    .then((response) => response.json())
    .then((data) => {
console.log("2. Відповідь від API:", data); // Check 2
      const events = data._embedded ? data._embedded.events : [];
console.log("3. Знайдені події:", events); // Check 3
containerEl.innerHTML = "";
      renderCards(events); 
    })
    .catch((error) => console.log('помилкаааааа', error));

    }



    const searchInput = document.querySelector('#searchInput');
    let selectedCountryCode = ""; 
let searchTimeout = null;     
countryList.addEventListener('click', async (event) => {
    if (event.target.tagName !== "LI") return;
    
    const selectedItem = event.target;
    countryInput.value = selectedItem.textContent;

 
    selectedCountryCode = selectedItem.dataset.code; 
    countryList.classList.remove('is-open');

    setFilters(selectedCountryCode, searchInput.value.trim());
    await renderCards();
});


searchInput.addEventListener('input', (event) => {
  
  clearTimeout(searchTimeout);


  searchTimeout = setTimeout(async () => {
    const query = event.target.value.trim();
    
    setFilters(selectedCountryCode, query);
    await renderCards();
  }, 500);
});