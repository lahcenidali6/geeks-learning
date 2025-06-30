import React from 'react';
import AddTask from './features/planner/AddTask';
import TaskList from './features/planner/TaskList';
import DatePicker from './components/DatePicker';

const App = () => {
  return (
    <div className="container py-5">
      <h2 className="mb-4">📆 Daily Planner</h2>
      <DatePicker />
      <AddTask />
      <TaskList />
    </div>
  );
};

export default App;
