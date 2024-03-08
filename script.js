const myLibrary = []

function Book(bookName, bookAge, bookAuthor) {
  this.bookName = bookName
  this.bookAge = bookAge
  this.bookAuthor = bookAuthor
}
// TODO: popravit dodavanje knjiga u myLibrary, napravit da ih ispise, mozda da se moze izbrisat

function addBookToLibrary() {
  document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault()

    let name = document.getElementById('book_name').value
    let age = document.getElementById('book_age').value
    let author = document.getElementById('book_author').value

    const newBook = new Book(name, age, author)
    myLibrary.push(newBook)
    console.log(myLibrary)
})
}

document.getElementById('popupBtn').addEventListener('click', function() {
    document.getElementById('popup').style.display = 'block';
  });
  
  document.getElementById('closeBtn').addEventListener('click', function() {
    document.getElementById('popup').style.display = 'none';
  });

