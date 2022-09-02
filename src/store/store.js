import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../feuters/user/userSlice";

export const store = configureStore({
  reducer: {
    user:userSlice
  },
});
