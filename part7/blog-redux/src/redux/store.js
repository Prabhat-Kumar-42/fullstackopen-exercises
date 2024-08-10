import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/userSlice";
import blogReducer from "./blog/blogSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    blogs: blogReducer,
  },
});

export default store;
