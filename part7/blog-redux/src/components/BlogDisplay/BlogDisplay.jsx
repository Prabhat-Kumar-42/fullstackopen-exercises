import BlogForm from "../BlogForm/BlogForm";
import Toggleable from "../Toggleable/Toggleable";
import BlogListDisplay from "./BlogsListDisplay/BlogsListDisplay";

const BlogDisplay = () => {
  const formDisplayText = "Create New Blog";
  const formHideText = "Cancel";
  const blogFormToggleRef = "blogFormToggle";
  const defaultToggleValue = false;

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto p-6 rounded-lg relative">
        <Toggleable
          toDisplayTitle={formDisplayText}
          toHideTitle={formHideText}
          toggleRef={blogFormToggleRef}
          defaultToggleValue={defaultToggleValue}
        >
          <BlogForm toggleRef={blogFormToggleRef} />
        </Toggleable>
      </div>
      <div className="max-w-4xl mx-auto mt-6">
        <BlogListDisplay />
      </div>
    </div>
  );
};

export default BlogDisplay;
