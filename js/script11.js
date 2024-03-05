const books = [
  { id: 1, title: 'JavaScript: The Good Parts', copies: 5 },
  { id: 2, title: "You Don't Know JS", copies: 3 },
  { id: 3, title: 'Eloquent JavaScript', copies: 7 },
];
function col() {
  let obj = {};
  for (let i = 0; i < books.length; i++) {
    obj[books[i].title] = books[i].copies;
  }
  console.log(obj);
}
col();
