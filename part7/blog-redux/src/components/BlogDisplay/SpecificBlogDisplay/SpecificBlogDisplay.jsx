import { useDispatch } from "react-redux";
import Toggleable from "../../Toggleable/Toggleable";
import blogAsyncThunks from "../../../redux/blog/blogAsyncThunks";
import Button from "../../Button/Button";
import useUser from "../../../hooks/useUser";
import notificationThunks from "../../../redux/notifications/notificationThunks";
import { useMatch, useNavigate } from "react-router-dom";
import CONSTS from "../../../utils/config.util";
import useBlog from "../../../hooks/useBlog";

const SpecificBlogDisplay = () => {
  const dispatch = useDispatch();
  const userInfo = useUser();
  const navigate = useNavigate();

  const match = useMatch(CONSTS.clientUrls.specificBlog);
  const { blogs: blogList } = useBlog();
  if (!blogList.length) return null;
  const blog = !match
    ? null
    : blogList.find((blog) => blog.id === match.params.id);

  if (!blog) return <div>cannot find that blog</div>;

  const handleLikedABlog = () => {
    const updatedLikes = blog.likes + 1;
    const payload = {
      likes: updatedLikes,
    };
    dispatch(blogAsyncThunks.updateBlog({ blog, payload }));
    const successMessage = `Liked ${blog.title} !!`;
    dispatch(notificationThunks.notifySuccess(successMessage));
  };

  const handleDeleteBlog = () => {
    dispatch(blogAsyncThunks.deleteBlog(blog));
    navigate(CONSTS.clientUrls.blogs);
  };

  const blogDetailToggleRef = `toggleRef-${blog.id}`;
  const showBlogDetailText = "creator options";
  const hideBlogDetailsText = "hide";
  const defauleToggleValue = false;

  const isAuthor = userInfo.user.id === blog.author.id;

  return (
    <div>
      <h2>{blog.title}</h2>
      <div>
        <a href={blog.url}>{blog.url}</a>
      </div>
      <div>
        <span>{blog.likes} likes </span>
        <Button type={"button"} text={"like"} onClick={handleLikedABlog} />
      </div>
      <div>added by {blog.author.name}</div>

      <Toggleable
        toDisplayTitle={showBlogDetailText}
        toHideTitle={hideBlogDetailsText}
        toggleRef={blogDetailToggleRef}
        defaultToggleValue={defauleToggleValue}
      >
        {isAuthor && (
          <Button
            type={"button"}
            text={"delete blog"}
            onClick={handleDeleteBlog}
          />
        )}
      </Toggleable>
    </div>
  );
};

export default SpecificBlogDisplay;
