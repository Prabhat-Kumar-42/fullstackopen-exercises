import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  successMessage: "",
  successTimeout: null,

  errorMessage: "",
  errorTimeout: null,
};

const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    setSuccessNotification: (state, action) => {
      if (state.successTimeout) clearTimeout(state.successTimeout);
      state.successMessage = action.payload.message;
      state.successTimeout = action.payload.timeout;
    },
    clearSuccessNotification: (state) => {
      if (state.successTimeout) clearTimeout(state.successTimeout);
      state.successMessage = "";
    },
    setErrorNotification: (state, action) => {
      if (state.errorTimeout) clearTimeout(state.errorTimeout);
      state.errorMessage = action.payload.message;
      state.errorTimeout = action.payload.timeout;
    },
    clearErrorNotification: (state) => {
      if (state.errorTimeout) clearTimeout(state.errorTimeout);
      state.errorMessage = "";
    },
  },
});

const notificationActions = notificationSlice.actions;
const notificationReducer = notificationSlice.reducer;

export default notificationReducer;
export { notificationActions };
