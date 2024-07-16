const express = require("express");
const blogRouter = express.Router();
const {
  handleGetAllBlogs,
  handleCreateBlog,
} = require("../../controller/api/blogs.controller");

blogRouter.route("/").get(handleGetAllBlogs).post(handleCreateBlog);

module.exports = blogRouter;
