import React from "react"
import { useSelector } from "react-redux"
import { selectBooks } from "../features/books/selectors"

export default function BookList() {
  const books = useSelector(selectBooks)

  return (
    <div>
      <h4>Book List</h4>
      <ul className="list-group">
        {books.map((book) => (
          <li key={book.id} className="list-group-item">
            <strong>{book.title}</strong> by {book.author} — <em>{book.genre}</em>
          </li>
        ))}
        {books.length === 0 && <li className="list-group-item">No books found.</li>}
      </ul>
    </div>
  )
}
