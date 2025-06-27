import { SET_DATE, ADD_TASK, EDIT_TASK, DELETE_TASK } from "./actionTypes"

const initialState = {
  selectedDate: new Date().toISOString().split("T")[0], // YYYY-MM-DD
  tasksByDate: {},
}

const reducer = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case SET_DATE:
      return {
        ...state,
        selectedDate: payload,
      }

    case ADD_TASK:
      return {
        ...state,
        tasksByDate: {
          ...state.tasksByDate,
          [payload.date]: [
            ...(state.tasksByDate[payload.date] || []),
            { id: Date.now(), text: payload.text },
          ],
        },
      }

    case EDIT_TASK:
      return {
        ...state,
        tasksByDate: {
          ...state.tasksByDate,
          [payload.date]: state.tasksByDate[payload.date].map((task) =>
            task.id === payload.id ? { ...task, text: payload.newText } : task
          ),
        },
      }

    case DELETE_TASK:
      return {
        ...state,
        tasksByDate: {
          ...state.tasksByDate,
          [payload.date]: state.tasksByDate[payload.date].filter(
            (task) => task.id !== payload.id
          ),
        },
      }

    default:
      return state
  }
}

export default reducer
