import { Provider } from 'react-redux';
import { store } from './app/store';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Todo App with Redux Thunk</h1>
        <AddTodo />
        <TodoList />
      </div>
    </Provider>
  );
}

export default App;
