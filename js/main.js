// const data = require('./data');

const topNav = document.querySelector('.top-navigation');
const searchInput = document.querySelector('#mainSearchInput');
const navOverlay = document.querySelector('.nav-overlay');
const searchToggleBtns = document.querySelectorAll('[toggle-search]');
const navToggleBtns = document.querySelectorAll('[toggle-nav]');
// const autoComplete = document.querySelector('.search-container .autocomplete');


const toggleSearch = () => {
    topNav.classList.contains('alt-nav') ?
        searchInput.setAttribute('placeholder', 'Search books, genres, authors, etc.') :
        searchInput.setAttribute('placeholder', 'Search')

    topNav.classList.toggle('alt-nav');
}

const toggleNav = () => {
    document.body.classList.toggle('open-drawer');
}



// Event Listeners
searchToggleBtns.forEach(btn => {
    btn.addEventListener('click', toggleSearch);
});

navToggleBtns.forEach(btn => {
    btn.addEventListener('click', toggleNav);
});

navOverlay.addEventListener('click', toggleNav);