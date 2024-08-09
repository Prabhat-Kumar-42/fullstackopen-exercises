import { createSlice } from "@reduxjs/toolkit";
import userAsyncThunks from "./user/userAsyncThunk";
import CONSTS from "../utils/config.util";

const initialState = {
  user: null,
  authKey: null,
  status: null,
  errorMessage: null,
  successMessage: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    clearUser: () => {
      return null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(userAsyncThunks.login.pending, (state) => {
        state.status = CONSTS.asyncThunkStatus.LOADING;
        state.error = null;
      })
      .addCase(userAsyncThunks.login.fulfilled, (state, action) => {
        state.status = CONSTS.asyncThunkStatus.SUCCEEDED;
        state.user = action.payload.user;
        state.authKey = action.payload.authToken;
        state.error = null;
      })
      .addCase(userAsyncThunks.login.rejected, (state, action) => {
        state.status = CONSTS.asyncThunkStatus.FAILED;
        state.error = action.payload;
      })
      .addCase(userAsyncThunks.signup.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(userAsyncThunks.signup.fulfilled, (state) => {
        state.status = "succeeded";
        state.error = null;
      })
      .addCase(userAsyncThunks.signup.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export default userSlice.reducer;
export const { setUser, clearUser } = userSlice.actions;
