import { Link } from "react-router-dom";
import useBlog from "../../../hooks/useBlog";
import CONSTS from "../../../utils/config.util";

const BlogListDisplay = () => {
  const { blogs } = useBlog();

  if (!blogs.length) {
    return (
      <div className="text-center text-gray-500 mt-6">
        <p>No Blogs to display</p>
      </div>
    );
  }

  const sortedBlogs = [...blogs].sort((a, b) => b.likes - a.likes);
  const baseUrl = CONSTS.clientUrls.blogs;

  return (
    <div className="space-y-4 mt-6">
      {sortedBlogs.map((blog) => (
        <div
          key={blog.id}
          className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
        >
          <Link
            to={`${baseUrl}/${blog.id}`}
            className="text-xl font-semibold text-blue-600 hover:text-blue-800"
          >
            {blog.title}
          </Link>
          <p className="text-sm text-gray-600 mt-1">Likes: {blog.likes}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogListDisplay;
