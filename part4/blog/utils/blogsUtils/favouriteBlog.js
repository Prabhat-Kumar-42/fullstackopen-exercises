const favouriteBlog = (blogs) => {
  if (blogs.length === 0) return;
  const res = blogs.reduce((previous, current) => {
    return current.likes > previous.likes ? current : previous;
  }, blogs[0]);
  return {
    title: res.title,
    author: res.author,
    likes: res.likes,
  };
};

module.exports = favouriteBlog;
