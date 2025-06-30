import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchTodos = createAsyncThunk('todo/fetchTodos', async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5');
  return await response.json();
});

const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    todos: [],
  },
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload);
    },
    toggleTodo: (state, action) => {
      const todo = state.todos.find(todo => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    setTodos: (state, action) => {
      state.todos = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTodos.fulfilled, (state, action) => {
      state.todos = action.payload;
    });
  },
});

export const { addTodo, removeTodo, toggleTodo, setTodos } = todoSlice.actions;
export default todoSlice.reducer;
