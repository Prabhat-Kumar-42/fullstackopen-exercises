import { useDispatch } from "react-redux";
import useField from "../../../hooks/useField";
import Button from "../../Button/Button";
import InputField from "../../InputField/InputField";
import blogAsyncThunks from "../../../redux/blog/blogAsyncThunks";

const BlogCommentForm = ({ blog }) => {
  const dispatch = useDispatch();
  const commentField = useField("comment", "text");

  const handleCommentBlog = (event) => {
    event.preventDefault();
    const payload = {
      comment: commentField.value,
    };
    dispatch(blogAsyncThunks.updateBlog({ blog, payload }));
    commentField.clearField();
  };

  return (
    <form onSubmit={handleCommentBlog} className="space-y-4">
      <div className="flex flex-col space-y-2">
        <InputField
          props={commentField}
          className="p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <Button
          type="submit"
          text="Add Comment"
          className="w-full bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-lg py-2"
        />
      </div>
    </form>
  );
};

export default BlogCommentForm;
