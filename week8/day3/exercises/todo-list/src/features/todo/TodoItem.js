import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTodo, removeTodo } from './todoSlice';

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <div>
        <input
          type="checkbox"
          className="form-check-input me-2"
          checked={todo.completed}
          onChange={() => dispatch(toggleTodo(todo.id))}
        />
        <span className={todo.completed ? 'text-decoration-line-through' : ''}>
          {todo.text}
        </span>
      </div>
      <button
        className="btn btn-sm btn-danger"
        onClick={() => dispatch(removeTodo(todo.id))}
      >
        Remove
      </button>
    </li>
  );
};

export default TodoItem;
