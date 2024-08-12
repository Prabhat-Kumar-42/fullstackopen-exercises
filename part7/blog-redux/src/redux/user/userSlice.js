import { createSlice, current } from "@reduxjs/toolkit";
import blogAsyncThunks from "../blog/blogAsyncThunks";

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
  extraReducers: (builder) => {
    builder
      .addCase(blogAsyncThunks.createBlog.fulfilled, (state, action) => {
        const { newBlog } = action.payload;
        state.user.blogs.push(newBlog);
        const updatedUserList = state.userList.map((user) => {
          if (user.id === state.user.id) user.blogs.push(newBlog);
          return user;
        });
        state.userList = updatedUserList;
      })
      .addCase(blogAsyncThunks.updateBlog.fulfilled, (state, action) => {
        const { updatedBlog } = action.payload;
        const updatedBlogList = state.user.blogs.map((blog) =>
          blog.id !== updatedBlog.id ? blog : updatedBlog,
        );
        const updatedUserList = state.userList.map((user) => {
          if (user.id === state.user.id) user.blogs = updatedBlogList;
          return user;
        });

        state.user.blogs = updatedBlogList;
        state.userList = updatedUserList;
      })
      .addCase(blogAsyncThunks.deleteBlog.fulfilled, (state, action) => {
        const { deletedBlog } = action.payload;
        const updatedBlogList = state.user.blogs.filter(
          (blog) => blog.id !== deletedBlog.id,
        );
        const updatedUserList = state.userList.map((user) => {
          if (user.id === state.user.id) user.blogs = updatedBlogList;
          return user;
        });
        state.user.blogs = updatedBlogList;
        state.userList = updatedUserList;
      });
  },
});

const userReducer = userSlice.reducer;
const userAction = userSlice.actions;

export { userAction };
export default userReducer;
