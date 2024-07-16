const _ = require("lodash");

const mostLikes = (blogs) => {
  if (blogs.length === 0) return;
  const authorLikes = _.reduce(
    blogs,
    (acc, blog) => {
      acc[blog.author] = (acc[blog.author] || 0) + blog.likes;
      return acc;
    },
    {},
  );
  const topAuthor = _.maxBy(Object.entries(authorLikes), ([, likes]) => likes);
  return {
    author: topAuthor[0],
    likes: topAuthor[1],
  };
};

module.exports = mostLikes;
