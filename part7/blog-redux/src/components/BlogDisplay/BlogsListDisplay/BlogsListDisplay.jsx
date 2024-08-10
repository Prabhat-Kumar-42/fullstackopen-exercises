import useBlog from "../../../hooks/useBlog";
import SpecificBlogDisplay from "../SpecificBlogDisplay/SpecificBlogDisplay";

const BlogListDisplay = () => {
  const { blogs } = useBlog();
  const sortedBlogs = [...blogs].sort((a, b) => b.likes - a.likes);

  return (
    <div>
      {sortedBlogs.map((blog) => (
        <SpecificBlogDisplay blog={blog} key={blog.id} />
      ))}
    </div>
  );
};

export default BlogListDisplay;
