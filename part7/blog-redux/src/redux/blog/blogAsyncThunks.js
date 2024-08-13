import { createAsyncThunk } from "@reduxjs/toolkit";
import { blogActions } from "./blogSlice";
import blogService from "../../utils/serverServices/blogServices.util";
import notificationThunks from "../notifications/notificationThunks";

const createBlog = createAsyncThunk(
  "blog/create",
  async ({ title, url }, { dispatch }) => {
    const payload = { title, url };
    try {
      const newBlog = await blogService.createBlog(payload);
      dispatch(blogActions.appendBlog({ newBlog }));
      const successMessage = `Created Blog: ${title}`;
      dispatch(notificationThunks.notifySuccess(successMessage));
      return { newBlog };
    } catch (err) {
      const errorMessage = err.response?.data?.error || "Internal Server Error";
      dispatch(notificationThunks.notifyError(errorMessage));
    }
  },
);

const updateBlog = createAsyncThunk(
  "blog/update",
  async ({ blog, payload }, { dispatch }) => {
    try {
      const updatedBlog = await blogService.updateBlog(blog, payload);
      dispatch(blogActions.updateBlog({ updatedBlog }));
      return { updatedBlog };
    } catch (err) {
      const errorMessage = err.response?.data?.error || "Internal Server Error";
      dispatch(notificationThunks.notifyError(errorMessage));
    }
  },
);

const deleteBlog = createAsyncThunk(
  "blog/delete",
  async (blog, { dispatch }) => {
    try {
      await blogService.deleteBlog(blog);
      dispatch(blogActions.deleteBlog({ deletedBlog: blog }));
      const successMessage = `Deleted Blog: ${blog.title}`;
      dispatch(notificationThunks.notifySuccess(successMessage));
      return { deletedBlog: blog };
    } catch (err) {
      const errorMessage = err.response?.data?.error || "Internal Server Error";
      dispatch(notificationThunks.notifyError(errorMessage));
    }
  },
);

const getAllBlogs = createAsyncThunk("blog/getAll", async (_, { dispatch }) => {
  try {
    const blogs = await blogService.getAllBlogs();
    dispatch(blogActions.setBlogs(blogs));
  } catch (err) {
    const errorMessage = err.response?.data?.error || "Internal Server Error";
    dispatch(notificationThunks.notifyError(errorMessage));
  }
});

const blogAsyncThunks = {
  createBlog,
  updateBlog,
  deleteBlog,
  getAllBlogs,
};

export default blogAsyncThunks;
