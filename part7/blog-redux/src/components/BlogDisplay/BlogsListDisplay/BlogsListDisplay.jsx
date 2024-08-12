import { Link } from "react-router-dom";
import useBlog from "../../../hooks/useBlog";
import CONSTS from "../../../utils/config.util";
import "./blogStyle.css";
const BlogListDisplay = () => {
  const { blogs } = useBlog();
  const sortedBlogs = [...blogs].sort((a, b) => b.likes - a.likes);
  const baseUrl = CONSTS.clientUrls.blogs;
  return (
    <div className="blogStyle">
      {sortedBlogs.map((blog) => (
        <div key={blog.id}>
          <Link to={`${baseUrl}/${blog.id}`}>{blog.title}</Link>
        </div>
      ))}
    </div>
  );
};

export default BlogListDisplay;
