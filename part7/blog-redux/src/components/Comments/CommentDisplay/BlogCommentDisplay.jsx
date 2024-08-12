import BlogCommentForm from "../CommentForm/BlogCommentForm";

const BlogCommentDisplay = ({ blog }) => {
  if (!blog.comments.length) return <div>Be first to comment !!</div>;
  const baseKey = `comment-${blog.id}-`;
  return (
    <div>
      <h3>Comments</h3>
      <BlogCommentForm blog={blog} />
      <ul>
        {blog.comments.map((comment, index) => (
          <li key={baseKey + index}>{comment}</li>
        ))}
      </ul>
    </div>
  );
};

export default BlogCommentDisplay;
