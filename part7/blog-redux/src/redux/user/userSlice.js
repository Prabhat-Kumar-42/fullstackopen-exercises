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
    setUser: (state, action) => {
      state.user = action.payload.user;
      state.authKey = action.payload.user.authToken;
      delete action.payload.user.authToken;
      state.error = null;
    },
    clearUser: (state) => {
      return initialState;
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
const userAction = userSlice.actions;

export { userAction };
export default userReducer;
