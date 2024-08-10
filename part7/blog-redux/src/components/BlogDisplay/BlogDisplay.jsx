import useBlog from "../../hooks/useBlog";
import BlogForm from "../BlogForm/BlogForm";
import Toggleable from "../Toggleable/Toggleable";

const BlogDisplay = () => {
  const { blogs } = useBlog();
  const formDisplayText = "create new blog";
  const formHideText = "cancle";

  return (
    <Toggleable toDisplayTitle={formDisplayText} toHideTitle={formHideText}>
      <BlogForm />
    </Toggleable>
  );
};

export default BlogDisplay;
