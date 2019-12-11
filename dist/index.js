(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const data = require('./data');


const getAllBooks = () => data.books;

const getRecentBooks = () => data.books.reverse();

const getFeaturedBooks = () => data.books.filter(book => book.featured);

const getSearchResults = (query) => {
    if(query) {
        const matched = data.searchResults.filter(result => {
            return result.match(new RegExp(`^${query}`, 'i'))
        });
        
        return matched.slice(0, 4);
    }

    return data.searchResults.slice(0, 4);
}

module.exports = {
    getAllBooks,
    getRecentBooks,
    getFeaturedBooks,
    getSearchResults
}
},{"./data":2}],2:[function(require,module,exports){
module.exports = {

    searchResults: [
        "Four Steps To The Epiphany Revised - James McEnroe",
        "Four Steps To The Epiphany - James McEnroe",
        "The Lean Start Up - Eric Reiss",
        "No Excuses - Brian Tracy",
        "Harry Potter and the Goblet of Fire - J.K Rowlings",
        "Song of Fire and Ice - George R.R Martin",
    ],

    books: [
        {
            name: 'Big Magic',
            image: '../assets/images/big-magic.png',
            available: true,
            author: ["Elizabeth Gilbert"],
            year: 2014,
            genre: ["Business", "Entrepreneurship"],
            labels: ["Creative", "Self-help"],
            ratings: 4.0,
            borrowed: 31,
            likes: 29,
            featured: true
        },
        {
            name: 'Effective Python',
            image: '../assets/images/effective-python.png',
            available: true,
            author: ["Diomidis Spinellis"],
            year: null,
            genre: ["Motivational"],
            labels: ["Creative", "Self-help"],
            ratings: 4.0,
            borrowed: 31,
            likes: 29,
            featured: true
        },
        {
            name: 'Built To Last',
            image: '../assets/images/built-to-last.png',
            available: false,
            author: ["Jim Collins", "Jerry I. Porras"],
            year: 2001,
            genre: ["Business", "Entrepreneurship"],
            labels: ["Creative", "Self-help"],
            ratings: 4.0,
            borrowed: 31,
            likes: 29,
            featured: true
        },
        {
            name: 'The Lean Startup',
            image: '../assets/images/the-lean-startup.png',
            available: true,
            author: ["Eric Reis"],
            year: 2005,
            genre: ["Motivational"],
            labels: ["Creative", "Self-help"],
            ratings: 4.0,
            borrowed: 31,
            likes: 29,
            featured: true
        },
        {
            name: 'The Effective Engineer',
            image: '../assets/images/the-effective-engineer.png',
            available: true,
            author: ["Edmond Lau"],
            year: 2009,
            genre: ["Motivational"],
            labels: ["Creative", "Self-help"],
            ratings: 4.0,
            borrowed: 31,
            likes: 29,
            featured: true
        },
        {
            name: 'Big Magic',
            image: '../assets/images/big-magic.png',
            available: true,
            author: ["Elizabeth Gilbert"],
            year: 2014,
            genre: ["Business", "Entrepreneurship"],
            labels: ["Creative", "Self-help"],
            ratings: 4.0,
            borrowed: 31,
            likes: 29,
            featured: true
        },
        {
            name: 'Effective Python',
            image: '../assets/images/effective-python.png',
            available: true,
            author: ["Diomidis Spinellis"],
            year: null,
            genre: ["Motivational"],
            labels: ["Creative", "Self-help"],
            ratings: 4.0,
            borrowed: 31,
            likes: 29,
            featured: true
        },
        {
            name: 'Built To Last',
            image: '../assets/images/built-to-last.png',
            available: false,
            author: ["Jim Collins", "Jerry I. Porras"],
            year: 2001,
            genre: ["Business", "Entrepreneurship"],
            labels: ["Creative", "Self-help"],
            ratings: 4.0,
            borrowed: 31,
            likes: 29,
            featured: true
        },
        {
            name: 'The Lean Startup',
            image: '../assets/images/the-lean-startup.png',
            available: true,
            author: ["Eric Reis"],
            year: 2005,
            genre: ["Motivational"],
            labels: ["Creative", "Self-help"],
            ratings: 4.0,
            borrowed: 31,
            likes: 29,
            featured: true
        },
        {
            name: 'The Effective Engineer',
            image: '../assets/images/the-effective-engineer.png',
            available: true,
            author: ["Edmond Lau"],
            year: 2009,
            genre: ["Motivational"],
            labels: ["Creative", "Self-help"],
            ratings: 4.0,
            borrowed: 31,
            likes: 29,
            featured: true
        },
        {
            name: 'Built To Last',
            image: '../assets/images/built-to-last.png',
            available: false,
            author: ["Jim Collins", "Jerry I. Porras"],
            year: 2001,
            genre: ["Business", "Entrepreneurship"],
            labels: ["Creative", "Self-help"],
            ratings: 4.0,
            borrowed: 31,
            likes: 29,
            featured: false
        },
        {
            name: 'The Lean Startup',
            image: '../assets/images/the-lean-startup.png',
            available: true,
            author: ["Eric Reis"],
            year: 2005,
            genre: ["Motivational"],
            labels: ["Creative", "Self-help"],
            ratings: 4.0,
            borrowed: 31,
            likes: 29,
            featured: false
        },
        {
            name: 'The Effective Engineer',
            image: '../assets/images/the-effective-engineer.png',
            available: true,
            author: ["Edmond Lau"],
            year: 2009,
            genre: ["Motivational"],
            labels: ["Creative", "Self-help"],
            ratings: 4.0,
            borrowed: 31,
            likes: 29,
            featured: false
        }
    ]
}
},{}],3:[function(require,module,exports){
const render = require('./render');

render.init();

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
},{"./render":4}],4:[function(require,module,exports){
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

},{"./controller":1}]},{},[3]);
