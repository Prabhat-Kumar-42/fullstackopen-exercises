import useBlog from "../../../hooks/useBlog";
import SpecificBlogDisplay from "../SpecificBlogDisplay/SpecificBlogDisplay";

const BlogListDisplay = () => {
  const { blogs } = useBlog();
  console.log(blogs);
  return (
    <div>
      {blogs.map((blog) => (
        <SpecificBlogDisplay blog={blog} key={blog.id} />
      ))}
    </div>
  );
};

export default BlogListDisplay;
