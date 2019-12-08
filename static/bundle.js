(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const searchResults = [
    "Four Steps To The Epiphany Revised - James McEnroe",
    "Four Steps To The Epiphany - James McEnroe",
    "The Lean Start Up - Eric Reiss",
    "No Excuses - Brian Tracy"
]


module.exports = {
    searchResults
}
},{}],2:[function(require,module,exports){
const data = require('./data');

const topNav = document.querySelector('.top-navigation');
const searchInput = document.querySelector('#mainSearchInput');
const navOverlay = document.querySelector('.nav-overlay');
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


// Event Listeners
searchToggleBtns.forEach(btn => {
    btn.addEventListener('click', toggleSearch);
});

navToggleBtns.forEach(btn => {
    btn.addEventListener('click', toggleNav);
});

navOverlay.addEventListener('click', toggleNav);


// element argument can be a selector string
//   for an individual element
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
