const Blog = require("../../models/blog.model.js");

const handleGetAllBlogs = async (request, response) => {
  const blogs = await Blog.find({});
  return response.json(blogs);
};

const handleCreateBlog = async (request, response) => {
  const blogData = request.body;
  if (!blogData.title || !blogData.url) {
    return response.status(400).end();
  }
  const blog = await Blog.create(blogData);
  return response.status(201).json(blog);
};

const handleGetBlog = async (request, response) => {
  const id = request.params.id;
  const blog = await Blog.findById(id);
  if (!blog) response.status(404).end();
  return response.status(200).json(blog);
};

const handleDeleteBlog = async (request, response) => {
  const id = request.params.id;
  const blog = await Blog.findByIdAndDelete(id);
  return response.status(200).json(blog);
};

const handleUpdateBlog = async (request, response) => {
  const id = request.params.id;
  if (!id) response.status(400).end();
  const updateData = response.body();
  const blog = await Blog.findByIdAndUpdate(id, updateData);
  return response.status(200).json(blog);
};

module.exports = {
  handleGetAllBlogs,
  handleCreateBlog,
  handleGetBlog,
  handleDeleteBlog,
  handleUpdateBlog,
};
