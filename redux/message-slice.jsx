import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  status: null,
  message: "",
  isLoading: false,
};
const messageSlice = createSlice({
  name: message,
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.isLoading = action.payload.isLoading;
    },
  },
});
