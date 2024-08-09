import { createSlice } from "@reduxjs/toolkit";
import userAsyncThunks from "./userAsyncThunk";
import CONSTS from "../../utils/config.util";

const initialState = {
  user: null,
  authKey: null,
  error: null,
  status: null,
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
        state.authKey = action.payload.user.authToken;
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

const userReducer = userSlice.reducer;
const { setUser, clearUser } = userSlice.actions;

const userAction = {
  setUser,
  clearUser,
};

export { userAction };
export default userReducer;
