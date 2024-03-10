const myLibrary = []

function Book(bookName, bookAge, bookAuthor) {
  this.bookName = bookName
  this.bookAge = bookAge
  this.bookAuthor = bookAuthor
}

function addBookToLibrary() {

    let name = document.getElementById('book_name').value
    let age = document.getElementById('book_age').value
    let author = document.getElementById('book_author').value

    const newBook = new Book(name, age, author)
    myLibrary.push(newBook)
    console.log(myLibrary)

    document.getElementById('popup').style.display = 'none'

    document.getElementById('myForm').reset()
    return false
}

function showBooks() {
  const bookList = document.querySelector('#book-list')
  bookList.innerHTML = ''

  myLibrary.forEach((book, index) => {
    const bookItem = document.createElement('div')
    bookItem.classList.add('book-item')
    bookItem.innerHTML = `
    <p>Details about the book:</p>
    <ul>
      <li>${book.bookName}</li>
      <li>${book.bookAge}</li>
      <li>${book.bookAuthor}</li>
    </ul>
    `
    bookList.appendChild(bookItem)
  })
}

document.getElementById('popupBtn').addEventListener('click', function() {
    document.getElementById('popup').style.display = 'block';
  });
  
  document.getElementById('closeBtn').addEventListener('click', function() {
    document.getElementById('popup').style.display = 'none';
  });
