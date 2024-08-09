import { createAsyncThunk } from "@reduxjs/toolkit";
import userServices from "../../utils/loginSignUp.util";

const signup = createAsyncThunk(
  "user/signup",
  async ({ name, username, password }, { rejectWithValue }) => {
    try {
      await userServices.signup(username, name, password);
    } catch (err) {
      return rejectWithValue(err.response?.data?.error || "Signup failed");
    }
  },
);

const login = createAsyncThunk(
  "user/login",
  async ({ username, password }, { rejectWithValue }) => {
    try {
      const responseData = await userServices.login(username, password);
      localStorage.setItem("authToken", responseData.user.authToken);
      return responseData;
    } catch (err) {
      return rejectWithValue(err.response?.data?.error || "Login failed");
    }
  },
);

const logout = createAsyncThunk("user/logout", (state, action) => {
  localStorage.removeItem("authToken");
  return null;
});

const userAsyncThunks = {
  signup,
  login,
  logout,
};

export default userAsyncThunks;
