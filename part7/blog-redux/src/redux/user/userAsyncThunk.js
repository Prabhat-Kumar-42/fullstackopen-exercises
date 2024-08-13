import { createAsyncThunk } from "@reduxjs/toolkit";
import userServices from "../../utils/loginSignUp.util";
import { userAction } from "./userSlice";
import notificationThunks from "../notifications/notificationThunks";
import { toggleablesActions } from "../toggleableComponents/toggleablesSlice";

const signup = createAsyncThunk(
  "user/signup",
  async ({ name, username, password }, { dispatch }) => {
    try {
      await userServices.signup(username, name, password);
      const successMessage = "Sign Up Successfull !!";
      dispatch(notificationThunks.notifySuccess(successMessage));
    } catch (err) {
      const errorMessage = err.response?.data?.error || "Signup failed";
      dispatch(notificationThunks.notifyError(errorMessage));
    }
  },
);

const login = createAsyncThunk(
  "user/login",
  async ({ username, password }, { dispatch }) => {
    try {
      const responseData = await userServices.login(username, password);
      localStorage.setItem("authToken", responseData.user.authToken);
      localStorage.setItem("user", JSON.stringify(responseData.user));
      dispatch(userAction.setUser(responseData));
      const successMessage = "Login Successfull !!";
      dispatch(notificationThunks.notifySuccess(successMessage));
    } catch (err) {
      const errorMessage = err.response?.data?.error || "Login Failed";
      dispatch(notificationThunks.notifyError(errorMessage));
    }
  },
);

const logout = createAsyncThunk("user/logout", (_, { dispatch }) => {
  localStorage.removeItem("authToken");
  localStorage.removeItem("user");
  dispatch(userAction.clearUser());
  dispatch(toggleablesActions.reset());
  const successMessage = "See You Soon !! :D";
  dispatch(notificationThunks.notifySuccess(successMessage));
});

const getAllUser = createAsyncThunk("user/getAll", async (_, { dispatch }) => {
  try {
    const userList = await userServices.getAllUser();
    const payload = { userList };
    dispatch(userAction.setUserList(payload));
  } catch (err) {
    const errorMessage = err.response?.data?.error || "Internal Server Error";
    dispatch(notificationThunks.notifyError(errorMessage));
  }
});

const userAsyncThunks = {
  signup,
  login,
  logout,
  getAllUser,
};

export default userAsyncThunks;
