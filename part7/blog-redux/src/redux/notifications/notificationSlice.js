import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  message: "",
  timeout: null,
};

const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    setNotification: (state, action) => {
      if (state.timeout) clearTimeout(state.timeout);
      state.message = action.payload.message;
      state.timeout = action.payload.timeout;
    },
    clearNotification: (state) => {
      if (state.timeout) clearTimeout(state.timeout);
      state.message = "";
    },
  },
});

const notificationActions = notificationSlice.actions;
const notificationReducer = notificationSlice.reducer;

export default notificationReducer;
export { notificationActions };
