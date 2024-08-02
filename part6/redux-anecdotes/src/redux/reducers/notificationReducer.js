import { createSlice } from "@reduxjs/toolkit";

const notificationSlice = createSlice({
  name: "notification",
  initialState: { message: "", timeoutId: null },
  reducers: {
    setNotification: (state, action) => {
      if (state.timeoutId) clearTimeout(state.timeoutId);
      state.message = action.payload.message;
      state.timeoutId = action.payload.timeoutId;
    },
    clearNotification: (state, action) => {
      if (state.timeoutId) clearTimeout(state.timeoutId);
      state.message = "";
      state.timeoutId = null;
    },
  },
});

export const { setNotification, clearNotification } = notificationSlice.actions;
export default notificationSlice.reducer;
