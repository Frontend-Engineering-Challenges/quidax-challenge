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
        image: '../assets/images/big-magic.png'
    },
    {
        name: 'Effective Python',
        image: '../assets/images/effective-python.png'
    },
    {
        name: 'Built to Last',
        image: '../assets/images/built-to-last.png'
    },
    {
        name: 'The Lean Startup',
        image: '../assets/images/the-lean-startup.png'
    },
    {
        name: 'The effective engineer',
        image: '../assets/images/the-effective-engineer.png'
    }
]


module.exports = {
    searchResults,
    books
}
},{}],2:[function(require,module,exports){
const data = require('./data');

const topNav = document.querySelector('.top-navigation');
const searchInput = document.querySelector('#mainSearchInput');
const navOverlay = document.querySelector('.nav-overlay');
const slider = document.querySelector('.main-carousel');
const searchToggleBtns = document.querySelectorAll('[toggle-search]');
const navToggleBtns = document.querySelectorAll('[toggle-nav]');


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

    data.books.forEach(book => {
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
