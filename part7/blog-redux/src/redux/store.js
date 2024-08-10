import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/userSlice";
import blogReducer from "./blog/blogSlice";
import toggleablesReducer from "./toggleableComponents/toggleablesSlice";
import notificationReducer from "./notifications/notificationSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    blogs: blogReducer,
    notification: notificationReducer,
    toggleables: toggleablesReducer,
  },
});

export default store;
