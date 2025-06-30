import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import TaskList from './features/tasks/TaskList';
import CategorySelector from './features/categories/CategorySelector';
import { addTask } from './features/tasks/tasksSlice';
import { addCategory } from './features/categories/categoriesSlice';

const App = () => {
  const [selectedCategoryId, setSelectedCategoryId] = useState('');
  const dispatch = useDispatch();

  const handleAddTask = () => {
    const title = prompt('Task title:');
    if (!title) return;
    dispatch(addTask(title, selectedCategoryId));
  };

  const handleAddCategory = () => {
    const name = prompt('Category name:');
    if (!name) return;
    dispatch(addCategory(name));
  };

  return (
    <div className="container py-4">
      <h1 className="mb-4">🗂️ Productivity Tracker</h1>

      <div className="d-flex align-items-center gap-2 mb-3">
        <CategorySelector selectedCategoryId={selectedCategoryId} onChange={setSelectedCategoryId} />
        <button className="btn btn-outline-primary" onClick={handleAddCategory}>Add Category</button>
        <button className="btn btn-outline-success" onClick={handleAddTask}>Add Task</button>
      </div>

      <TaskList selectedCategoryId={selectedCategoryId} />
    </div>
  );
};

export default App;
