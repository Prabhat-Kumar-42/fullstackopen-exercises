import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  userList: [],
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
    setUserList: (state, action) => {
      state.userList = action.payload.userList;
    },
  },
});

const userReducer = userSlice.reducer;
const userAction = userSlice.actions;

export { userAction };
export default userReducer;
