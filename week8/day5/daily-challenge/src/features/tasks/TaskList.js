import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTaskCompleted, deleteTask, editTask } from './tasksSlice';
import { selectTasksByCategory } from './taskSelectors';

const TaskList = ({ selectedCategoryId }) => {
  const tasksSelector = useCallback(selectTasksByCategory(selectedCategoryId), [selectedCategoryId]);
  const tasks = useSelector(tasksSelector);
  const dispatch = useDispatch();

  const handleToggle = useCallback(id => dispatch(toggleTaskCompleted(id)), [dispatch]);
  const handleDelete = useCallback(id => dispatch(deleteTask(id)), [dispatch]);
  const handleEdit = useCallback(id => {
    const title = prompt('Edit task title:');
    if (title) dispatch(editTask({ id, title }));
  }, [dispatch]);

  if (!tasks.length) {
    return <p className="text-muted">No tasks found for this category.</p>;
  }

  return (
    <ul className="list-group">
      {tasks.map(task => (
        <li key={task.id} className="list-group-item d-flex justify-content-between align-items-center">
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input me-2"
              checked={task.completed}
              onChange={() => handleToggle(task.id)}
              id={`task-${task.id}`}
            />
            <label className={`form-check-label ${task.completed ? 'text-decoration-line-through' : ''}`} htmlFor={`task-${task.id}`}>
              {task.title}
            </label>
          </div>
          <div>
            <button className="btn btn-sm btn-outline-secondary me-2" onClick={() => handleEdit(task.id)}>Edit</button>
            <button className="btn btn-sm btn-outline-danger" onClick={() => handleDelete(task.id)}>Delete</button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
