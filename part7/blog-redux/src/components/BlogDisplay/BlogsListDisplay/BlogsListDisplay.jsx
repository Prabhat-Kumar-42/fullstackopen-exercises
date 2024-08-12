import { Link } from "react-router-dom";
import useBlog from "../../../hooks/useBlog";
import CONSTS from "../../../utils/config.util";
import "./blogStyle.css";
const BlogListDisplay = () => {
  const { blogs } = useBlog();
  if (!blogs.length) return <div>No Blogs to display</div>;
  const sortedBlogs = [...blogs].sort((a, b) => b.likes - a.likes);
  const baseUrl = CONSTS.clientUrls.blogs;
  return (
    <div>
      {sortedBlogs.map((blog) => (
        <div className="blogStyle" key={blog.id}>
          <Link to={`${baseUrl}/${blog.id}`}>{blog.title}</Link>
        </div>
      ))}
    </div>
  );
};

export default BlogListDisplay;
