import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { deleteTask, editTask } from "../redux/actions"

export default function TaskList() {
  const dispatch = useDispatch()
  const selectedDate = useSelector((state) => state.selectedDate)
  const tasks = useSelector((state) => state.tasksByDate[selectedDate] || [])

  const [editId, setEditId] = useState(null)
  const [editText, setEditText] = useState("")

  const startEdit = (task) => {
    setEditId(task.id)
    setEditText(task.text)
  }

  const submitEdit = (id) => {
    if (editText.trim()) {
      dispatch(editTask(selectedDate, id, editText))
      setEditId(null)
    }
  }

  return (
    <ul className="list-group">
      {tasks.map((task) => (
        <li
          key={task.id}
          className="list-group-item d-flex justify-content-between align-items-center"
        >
          {editId === task.id ? (
            <input
              type="text"
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
              onBlur={() => submitEdit(task.id)}
              onKeyDown={(e) => e.key === "Enter" && submitEdit(task.id)}
              className="form-control me-2"
              autoFocus
            />
          ) : (
            <span onClick={() => startEdit(task)} style={{ cursor: "pointer", flexGrow: 1 }}>
              {task.text}
            </span>
          )}
          <button
            onClick={() => dispatch(deleteTask(selectedDate, task.id))}
            className="btn btn-danger btn-sm ms-2"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  )
}
