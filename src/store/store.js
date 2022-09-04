import { configureStore } from "@reduxjs/toolkit";
import postSlice  from "../feuters/posts/postsSlice";
import todoSlice from "../feuters/todo/todoSlice";
import userSlice from "../feuters/user/userSlice";

export const store = configureStore({
  reducer: {
    user:userSlice,
    todo:todoSlice,
    post:postSlice,
  },
});
