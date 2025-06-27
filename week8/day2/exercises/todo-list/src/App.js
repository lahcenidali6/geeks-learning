import { Provider } from 'react-redux'
import store from './redux/store'
import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'

export default function App() {
  return (
    <Provider store={store}>
      <div className="container mt-5">
        <h1 className="mb-4">Todo List</h1>
        <AddTodo />
        <TodoList />
      </div>
    </Provider>
  )
}
