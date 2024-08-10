import { createSlice } from "@reduxjs/toolkit";
import userAsyncThunks from "./userAsyncThunk";
import CONSTS from "../../utils/config.util";

const initialState = {
  user: null,
  authKey: null,
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
});

const userReducer = userSlice.reducer;
const userAction = userSlice.actions;

export { userAction };
export default userReducer;
