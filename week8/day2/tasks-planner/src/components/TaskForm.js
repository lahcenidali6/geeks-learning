import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addTask } from "../redux/actions"

export default function TaskForm() {
  const [task, setTask] = useState("")
  const dispatch = useDispatch()
  const selectedDate = useSelector((state) => state.selectedDate)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (task.trim()) {
      dispatch(addTask(selectedDate, task))
      setTask("")
    }
  }

  return (
    <form onSubmit={handleSubmit} className="d-flex gap-2 my-3">
      <input
        type="text"
        placeholder="Add new task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        className="form-control"
      />
      <button type="submit" className="btn btn-primary">Add</button>
    </form>
  )
}
