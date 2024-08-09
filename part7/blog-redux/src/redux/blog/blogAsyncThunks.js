import { createAsyncThunk } from "@reduxjs/toolkit";
import useResources from "../../hooks/useResources";
import CONSTS from "../../utils/config.util";
import { blogActions } from "./blogSlice";

const baseUrl = CONSTS.serverUrls.blog.baseUrl;

const createBlog = createAsyncThunk(
  "blog/create",
  async ({ title, url }, { dispatch, rejectWithValue }) => {
    const { create } = useResources(baseUrl);
    const payload = {
      title,
      url,
    };
    try {
      const responseData = await create(payload);
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
  async (blog, { dispatch, rejectWithValue }) => {
    try {
      const { update } = useResources(baseUrl);
      const responseData = await update(blog);
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
      const { remove } = useResources(baseUrl);
      await remove(blog);
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
  async (filler, { dispatch, rejectWithValue }) => {
    try {
      const { resources } = useResources(baseUrl);
      dispatch(blogActions.setBlogs(resources));
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
