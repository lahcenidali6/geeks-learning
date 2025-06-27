import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { toggleTodo, removeTodo } from '../redux/actions'

export default function TodoList() {
  const todos = useSelector(state => state.todos)
  const dispatch = useDispatch()

  return (
    <ul className="list-group">
      {todos.map(todo => (
        <li
          key={todo.id}
          className="list-group-item d-flex justify-content-between align-items-center"
        >
          <span
            onClick={() => dispatch(toggleTodo(todo.id))}
            style={{
              textDecoration: todo.completed ? 'line-through' : 'none',
              cursor: 'pointer',
              flexGrow: 1,
            }}
          >
            {todo.text}
          </span>
          <button
            className="btn btn-danger btn-sm ms-2"
            onClick={() => dispatch(removeTodo(todo.id))}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  )
}
