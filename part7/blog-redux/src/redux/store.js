import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/userSlice";
import blogReducer from "./blog/blogSlice";
import toggleablesReducer from "./toggleableComponents/toggleablesSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    blogs: blogReducer,
    toggleables: toggleablesReducer,
  },
});

export default store;
