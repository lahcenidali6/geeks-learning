import express from "express"

const port = 5000

const books = [
  {
    id: 1,
    title: "The Hitchhiker's Guide to the Galaxy",
    author: "Douglas Adams",
    publishedYear: 1979,
  },
  {
    id: 2,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    publishedYear: 1813,
  },
  {
    id: 3,
    title: "1984",
    author: "George Orwell",
    publishedYear: 1949,
  },
  {
    id: 4,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    publishedYear: 1960,
  },
  {
    id: 5,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    publishedYear: 1925,
  },
  {
    id: 6,
    title: "Moby Dick",
    author: "Herman Melville",
    publishedYear: 1851,
  },
  {
    id: 7,
    title: "War and Peace",
    author: "Leo Tolstoy",
    publishedYear: 1869,
  },
  {
    id: 8,
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    publishedYear: 1951,
  },
  {
    id: 9,
    title: "The Lord of the Rings",
    author: "J.R.R. Tolkien",
    publishedYear: 1954,
  },
  {
    id: 10,
    title: "Alice's Adventures in Wonderland",
    author: "Lewis Carroll",
    publishedYear: 1865,
  },
  {
    id: 11,
    title: "Through the Looking-Glass",
    author: "Lewis Carroll",
    publishedYear: 1871,
  },
  {
    id: 12,
    title: "Don Quixote",
    author: "Miguel de Cervantes",
    publishedYear: 1605,
  },
  {
    id: 13,
    title: "The Odyssey",
    author: "Homer",
    publishedYear: -800,
  },
  {
    id: 14,
    title: "Crime and Punishment",
    author: "Fyodor Dostoevsky",
    publishedYear: 1866,
  },
  {
    id: 15,
    title: "The Chronicles of Narnia",
    author: "C.S. Lewis",
    publishedYear: 1950,
  },
  {
    id: 16,
    title: "Frankenstein",
    author: "Mary Shelley",
    publishedYear: 1818,
  },
  {
    id: 17,
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    publishedYear: 1937,
  },
  {
    id: 18,
    title: "Jane Eyre",
    author: "Charlotte Brontë",
    publishedYear: 1847,
  },
  {
    id: 19,
    title: "One Hundred Years of Solitude",
    author: "Gabriel García Márquez",
    publishedYear: 1967,
  },
  {
    id: 20,
    title: "Brave New World",
    author: "Aldous Huxley",
    publishedYear: 1932,
  },
];
const app = express()
app.use(express.json())
app.get("/api/books",(req,res)=>{
    res.send(books)
})
app.get("/api/books/:bookId",(req,res)=>{
    const id= req.params.bookId
    const book=books.find(book=>book.id==id)
    if(book===undefined){
        res.status(404).send("Book not Found")
    }
    else {
        res.status(200).send(book)
    }
})

app.post("/api/books",(req,res)=>{
    const newBook={
        id:books.length+1,
        title:req.body.title,
        author:req.body.author,
        publishedYear:req.body.publishedYear

    }
    books.push(newBook)
    res.status(201).send("created")
})
app.listen(port,()=>{
    console.log("server is running")
})