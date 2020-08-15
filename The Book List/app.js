//Book Constructor
function Book(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}
//UI Constructor
function UI() {}

//Adding to the list
UI.prototype.addBookToList = function (book) {
  const list = document.getElementById("book-list");
  //Create tr
  const row = document.createElement("tr");
  //Append cols
  row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="delete">X</a></td>`;
  list.appendChild(row);
};

//Clearing Fields
UI.prototype.clearFields = function () {
  document.getElementById("title").value = null;
  document.getElementById("author").value = null;
  document.getElementById("isbn").value = null;
};

//Event Listeners
document.getElementById("book-form").addEventListener("submit", function (e) {
  // Get Form Values
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const isbn = document.getElementById("isbn").value;

  const book = new Book(title, author, isbn);

  const ui = new UI();

  //Clear Field
  ui.clearFields();
  ui.addBookToList(book);
  e.preventDefault();
});
