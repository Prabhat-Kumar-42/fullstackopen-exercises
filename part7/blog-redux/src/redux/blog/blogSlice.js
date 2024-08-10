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
      state.blogs.push(action.payload);
    },
    deleteBlog: (state, action) => {
      const blogToBeFiltered = action.payload;
      const updatedBlogs = state.blogs.filter(
        (blog) => blog.id !== blogToBeFiltered.id,
      );
      state.blogs = updatedBlogs;
    },
    updateBlog: (state, action) => {
      const blogToBeUpdated = action.payload;
      const updatedBlogs = state.blogs.map((blog) =>
        blog.id !== blogToBeUpdated.id ? blog : blogToBeUpdated,
      );
      state.blogs = updatedBlogs;
    },
  },
});

const blogReducer = blogSlice.reducer;
const blogActions = blogSlice.actions;

export default blogReducer;
export { blogActions };
