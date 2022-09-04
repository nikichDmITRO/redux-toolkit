import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
        state.todos.push(action.payload)
    },
    deletTodo: (state, action) => {
        state.todos=state.todos.filter(todos=>todos.id!==action.payload)
    },
  },
});

export const { addTodo } = todoSlice.actions;
export const { deletTodo } = todoSlice.actions;
export default todoSlice.reducer;
