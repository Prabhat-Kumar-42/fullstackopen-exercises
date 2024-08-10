import { useDispatch } from "react-redux";
import useField from "../../hooks/useField";
import Button from "../Button/Button";
import InputField from "../InputField/InputField";
import blogAsyncThunks from "../../redux/blog/blogAsyncThunks";

const BlogForm = () => {
  const title = useField("title", "text");
  const url = useField("url", "text");
  const dispatch = useDispatch();

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
  };

  return (
    <div>
      <h2>Create Blog</h2>
      <form>
        <InputField props={title} />
        <InputField props={url} />
        <Button type="submit" text="submit" onClick={handlePostBlog} />
        <Button type="reset" text="reset" onClick={resetBlogForm} />
      </form>
    </div>
  );
};

export default BlogForm;
