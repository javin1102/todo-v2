import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  googleId: "",
  todoList: [],
  displayType: "all",
  theme: "dark",
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    reset: () => initialState,
    setId: (state, action) => {
      state.googleId = action.payload.googleId;
    },

    addTodoList: (state, action) => {
      state.todoList.push(action.payload.todo);
    },
    removeTodoList: (state, action) => {
      const newTodo = state.todoList.filter(
        (todo) => todo.id !== action.payload.id
      );
      state.todoList = newTodo;
    },
    setHasCompletedList: (state, action) => {
      const selectedTodoIndex = state.todoList.findIndex(
        (todo) => todo.id === action.payload.id
      );
      state.todoList[selectedTodoIndex].completed =
        !state.todoList[selectedTodoIndex].completed;
    },
    setTodoList: (state, action) => {
      state.todoList = action.payload.todoList;
    },
    setDisplayType: (state, action) => {
      state.displayType = action.payload.displayType;
    },
    setThemeType: (state, action) => {
      state.theme = action.payload.theme;
    },
  },
});
export const userAction = userSlice.actions;
export default userSlice;
