const Blog = require("../../models/blog.model.js");
const User = require("../../models/user.model.js");
const throwError = require("../../utils/throwError.js");

const handleGetAllBlogs = async (request, response) => {
  const blogs = await Blog.find({}).populate("author");
  return response.json(blogs);
};

const handleCreateBlog = async (request, response) => {
  const blogData = request.body;
  if (!blogData.title || !blogData.url) {
    throwError(400, "title and url are required fields");
  }
  const authorId = request.user.id;
  const author = await User.findById(authorId);
  if (!author) throwError(404, "user not found");
  blogData.author = author.id;
  let blog = await Blog.create(blogData);
  author.blogs.push(blog.id);
  await author.save();
  blog = await Blog.populate(blog, { path: "author" });
  return response.status(201).json(blog);
};

const handleGetBlog = async (request, response) => {
  const id = request.params.id;
  const blog = await Blog.findById(id).populate("author");
  if (!blog) throwError(404, "Not Found");
  return response.status(200).json(blog);
};

const handleDeleteBlog = async (request, response) => {
  const id = request.params.id;
  if (!id) throwError(404, "Not Found");
  const user = request.user;
  const author = await User.findById(user.id);
  if (!author) throwError(404, "User not found");
  const blog = await Blog.findById(id).populate("author");
  if (!blog) return response.status(204).end();
  if (blog.author.id.toString() !== user.id) throwError(403, "Forbidden");
  await Blog.deleteOne({ _id: id });
  author.blogs = author.blogs.filter(
    (userBlogId) => userBlogId.toString() !== id,
  );
  await author.save();
  return response.status(200).json({ message: "Blog deleted successfully" });
};

const handleUpdateBlog = async (request, response) => {
  const id = request.params.id;
  if (!id) throwError(404, "Not Found");
  const user = request.user;
  const { title, url, likes, comment } = request.body;
  const updates = {};
  if (likes) updates.likes = likes;
  if (url || title) {
    if (blog.author.toString() !== user.id) throwError(403, "Forbidden");
    if (url) updates.url = url;
    if (title) updates.title = title;
  }
  const blog = await Blog.findById(id);
  if (!blog) throwError(404, "Not Found");
  if (Object.keys(updates).length) blog.set(updates);
  if (comment) blog.comments.push(comment);
  await blog.save();
  await blog.populate("author");
  return response.status(200).json(blog);
};

module.exports = {
  handleGetAllBlogs,
  handleCreateBlog,
  handleGetBlog,
  handleDeleteBlog,
  handleUpdateBlog,
};
