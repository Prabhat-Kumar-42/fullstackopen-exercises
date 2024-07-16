const _ = require("lodash");

const mostBlogs = (blogs) => {
  if (blogs.length === 0) return;
  const authorCounts = _.countBy(blogs, "author");
  const topAuthor = _.maxBy(Object.entries(authorCounts), ([, count]) => count);
  return {
    author: topAuthor[0],
    blogs: topAuthor[1],
  };
};

module.exports = mostBlogs;
