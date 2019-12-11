const data = require('./data');


const slider = document.querySelector('.main-carousel');
const topNav = document.querySelector('.top-navigation');
const navOverlay = document.querySelector('.nav-overlay');
const autocomplete = document.querySelector('.autocomplete');
const searchInput = document.querySelector('#mainSearchInput');
const navToggleBtns = document.querySelectorAll('[toggle-nav]');
const searchToggleBtns = document.querySelectorAll('[toggle-search]');

const filterSearchResults = (startLetters, results) =>
    results.filter(result => result.match(new RegExp(`^${startLetters}`, 'i'))
)
const toggleSearch = () => {
    topNav.classList.contains('alt-nav') ?
        searchInput.setAttribute('placeholder', 'Search books, genres, authors, etc.') :
        searchInput.setAttribute('placeholder', 'Search')

    topNav.classList.toggle('alt-nav');
}

const toggleNav = () => {
    document.body.classList.toggle('open-drawer');
}

const toggleAutoComplete = () => {
    topNav.classList.toggle('change-nav-bg');
    autocomplete.classList.toggle('d-none');
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

const renderAutoComplete = (data, inputValueLength) => {
    const fragment = document.createDocumentFragment();

    if(data.length) {
        data.slice(0, 4).forEach(result => {
            const matched = `<mark>${result.slice(0, inputValueLength)}</mark>`;
            const template = inputValueLength ? matched + result.slice(inputValueLength) : result;
            const li = document.createElement('li'); 
            const span = document.createElement('span'); 

            li.classList.add('autocomplete-items');
            span.innerHTML = template;

            li.appendChild(span);
            fragment.appendChild(li); 
        })
    } else {
        const li = document.createElement('li'); 
        li.classList.add('no-results');
        li.textContent = 'No results found!'
        fragment.appendChild(li); 
    }
    
    autocomplete.innerHTML = '';
    autocomplete.appendChild(fragment);
};

// Event Listeners
searchToggleBtns.forEach(btn => {
    btn.addEventListener('click', toggleSearch);
});

navToggleBtns.forEach(btn => {
    btn.addEventListener('click', toggleNav);
});

navOverlay.addEventListener('click', toggleNav);
searchInput.addEventListener('focus', () => {
    const results = data.searchResults;

    renderAutoComplete(results);
    toggleAutoComplete();
});
searchInput.addEventListener('input', (e) => {
    const results = filterSearchResults(e.target.value, data.searchResults);

    renderAutoComplete(results, e.target.value.length);
});
searchInput.addEventListener('blur', toggleAutoComplete);


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