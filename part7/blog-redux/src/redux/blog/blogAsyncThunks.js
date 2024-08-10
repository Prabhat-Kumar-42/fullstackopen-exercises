import { createAsyncThunk } from "@reduxjs/toolkit";
import { blogActions } from "./blogSlice";
import blogService from "../../utils/serverServices/blogServices.util";

const createBlog = createAsyncThunk(
  "blog/create",
  async ({ title, url }, { dispatch, rejectWithValue }) => {
    const payload = { title, url };
    try {
      const responseData = await blogService.createBlog(payload);
      dispatch(blogActions.appendBlog(responseData));
    } catch (err) {
      return rejectWithValue(
        err.response?.data?.error || "Blog Creation Failed",
      );
    }
  },
);

const updateBlog = createAsyncThunk(
  "blog/update",
  async ({ blog, payload }, { dispatch, rejectWithValue }) => {
    try {
      const responseData = await blogService.updateBlog(blog, payload);
      dispatch(blogActions.updateBlog(responseData));
    } catch (err) {
      return rejectWithValue(
        err.response?.data?.error || "Blog Updation Failed",
      );
    }
  },
);

const deleteBlog = createAsyncThunk(
  "blog/delete",
  async (blog, { dispatch, rejectWithValue }) => {
    try {
      await blogService.deleteBlog(blog);
      dispatch(blogActions.deleteBlog(blog));
    } catch (err) {
      return rejectWithValue(
        err.response?.data?.error || "Blog Deletion Failed",
      );
    }
  },
);

const getAllBlogs = createAsyncThunk(
  "blog/getAll",
  async (_, { dispatch, rejectWithValue }) => {
    try {
      const blogs = await blogService.getAllBlogs();
      dispatch(blogActions.setBlogs(blogs));
    } catch (err) {
      return rejectWithValue(err.response?.data?.error || "Blog Fetch Failed");
    }
  },
);

const blogAsyncThunks = {
  createBlog,
  updateBlog,
  deleteBlog,
  getAllBlogs,
};

export default blogAsyncThunks;
