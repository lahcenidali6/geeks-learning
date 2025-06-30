import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { setGenreFilter } from "../features/books/booksSlice"
import { selectGenreFilter } from "../features/books/selectors"

export default function GenreSelector() {
  const dispatch = useDispatch()
  const current = useSelector(selectGenreFilter)

  const genres = ["ALL", "Horror", "Fantasy", "Science Fiction"]

  return (
    <div className="mb-3">
      <select
        className="form-select"
        value={current}
        onChange={(e) => dispatch(setGenreFilter(e.target.value))}
      >
        {genres.map((genre) => (
          <option key={genre} value={genre}>
            {genre}
          </option>
        ))}
      </select>
    </div>
  )
}
