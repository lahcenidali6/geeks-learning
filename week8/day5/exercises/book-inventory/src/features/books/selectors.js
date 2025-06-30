import { createSelector } from "@reduxjs/toolkit"

export const selectAllBooks = (state) => state.books.books
export const selectGenreFilter = (state) => state.books.genreFilter

export const selectBooks = createSelector(
  [selectAllBooks, selectGenreFilter],
  (books, genre) => {
    if (genre === "ALL") return books
    return books.filter((book) => book.genre === genre)
  }
)

export const selectHorrorBooks = createSelector(
  [selectAllBooks],
  (books) => books.filter((book) => book.genre === "Horror")
)

export const selectFantasyBooks = createSelector(
  [selectAllBooks],
  (books) => books.filter((book) => book.genre === "Fantasy")
)

export const selectScienceFictionBooks = createSelector(
  [selectAllBooks],
  (books) => books.filter((book) => book.genre === "Science Fiction")
)
