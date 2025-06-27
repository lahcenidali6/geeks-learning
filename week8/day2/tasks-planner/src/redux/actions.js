import { SET_DATE, ADD_TASK, EDIT_TASK, DELETE_TASK } from "./actionTypes"

export const setDate = (date) => ({
  type: SET_DATE,
  payload: date,
})

export const addTask = (date, text) => ({
  type: ADD_TASK,
  payload: { date, text },
})

export const editTask = (date, id, newText) => ({
  type: EDIT_TASK,
  payload: { date, id, newText },
})

export const deleteTask = (date, id) => ({
  type: DELETE_TASK,
  payload: { date, id },
})
