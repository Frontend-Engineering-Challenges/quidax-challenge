(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const searchResults = [
    "Four Steps To The Epiphany Revised - James McEnroe",
    "Four Steps To The Epiphany - James McEnroe",
    "The Lean Start Up - Eric Reiss",
    "No Excuses - Brian Tracy"
]

const books = [
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


module.exports = {
    searchResults,
    books
}
},{}],2:[function(require,module,exports){
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
},{"./data":1}]},{},[2]);
