import BlogCommentForm from "../CommentForm/BlogCommentForm";

const BlogCommentDisplay = ({ blog }) => {
  const baseKey = `comment-${blog.id}-`;
  const noComment = blog.comments.length === 0;

  return (
    <div className="p-6 mt-16 bg-white rounded-lg ">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">Comments</h3>
      <BlogCommentForm blog={blog} />
      {noComment && (
        <span className="block text-gray-500 mt-4">
          Be the first to comment!
        </span>
      )}
      <ul className="mt-4 space-y-2">
        {blog.comments.map((comment, index) => (
          <li
            key={baseKey + index}
            className="p-4 bg-gray-100 rounded-lg shadow-sm"
          >
            {comment}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogCommentDisplay;
