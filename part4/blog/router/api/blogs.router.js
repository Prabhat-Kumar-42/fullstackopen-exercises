const express = require("express");
const blogRouter = express.Router();
const {
  handleGetAllBlogs,
  handleCreateBlog,
  handleGetBlog,
  handleDeleteBlog,
  handleUpdateBlog,
} = require("../../controller/api/blogs.controller");
const { userExtractor } = require("../../middlewares/userExtractor.middleware");
const {
  tokenExtractor,
} = require("../../middlewares/tokenExtractor.middleware");

blogRouter
  .route("/")
  .get(handleGetAllBlogs)
  .post(tokenExtractor, userExtractor, handleCreateBlog);

blogRouter
  .route("/:id")
  .get(handleGetBlog)
  .delete(tokenExtractor, userExtractor, handleDeleteBlog)
  .put(tokenExtractor, userExtractor, handleUpdateBlog);

module.exports = blogRouter;
