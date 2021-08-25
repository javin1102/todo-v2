import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  googleId: "",
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    reset: () => initialState,
    setId: (state, action) => {
      state.googleId = action.payload.googleId;
    },
  },
});
export const userAction = userSlice.actions;
export default userSlice;
