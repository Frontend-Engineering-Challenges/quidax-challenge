const data = require('./data');


const slider = document.querySelector('.main-carousel');
const topNav = document.querySelector('.top-navigation');
const navOverlay = document.querySelector('.nav-overlay');
const autocomplete = document.querySelector('.autocomplete');
const searchInput = document.querySelector('#mainSearchInput');
const navToggleBtns = document.querySelectorAll('[toggle-nav]');
const searchToggleBtns = document.querySelectorAll('[toggle-search]');


const toggleSearch = () => {
    topNav.classList.contains('alt-nav') ?
        searchInput.setAttribute('placeholder', 'Search books, genres, authors, etc.') :
        searchInput.setAttribute('placeholder', 'Search')

    topNav.classList.toggle('alt-nav');
}

const toggleNav = () => {
    document.body.classList.toggle('open-drawer');
}

const renderCarousel = () => {
    const fragment = document.createDocumentFragment();

    data.books
        .filter(book => book.featured)
        .forEach(book => {
            const div = document.createElement('div'); 
            div.classList.add('carousel-cell');
            div.innerHTML = `
                <img src="${book.image}" alt="${book.name} Book Cover">
            `
            fragment.appendChild(div); 
        })
    
    slider.appendChild(fragment);
};


// Event Listeners
searchToggleBtns.forEach(btn => {
    btn.addEventListener('click', toggleSearch);
});

navToggleBtns.forEach(btn => {
    btn.addEventListener('click', toggleNav);
});

navOverlay.addEventListener('click', toggleNav);

searchInput.addEventListener('input', (e) => {
    const autocompleteClassList = autocomplete.classList;
    const topNavClassList = topNav.classList;

    if(e.target.value.length >= 1) {
        topNavClassList.add('change-nav-bg');
        autocompleteClassList.remove('d-none');
    } else {
        topNavClassList.remove('change-nav-bg');
        autocompleteClassList.add('d-none');
    }
});

document.body.addEventListener('click', (e) => {
    const inputEvt = searchInput.contains(e.target);
    const autocompleteEvt = autocomplete.contains(e.target);

    if (!autocomplete.classList.contains('d-none') && (!inputEvt || !autocompleteEvt)) {
        searchInput.value = '';
        topNav.classList.remove('change-nav-bg');
        autocomplete.classList.add('d-none');
    }
});


//Function Calls
renderCarousel();


//Configurations
var flkty = new Flickity( '.main-carousel', {
    cellAlign: 'left',
    contain: true,
    draggable: true,
    wrapAround: true,
    arrowShape: { 
        x0: 10,
        x1: 60, y1: 50,
        x2: 60, y2: 40,
        x3: 60
    }
});