import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from './todoSlice';

const AddTodo = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    if (!text.trim()) return;
    dispatch(addTodo(text));
    setText('');
  };

  return (
    <form onSubmit={handleSubmit} className="d-flex gap-2 mb-3">
      <input
        type="text"
        className="form-control"
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Enter a todo..."
      />
      <button type="submit" className="btn btn-primary">Add</button>
    </form>
  );
};

export default AddTodo;
