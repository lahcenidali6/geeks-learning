import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask } from './plannerSlice';
import EditTask from './EditTask';

const TaskList = () => {
  const dispatch = useDispatch();
  const { selectedDate, tasksByDate } = useSelector(state => state.planner);
  const tasks = tasksByDate[selectedDate] || [];

  return (
    <ul className="list-group">
      {tasks.length === 0 ? (
        <li className="list-group-item text-muted">No tasks for this day.</li>
      ) : (
        tasks.map(task => (
          <li key={task.id} className="list-group-item d-flex justify-content-between align-items-center">
            <span>{task.text}</span>
            <div>
              <EditTask task={task} />
              <button
                className="btn btn-sm btn-danger ms-2"
                onClick={() => dispatch(deleteTask({ date: selectedDate, id: task.id }))}
              >
                Delete
              </button>
            </div>
          </li>
        ))
      )}
    </ul>
  );
};

export default TaskList;
