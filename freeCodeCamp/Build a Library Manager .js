let library = [
  {
    title: "Your Next Five Moves: Master the Art of Business Strategy",
    author: "Patrick Bet-David and Greg Dinkin",
    about: "A book on how to plan ahead",
    pages: 320,
  },
  {
    title: "Atomic Habits",
    author: "James Clear",
    about:
      "A practical book about discarding bad habits and building good ones",
    pages: 320,
  },
];
function displayBooks(catalog) {
  let output = "Books in the Library:\n";

  catalog.forEach((book) => {
    output += `- ${book.title} by ${book.author} (${book.pages} pages)\n`;
  });

  return output;
}

function getBookSummaries(sum) {
  return sum.map((s) => s.about);
}

function getBooksByAuthor(arr, aut) {
  return arr.filter((book) => book.author === aut);
}

function getTotalPages(arr) {
  return arr.reduce((a, b) => a + b.pages, 0);
}
let libraryBooks = displayBooks(library);
let bookSummaries = getBookSummaries(library);
let booksByArvidKahl = getBooksByAuthor(library, "Arvid Kahl");
let totalPagesOfBooksInLibrary = getTotalPages(library);
console.log(libraryBooks);
console.log(bookSummaries);
console.log(booksByArvidKahl);
console.log(totalPagesOfBooksInLibrary);
