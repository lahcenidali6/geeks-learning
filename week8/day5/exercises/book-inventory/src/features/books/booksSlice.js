import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  genreFilter: "ALL",
  books: [
    { id: 1, title: "Dracula", author: "Bram Stoker", genre: "Horror" },
    { id: 2, title: "Frankenstein", author: "Mary Shelley", genre: "Horror" },
    { id: 3, title: "The Hobbit", author: "J.R.R. Tolkien", genre: "Fantasy" },
    { id: 4, title: "Dune", author: "Frank Herbert", genre: "Science Fiction" },
    { id: 5, title: "Neuromancer", author: "William Gibson", genre: "Science Fiction" },
    { id: 6, title: "Harry Potter", author: "J.K. Rowling", genre: "Fantasy" },
  ],
}

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    setGenreFilter(state, action) {
      state.genreFilter = action.payload
    },
  },
})

export const { setGenreFilter } = booksSlice.actions

export default booksSlice.reducer
