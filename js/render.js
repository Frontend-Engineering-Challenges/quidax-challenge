const controller = require('./controller');


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

const toggleAutoComplete = () => {
    topNav.classList.toggle('change-nav-bg');
    autocomplete.classList.toggle('d-none');
}

const displayFeaturedBooks = () => {
    const fragment = document.createDocumentFragment();

    controller.getFeaturedBooks()
        .forEach(book => {
            const div = document.createElement('div'); 
            div.classList.add('carousel-cell');
            div.innerHTML = `
                <img src="${book.image}" alt="${book.name} Book Cover">
            `
            fragment.appendChild(div); 
        })
    
    slider.appendChild(fragment);
}

const displayBookGrid = (data, parentElem) => {
    const fragment = document.createDocumentFragment();

    data.forEach(item => {
            const li = document.createElement('li'); 
            li.classList.add('carousel-cell');
            li.innerHTML = `
                <img src="${item.image}" alt="${item.name} Book Cover">
            `
            fragment.appendChild(li); 
        })
    
        parentElem.appendChild(fragment);
}

const displaySearchResults = (data, inputValueLength) => {
    const fragment = document.createDocumentFragment();

    if(data.length) {
        data.forEach(result => {
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
}

module.exports.init = () => {

    // Mobile Search Toggle
    searchToggleBtns.forEach(btn => {
        btn.addEventListener('click', toggleSearch);
    });
    
    // Off-Canvas toggle
    navToggleBtns.forEach(btn => {
        btn.addEventListener('click', toggleNav);
    });        
    navOverlay.addEventListener('click', toggleNav);

    // Search autocomplete component
    searchInput.addEventListener('focus', () => {
        const results = controller.getSearchResults();

        displaySearchResults(results);
        toggleAutoComplete();
    });
    searchInput.addEventListener('input', (e) => {
        const results = controller.getSearchResults(e.target.value);
    
        displaySearchResults(results, e.target.value.length);
    });
    searchInput.addEventListener('blur', toggleAutoComplete);


    // Function calls
    displayFeaturedBooks();
    //displayBookGrid();
}
