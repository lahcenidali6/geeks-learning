import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const ageUpAsync = createAsyncThunk('age/up', async () => {
  await new Promise(resolve => setTimeout(resolve, 1000));
});
export const ageDownAsync = createAsyncThunk('age/down', async () => {
  await new Promise(resolve => setTimeout(resolve, 1000));
});

const ageSlice = createSlice({
  name: 'age',
  initialState: { age: 20, loading: false },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(ageUpAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(ageUpAsync.fulfilled, (state) => {
        state.age += 1;
        state.loading = false;
      })
      .addCase(ageDownAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(ageDownAsync.fulfilled, (state) => {
        state.age -= 1;
        state.loading = false;
      });
  },
});

export default ageSlice.reducer;
