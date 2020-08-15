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
//Alert Message
UI.prototype.showAlert = function (message, className) {
  //Create div element
  const div = document.createElement("div");
  //Add Class
  div.className = `alert ${className}`;
  //Add the text
  div.appendChild(document.createTextNode(message));
  const container = document.querySelector(".container");
  const form = document.getElementById("book-form");
  container.insertBefore(div, form);

  //Removing after 3s
  setTimeout(function () {
    document.querySelector(".alert").remove();
  }, 3000);
};
//Delete Book
UI.prototype.deleteBook = function (target) {
  if (target.className === "delete") {
    target.parentElement.parentElement.remove();
  }
};

//Event Listener for add item to the list
document.getElementById("book-form").addEventListener("submit", function (e) {
  // Get Form Values
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const isbn = document.getElementById("isbn").value;

  const book = new Book(title, author, isbn);

  const ui = new UI();

  //Validate
  if (title === "" || author === "" || isbn === "") {
    //Error Alert
    ui.showAlert("Please fill in all field", "error");
  } else {
    //Add Book to the list
    ui.addBookToList(book);
    //Show Success Alert Message
    ui.showAlert("Book successfully added!", "success");
    //Clear Field
    ui.clearFields();
  }

  e.preventDefault();
});

//Event Listener for Delete from the list
document.getElementById("book-list").addEventListener("click", function (e) {
  const ui = new UI();
  //Deleting
  ui.deleteBook(e.target);
  //Showing Alert
  ui.showAlert("Book successfully removed!", "success");
  e.preventDefault();
});
