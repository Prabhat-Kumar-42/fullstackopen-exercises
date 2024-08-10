import { createAsyncThunk } from "@reduxjs/toolkit";
import { notificationActions } from "./notificationSlice";

const notificationTimeToLive = 5000;

const notifySuccess = createAsyncThunk(
  "notification/notifySuccess",
  (message, { dispatch }) => {
    const timeout = setTimeout(
      () => dispatch(notificationActions.clearSuccessNotification()),
      notificationTimeToLive,
    );
    const payload = {
      message,
      timeout,
    };
    dispatch(notificationActions.setSuccessNotification(payload));
  },
);

const notifyError = createAsyncThunk(
  "notification/notifyError",
  (message, { dispatch }) => {
    const timeout = setTimeout(
      () => dispatch(notificationActions.clearErrorNotification()),
      notificationTimeToLive,
    );
    const payload = {
      message,
      timeout,
    };
    dispatch(notificationActions.setErrorNotification(payload));
  },
);

const notificationThunks = {
  notifySuccess,
  notifyError,
};

export default notificationThunks;
