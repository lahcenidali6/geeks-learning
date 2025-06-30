import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTask } from './plannerSlice';

const AddTask = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();
  const selectedDate = useSelector(state => state.planner.selectedDate);

  const handleSubmit = e => {
    e.preventDefault();
    if (!text.trim()) return;
    dispatch(addTask(text, selectedDate));
    setText('');
  };

  return (
    <form onSubmit={handleSubmit} className="d-flex gap-2 mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="New task"
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <button type="submit" className="btn btn-success">Add</button>
    </form>
  );
};

export default AddTask;
