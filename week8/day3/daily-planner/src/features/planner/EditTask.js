import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editTask } from './plannerSlice';

const EditTask = ({ task }) => {
  const [editing, setEditing] = useState(false);
  const [newText, setNewText] = useState(task.text);
  const dispatch = useDispatch();
  const selectedDate = useSelector(state => state.planner.selectedDate);

  const handleEdit = () => {
    if (newText.trim()) {
      dispatch(editTask({ date: selectedDate, id: task.id, newText }));
      setEditing(false);
    }
  };

  return editing ? (
    <div className="d-flex">
      <input
        type="text"
        className="form-control form-control-sm me-1"
        value={newText}
        onChange={e => setNewText(e.target.value)}
      />
      <button className="btn btn-sm btn-primary" onClick={handleEdit}>Save</button>
    </div>
  ) : (
    <button className="btn btn-sm btn-outline-secondary" onClick={() => setEditing(true)}>Edit</button>
  );
};

export default EditTask;
