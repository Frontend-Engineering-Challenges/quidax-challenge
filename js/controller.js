const data = require('./data');


const getAllBooks = () => data.books;

const getRecentBooks = () => data.books.reverse().slice(0, 5);

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