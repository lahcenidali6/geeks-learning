import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../redux/actions'

export default function AddTodo() {
  const [text, setText] = useState('')
  const dispatch = useDispatch()

  const handleAdd = () => {
    if (!text.trim()) return
    dispatch(addTodo(text))
    setText('')
  }

  return (
    <div className="mb-3">
      <input
        type="text"
        placeholder="Add a todo"
        value={text}
        onChange={e => setText(e.target.value)}
        className="form-control"
      />
      <button onClick={handleAdd} className="btn btn-primary mt-2">
        Add Todo
      </button>
    </div>
  )
}
