import BlogCommentForm from "../CommentForm/BlogCommentForm";

const BlogCommentDisplay = ({ blog }) => {
  const baseKey = `comment-${blog.id}-`;
  const noComment = blog.comments.length === 0;
  return (
    <div>
      <h3>Comments</h3>
      <BlogCommentForm blog={blog} />
      {noComment && <span>Be The First To Comment !!</span>}
      <ul>
        {blog.comments.map((comment, index) => (
          <li key={baseKey + index}>{comment}</li>
        ))}
      </ul>
    </div>
  );
};

export default BlogCommentDisplay;
