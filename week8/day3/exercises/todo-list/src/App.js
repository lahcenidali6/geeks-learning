import React from 'react';
import AddTodo from './features/todo/AddTodo';
import TodoList from './features/todo/TodoList';

const App = () => {
  return (
    <div className="container py-5">
      <h2 className="mb-4">📝 Todo List (Redux Toolkit)</h2>
      <AddTodo />
      <TodoList />
    </div>
  );
};

export default App;
