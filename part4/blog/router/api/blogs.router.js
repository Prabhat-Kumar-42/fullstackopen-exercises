const express = require("express");
const blogRouter = express.Router();
const {
  handleGetAllBlogs,
  handleCreateBlog,
  handleGetBlog,
} = require("../../controller/api/blogs.controller");

blogRouter.route("/").get(handleGetAllBlogs).post(handleCreateBlog);
blogRouter.route("/:id").get(handleGetBlog);
module.exports = blogRouter;
