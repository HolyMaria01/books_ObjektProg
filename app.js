const form = document.querySelector('#book-form')
form.addEventListener('submit', addBook)

function addBook(event){
    //read user input
    const title = document.querySelector('#title').value
    const author = document.querySelector('#author').value
    const isbn = document.querySelector('#isbn').value

    //creat table row with user input data
    const bookRow = document.createElement('tr')
    bookRow.innerHTML = `
                        <td>${title}</td>
                        <td>${author}</td>
                        <td>${isbn}</td>
                        <td><a href="#">X</a></td>`
    const booksTabel = document.querySelector('#books')
    booksTabel.appendChild(bookRow)

    //add task to LS
    const book = [title, author, isbn]
    let books // array user inputs
    if(localStorage.getItem('books') === null){
        books = []
    } else {
        books = JSON.parse(localStorage.getItem('books'))
    }
    localStorage.setItem('books', JSON.stringify(books))
    books.push(book)

    //clear tasks
    document.querySelector('#title').value = ''
    document.querySelector('#author').value = ''
    document.querySelector('#isbn').value = ''
    event.preventDefault()
}

