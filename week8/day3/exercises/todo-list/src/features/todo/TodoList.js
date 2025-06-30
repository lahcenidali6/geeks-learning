import React from 'react';
import { useSelector } from 'react-redux';
import TodoItem from './TodoItem';

const TodoList = () => {
  const todos = useSelector(state => state.todos);

  if (todos.length === 0) {
    return <p className="text-muted">No todos yet. Add one!</p>;
  }

  return (
    <ul className="list-group">
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

export default TodoList;
