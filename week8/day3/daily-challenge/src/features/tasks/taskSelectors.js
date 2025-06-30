import { createSelector } from 'reselect';

const selectTasks = state => state.tasks;

export const selectTasksByCategory = categoryId =>
  createSelector([selectTasks], tasks =>
    categoryId ? tasks.filter(task => task.categoryId === categoryId) : tasks
  );

export const selectCompletedTasks = createSelector([selectTasks], tasks =>
  tasks.filter(task => task.completed).length
);
