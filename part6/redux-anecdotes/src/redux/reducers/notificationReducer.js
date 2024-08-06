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

const notify = (message, timeToLive) => {
  return (dispatch) => {
    const timeoutId = setTimeout(
      () => dispatch(clearNotification()),
      timeToLive * 1000,
    );
    const notificationPayload = { message, timeoutId };
    dispatch(clearNotification());
    dispatch(setNotification(notificationPayload));
  };
};

export const { setNotification, clearNotification } = notificationSlice.actions;

export { notify };

export default notificationSlice.reducer;
