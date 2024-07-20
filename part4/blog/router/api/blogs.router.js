const express = require("express");
const blogRouter = express.Router();
const {
  handleGetAllBlogs,
  handleCreateBlog,
  handleGetBlog,
  handleDeleteBlog,
  handleUpdateBlog,
} = require("../../controller/api/blogs.controller");

blogRouter.route("/").get(handleGetAllBlogs).post(handleCreateBlog);

blogRouter
  .route("/:id")
  .get(handleGetBlog)
  .delete(handleDeleteBlog)
  .put(handleUpdateBlog);

module.exports = blogRouter;
