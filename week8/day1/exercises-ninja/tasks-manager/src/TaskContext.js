import { createContext, useReducer, useContext } from 'react'

const TaskContext = createContext()

const initialState = []

function taskReducer(state, action) {
  switch (action.type) {
    case 'ADD_TASK':
      return [...state, { id: Date.now(), text: action.payload, completed: false }]
    case 'TOGGLE_TASK':
      return state.map(task =>
        task.id === action.payload ? { ...task, completed: !task.completed } : task
      )
    case 'REMOVE_TASK':
      return state.filter(task => task.id !== action.payload)
    default:
      return state
  }
}

export function TaskProvider({ children }) {
  const [state, dispatch] = useReducer(taskReducer, initialState)
  return (
    <TaskContext.Provider value={{ tasks: state, dispatch }}>
      {children}
    </TaskContext.Provider>
  )
}

export function useTasks() {
  return useContext(TaskContext)
}
