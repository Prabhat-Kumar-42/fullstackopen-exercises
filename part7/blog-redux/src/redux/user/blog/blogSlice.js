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
});

const blogReducer = blogSlice.reducer;
const blogActions = blogSlice.actions;

export default blogReducer;
export { blogActions };
