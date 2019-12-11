(function() {

    const data = {
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


    const controller = {
        getAllBooks: () => {
            return data.books;
        },
        getRecentBooks: () => {
            return data.books.reverse();
        },
        getFeaturedBooks: () => {
            return data.books.filter(book => book.featured)
        },
        getSearchResults: (query) => {
            if(query) {
                const matched = data.searchResults.filter(result => result.match(new RegExp(`^${query}`, 'i')));
                return matched.slice(0, 4);
            }

            return data.searchResults.slice(0, 4);
        }
    }


    const render = {
        toggleSearch: () => {
            const topNav = document.querySelector('.top-navigation');
            const searchInput = document.querySelector('#mainSearchInput');

            topNav.classList.contains('alt-nav') ?
                searchInput.setAttribute('placeholder', 'Search books, genres, authors, etc.') :
                searchInput.setAttribute('placeholder', 'Search')

            topNav.classList.toggle('alt-nav');
        },
        toggleNav: () => {
            document.body.classList.toggle('open-drawer');
        },
        toggleAutoComplete: () => {
            const topNav = document.querySelector('.top-navigation');
            const autocomplete = document.querySelector('.autocomplete');

            topNav.classList.toggle('change-nav-bg');
            autocomplete.classList.toggle('d-none');
        },
        displayFeaturedBooks: () => {
            const fragment = document.createDocumentFragment();
            const slider = document.querySelector('.main-carousel');

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
        },
        displayBookGrid: (data, parentElem) => {
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
        },
        displaySearchResults: (data, inputValueLength) => {
            const fragment = document.createDocumentFragment();
            const autocomplete = document.querySelector('.autocomplete');

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
        },
        init: () => {

            // Mobile Search Toggle
            const searchToggleBtns = document.querySelectorAll('[toggle-search]'); 
            searchToggleBtns.forEach(btn => {
                btn.addEventListener('click', render.toggleSearch);
            });
            
            // Off-Canvas toggle
            const navOverlay = document.querySelector('.nav-overlay');
            const navToggleBtns = document.querySelectorAll('[toggle-nav]');

            navToggleBtns.forEach(btn => {
                btn.addEventListener('click', render.toggleNav);
            });        
            navOverlay.addEventListener('click', render.toggleNav);

            // Search autocomplete component
            const searchInput = document.querySelector('#mainSearchInput');
            searchInput.addEventListener('focus', () => {
                const results = controller.getSearchResults();
        
                render.displaySearchResults(results);
                render.toggleAutoComplete();
            });
            searchInput.addEventListener('input', (e) => {
                const results = controller.getSearchResults(e.target.value);
            
                render.displaySearchResults(results, e.target.value.length);
            });
            searchInput.addEventListener('blur', render.toggleAutoComplete);

            // Function calls
            render.displayFeaturedBooks();
            // this.displayBookGrid();
        }
    }

    render.init();
})();

// Initialize flickity slider
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