import React from "react"
import BookList from "./components/BookList"
import GenreSelector from "./components/GenreSelector"

function App() {
  return (
    <div className="container mt-5">
      <h2 className="mb-4">Book Inventory Manager</h2>
      <GenreSelector />
      <BookList />
    </div>
  )
}

export default App
