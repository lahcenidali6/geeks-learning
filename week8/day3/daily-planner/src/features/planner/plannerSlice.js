import { createSlice, nanoid } from '@reduxjs/toolkit';

const plannerSlice = createSlice({
  name: 'planner',
  initialState: {
    tasksByDate: {},
    selectedDate: new Date().toISOString().split('T')[0],
  },
  reducers: {
    setDate(state, action) {
      state.selectedDate = action.payload;
    },
    addTask: {
      reducer(state, action) {
        const { date, task } = action.payload;
        if (!state.tasksByDate[date]) state.tasksByDate[date] = [];
        state.tasksByDate[date].push(task);
      },
      prepare(text, date) {
        return {
          payload: {
            date,
            task: {
              id: nanoid(),
              text,
            },
          },
        };
      },
    },
    editTask(state, action) {
      const { date, id, newText } = action.payload;
      const task = state.tasksByDate[date]?.find(task => task.id === id);
      if (task) task.text = newText;
    },
    deleteTask(state, action) {
      const { date, id } = action.payload;
      state.tasksByDate[date] = state.tasksByDate[date]?.filter(task => task.id !== id);
    },
  },
});

export const { setDate, addTask, editTask, deleteTask } = plannerSlice.actions;
export default plannerSlice.reducer;
