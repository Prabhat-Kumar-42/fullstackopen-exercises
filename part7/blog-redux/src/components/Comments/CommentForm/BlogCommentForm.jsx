import { useDispatch } from "react-redux";
import useField from "../../../hooks/useField";
import Button from "../../Button/Button";
import InputField from "../../InputField/InputField";
import blogAsyncThunks from "../../../redux/blog/blogAsyncThunks";

const BlogCommentForm = ({ blog }) => {
  const dispatch = useDispatch();

  const handleCommentBlog = (event) => {
    event.preventDefault();
    const payload = {
      comment: commentField.value,
    };
    dispatch(blogAsyncThunks.updateBlog({ blog, payload }));
    commentField.clearField();
  };
  const commentField = useField("comment", "text");
  return (
    <form onSubmit={handleCommentBlog}>
      <InputField props={commentField} />
      <Button type={"submit"} text={"add comment"} />
    </form>
  );
};

export default BlogCommentForm;
