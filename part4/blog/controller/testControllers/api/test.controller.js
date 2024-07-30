const Blog = require("../../../models/blog.model");
const User = require("../../../models/user.model");

const handleReset = async (req, res) => {
  await Blog.deleteMany({});
  await User.deleteMany({});
  return res.status(204).end();
};

module.exports = { handleReset };
