import { useRef, useState } from 'react'
import { useTasks } from './TaskContext'

export default function TaskList() {
  const { state, dispatch } = useTasks()
  const [editingId, setEditingId] = useState(null)
  const editInputRef = useRef()

  const filteredTasks = state.tasks.filter(task => {
    if (state.filter === 'ACTIVE') return !task.completed
    if (state.filter === 'COMPLETED') return task.completed
    return true
  })

  const handleSave = (id) => {
    const newText = editInputRef.current.value
    dispatch({ type: 'EDIT_TASK', payload: { id, text: newText } })
    setEditingId(null)
  }

  return (
    <ul className="list-group">
      {filteredTasks.map(task => (
        <li
          key={task.id}
          className="list-group-item d-flex justify-content-between align-items-center"
        >
          {editingId === task.id ? (
            <>
              <input
                defaultValue={task.text}
                ref={editInputRef}
                className="form-control me-2"
              />
              <button
                onClick={() => handleSave(task.id)}
                className="btn btn-success btn-sm me-2"
              >
                Save
              </button>
              <button
                onClick={() => setEditingId(null)}
                className="btn btn-secondary btn-sm"
              >
                Cancel
              </button>
            </>
          ) : (
            <>
              <span
                onClick={() => dispatch({ type: 'TOGGLE_TASK', payload: task.id })}
                style={{
                  textDecoration: task.completed ? 'line-through' : 'none',
                  cursor: 'pointer'
                }}
              >
                {task.text}
              </span>
              <div>
                <button
                  onClick={() => setEditingId(task.id)}
                  className="btn btn-outline-primary btn-sm me-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => dispatch({ type: 'REMOVE_TASK', payload: task.id })}
                  className="btn btn-outline-danger btn-sm"
                >
                  Delete
                </button>
              </div>
            </>
          )}
        </li>
      ))}
    </ul>
  )
}
