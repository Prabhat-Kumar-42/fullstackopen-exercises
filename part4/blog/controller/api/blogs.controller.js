const Blog = require("../../models/blog.model.js");

const handleGetAllBlogs = (request, response) => {
  Blog.find({}).then((blogs) => {
    return response.json(blogs);
  });
};

const handleCreateBlog = (request, response) => {
  const blog = new Blog(request.body);
  blog.save().then((result) => {
    return response.status(201).json(result);
  });
};

module.exports = {
  handleGetAllBlogs,
  handleCreateBlog,
};
