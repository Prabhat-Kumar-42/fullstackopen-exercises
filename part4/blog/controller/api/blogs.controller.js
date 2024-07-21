const Blog = require("../../models/blog.model.js");
const throwError = require("../../utils/throwError.js");

const handleGetAllBlogs = async (request, response) => {
  const blogs = await Blog.find({});
  return response.json(blogs);
};

const handleCreateBlog = async (request, response) => {
  const blogData = request.body;
  if (!blogData.title || !blogData.url) {
    throwError(400, "title and url are required fields");
  }
  const blog = await Blog.create(blogData);
  return response.status(201).json(blog);
};

const handleGetBlog = async (request, response) => {
  const id = request.params.id;
  const blog = await Blog.findById(id);
  if (!blog) throwError(404, "Not Found");
  return response.status(200).json(blog);
};

const handleDeleteBlog = async (request, response) => {
  const id = request.params.id;
  const blog = await Blog.findByIdAndDelete(id);
  if (!blog) return response.status(204).end();
  return response.status(200).json(blog);
};

const handleUpdateBlog = async (request, response) => {
  const id = request.params.id;
  if (!id) throwError(404, "Not Found");
  const updateData = request.body;
  const blog = await Blog.findByIdAndUpdate(id, updateData, {
    new: true,
    runValidators: true,
  });
  if (!blog) throwError(404, "Not Found");
  return response.status(200).json(blog);
};

module.exports = {
  handleGetAllBlogs,
  handleCreateBlog,
  handleGetBlog,
  handleDeleteBlog,
  handleUpdateBlog,
};
