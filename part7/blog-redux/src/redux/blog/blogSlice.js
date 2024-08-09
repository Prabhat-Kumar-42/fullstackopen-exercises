import { createSlice } from "@reduxjs/toolkit";
import blogAsyncThunks from "./blogAsyncThunks";
import CONSTS from "../../utils/config.util";

const LOADING = CONSTS.asyncThunkStatus.LOADING;
const SUCCEEDED = CONSTS.asyncThunkStatus.SUCCEEDED;
const FAILED = CONSTS.asyncThunkStatus.FAILED;

const initialState = {
  blogs: [],
  status: null,
  error: null,
};

const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    setBlogs: (state, actions) => {
      state = actions.payload;
    },
    appendBlog: (state, action) => {
      state.push(action.payload);
    },
    deleteBlog: (state, action) => {
      const blogToBeFiltered = action.payload;
      const updatedBlogs = state.filter(
        (blog) => blog.id !== blogToBeFiltered.id,
      );
      state = updatedBlogs;
    },
    updateBlog: (state, action) => {
      const blogToBeUpdated = action.payload;
      const updatedBlogs = state.map((blog) =>
        blog.id !== blogToBeUpdated.id ? blog : blogToBeUpdated,
      );
      state = updatedBlogs;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(blogAsyncThunks.getAllBlogs.pending, (state) => {
        state.status = LOADING;
      })
      .addCase(blogAsyncThunks.getAllBlogs.fulfilled, (state) => {
        state.status = SUCCEEDED;
      })
      .addCase(blogAsyncThunks.getAllBlogs.rejected, (state, payload) => {
        state.status = FAILED;
        state.error = payload;
      })

      .addCase()
      .addCase()
      .addCase()
      .addCase()
      .addCase()
      .addCase();
  },
});

const blogReducer = blogSlice.reducer;
const blogActions = blogSlice.actions;

export default blogReducer;
export { blogActions };
