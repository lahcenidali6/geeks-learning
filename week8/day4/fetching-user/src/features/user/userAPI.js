import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUser = createAsyncThunk("user/fetchUser", async () => {
  const randomUserId = Math.floor(Math.random() * 10)+1;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${randomUserId}`
  );
  if (!response.ok) throw new Error("Failed to fetch user");
  const data = await response.json();
  return data;
});
