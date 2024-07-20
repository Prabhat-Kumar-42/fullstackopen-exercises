const Blog = require("../../../models/blog.model");
const { blogs: mockBlogsList } = require("../blogSampleData");

const nonExistingId = async () => {
  const newBlog = new Blog(mockBlogsList[0]);
  newBlog.save();
  await newBlog.deleteOne();
  return newBlog._id.toString();
};

const dataInDB = async () => {
  const blogs = await Blog.find({});
  return blogs.map((blog) => blog.toJSON());
};

module.exports = {
  mockBlogsList,
  nonExistingId,
  dataInDB,
};
