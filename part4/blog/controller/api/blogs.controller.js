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

const handleCreateBlog = (request, response) => {
  const blog = new Blog(request.body);
  blog.save().then((result) => {
    return response.status(201).json(result);
  });
};

module.exports = {
  handleGetAllBlogs,
  handleCreateBlog,
  handleGetBlog,
};
