import { createSlice } from "@reduxjs/toolkit";

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
      state.blogs = actions.payload;
    },
    appendBlog: (state, action) => {
      const { newBlog } = action.payload;
      state.blogs.push(newBlog);
    },
    deleteBlog: (state, action) => {
      const { deletedBlog } = action.payload;
      const updatedBlogs = state.blogs.filter(
        (blog) => blog.id !== deletedBlog.id,
      );
      state.blogs = updatedBlogs;
    },
    updateBlog: (state, action) => {
      const { updatedBlog } = action.payload;
      const updatedBlogsList = state.blogs.map((blog) =>
        blog.id !== updatedBlog.id ? blog : updatedBlog,
      );
      state.blogs = updatedBlogsList;
    },
    clearBlogs: (state, action) => {
      return initialState;
    },
  },
});

const blogReducer = blogSlice.reducer;
const blogActions = blogSlice.actions;

export default blogReducer;
export { blogActions };
