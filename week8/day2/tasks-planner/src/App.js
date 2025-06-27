import React from "react"
import { Provider, useSelector } from "react-redux"
import store from "./redux/store"
import TaskForm from "./components/TaskForm"
import TaskList from "./components/TaskList"
import DatePickerComponent from "./components/DatePickerComponent"

function MainApp() {
  const selectedDate = useSelector((state) => state.selectedDate)

  return (
    <div className="container mt-5">
      <h2 className="mb-3">Daily Task Planner</h2>
      <label className="form-label">Select Date:</label>
      <DatePickerComponent selectedDate={selectedDate} />
      <TaskForm />
      <TaskList />
    </div>
  )
}

export default function App() {
  return (
    <Provider store={store}>
      <MainApp />
    </Provider>
  )
}
