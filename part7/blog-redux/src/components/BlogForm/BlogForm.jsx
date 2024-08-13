import { useDispatch } from "react-redux";
import useField from "../../hooks/useField";
import Button from "../Button/Button";
import InputField from "../InputField/InputField";
import blogAsyncThunks from "../../redux/blog/blogAsyncThunks";
import useToggleables from "../../hooks/useToggleables";

const BlogForm = ({ toggleRef }) => {
  const title = useField("title", "text");
  const url = useField("url", "text");
  const dispatch = useDispatch();
  const { hideToggable } = useToggleables();

  const resetBlogForm = () => {
    title.clearField();
    url.clearField();
  };

  const handlePostBlog = (event) => {
    event.preventDefault();
    const blogInfo = {
      title: title.value,
      url: url.value,
    };
    dispatch(blogAsyncThunks.createBlog(blogInfo));
    resetBlogForm();
    hideToggable(toggleRef);
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Create Blog</h2>
      <form onSubmit={handlePostBlog} className="space-y-4">
        <InputField
          props={title}
          className="w-full"
          placeholder="Enter blog title"
        />
        <InputField
          props={url}
          className="w-full"
          placeholder="Enter blog URL"
        />
        <div className="flex gap-4">
          <Button
            type="submit"
            text="Submit"
            className="flex-1 bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-lg py-2"
          />
          <Button
            type="reset"
            text="Reset"
            onClick={resetBlogForm}
            className="flex-1 bg-gray-500 text-white hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-300 rounded-lg py-2"
          />
        </div>
      </form>
    </div>
  );
};

export default BlogForm;
