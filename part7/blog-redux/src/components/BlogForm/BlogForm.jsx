import useField from "../../hooks/useField";
import Button from "../Button/Button";
import InputField from "../InputField/InputField";

const BlogForm = () => {
  const title = useField("title", "text");
  const url = useField("url", "text");

  const handlePostBlog = () => {};
  const resetBlogForm = () => {
    title.clearField();
    url.clearField();
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
