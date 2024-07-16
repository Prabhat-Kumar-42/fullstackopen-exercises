const totalLikes = (blogs) => {
  if (blogs.length === 0) {
    return 0;
  }
  const sum = blogs.reduce((accumulator, blog) => {
    return accumulator + blog.likes;
  }, 0);

  return sum;
};

module.exports = totalLikes;
