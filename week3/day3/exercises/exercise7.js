const allBooks = [
    {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        image: "https://upload.wikimedia.org/wikipedia/en/7/79/To_Kill_a_Mockingbird.JPG",
        alreadyRead: true
    },
    {
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        image: "https://upload.wikimedia.org/wikipedia/en/4/4a/TheHobbit_FirstEdition.jpg",
        alreadyRead: false
    }
];

const section = document.querySelector('.listBooks')

allBooks.forEach(book => {
    const bookDiv = document.createElement('div')

    const bookDetails = document.createElement('p')
    bookDetails.textContent = `${book.title} written by ${book.author}`
    if (book.alreadyRead) {
        bookDetails.style.color = 'red'
    }

    const bookImage = document.createElement('img')
    bookImage.src = book.image
    bookImage.style.width = '100px'

    bookDiv.appendChild(bookDetails)
    bookDiv.appendChild(bookImage)
    section.appendChild(bookDiv)
})