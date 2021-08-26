import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./user-slice";
import messageSlice from "./message-slice";
const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    message: messageSlice.reducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});
export default store;
