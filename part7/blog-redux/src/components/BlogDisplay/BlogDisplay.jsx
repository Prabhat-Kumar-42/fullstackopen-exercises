import BlogForm from "../BlogForm/BlogForm";
import Toggleable from "../Toggleable/Toggleable";
import BlogListDisplay from "./BlogsListDisplay/BlogsListDisplay";

const BlogDisplay = () => {
  const formDisplayText = "create new blog";
  const formHideText = "cancle";
  const blogFromToggleRef = "blogFormToggle";
  const defaultToggleValue = "false";
  return (
    <div>
      <Toggleable
        toDisplayTitle={formDisplayText}
        toHideTitle={formHideText}
        toggleRef={blogFromToggleRef}
        defaultToggleValue={defaultToggleValue}
      >
        <BlogForm />
      </Toggleable>
      <BlogListDisplay />
    </div>
  );
};

export default BlogDisplay;
