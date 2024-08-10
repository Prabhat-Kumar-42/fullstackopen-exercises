import { useDispatch } from "react-redux";
import Toggleable from "../../Toggleable/Toggleable";
import "./blogStyle.css";
import blogAsyncThunks from "../../../redux/blog/blogAsyncThunks";
import Button from "../../Button/Button";
import useUser from "../../../hooks/useUser";

const SpecificBlogDisplay = ({ blog }) => {
  const dispatch = useDispatch();
  const userInfo = useUser();

  const handleLikedABlog = () => {
    const updatedLikes = blog.likes + 1;
    const payload = {
      likes: updatedLikes,
    };
    dispatch(blogAsyncThunks.updateBlog({ blog, payload }));
  };

  const handleDeleteBlog = () => {
    dispatch(blogAsyncThunks.deleteBlog(blog));
  };

  const blogDetailToggleRef = `toggleRef-${blog.id}`;
  const showBlogDetailText = "view";
  const hideBlogDetailsText = "hide";
  const defauleToggleValue = false;

  const isAuthor = userInfo.user.id === blog.author.id;

  return (
    <div className="blogStyle">
      <div>title: {blog.title}</div>
      <div>user/author: {blog.author.name}</div>
      <Toggleable
        toDisplayTitle={showBlogDetailText}
        toHideTitle={hideBlogDetailsText}
        toggleRef={blogDetailToggleRef}
        defaultToggleValue={defauleToggleValue}
      >
        <div>url: {blog.url}</div>
        <div>
          likes: {blog.likes}
          <Button type={"button"} text={"like"} onClick={handleLikedABlog} />
        </div>
        {isAuthor && (
          <Button type={"button"} text={"delete"} onClick={handleDeleteBlog} />
        )}
      </Toggleable>
    </div>
  );
};

export default SpecificBlogDisplay;
