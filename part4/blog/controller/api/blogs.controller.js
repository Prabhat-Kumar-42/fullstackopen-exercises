const Blog = require("../../models/blog.model.js");

const handleGetAllBlogs = (request, response) => {
  Blog.find({}).then((blogs) => {
    return response.json(blogs);
  });
};

const handleGetBlog = async (request, response) => {
  const id = request.params.id;
  const blog = await Blog.findById(id);
  return response.status(200).json(blog);
};

const handleCreateBlog = async (request, response) => {
  const blogData = request.body;
  if (!blogData.title || !blogData.url) {
    return response.status(400).end();
  }
  const blog = await Blog.create(blogData);
  return response.status(201).json(blog);
};

module.exports = {
  handleGetAllBlogs,
  handleCreateBlog,
  handleGetBlog,
};
