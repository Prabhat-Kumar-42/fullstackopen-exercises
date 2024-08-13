import { useDispatch } from "react-redux";
import Toggleable from "../../Toggleable/Toggleable";
import blogAsyncThunks from "../../../redux/blog/blogAsyncThunks";
import Button from "../../Button/Button";
import useUser from "../../../hooks/useUser";
import notificationThunks from "../../../redux/notifications/notificationThunks";
import { Link, useMatch, useNavigate } from "react-router-dom";
import CONSTS from "../../../utils/config.util";
import useBlog from "../../../hooks/useBlog";
import BlogCommentDisplay from "../../Comments/CommentDisplay/BlogCommentDisplay";

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

  if (!blog)
    return (
      <div className="text-center text-red-500 mt-6">Cannot find that blog</div>
    );

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
  const showBlogDetailText = "Creator Options";
  const hideBlogDetailsText = "Hide";
  const defaultToggleValue = false;

  const isAuthor = userInfo.user.id === blog.author.id;

  return (
    <div className="p-6 max-w-3xl mx-auto bg-white rounded-lg shadow-md mt-10">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">{blog.title}</h2>
      <div className="mb-4">
        <a
          href={blog.url}
          className="text-blue-600 hover:text-blue-800 truncate block"
        >
          {blog.url}
        </a>
      </div>
      <div className="flex items-center mb-4">
        <span className="text-gray-600 mr-4">{blog.likes} likes</span>
        <Button
          type="button"
          text="Like"
          onClick={handleLikedABlog}
          className="bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-lg py-2 px-4"
        />
      </div>
      <div className="text-gray-500 mb-4">
        Added by
        <Link
          to={`${CONSTS.clientUrls.users}/${blog.author.id}`}
          className="text-blue-600 hover:text-blue-800"
        >
          {" "}
          {blog.author.name}
        </Link>
      </div>
      <Toggleable
        toDisplayTitle={showBlogDetailText}
        toHideTitle={hideBlogDetailsText}
        toggleRef={blogDetailToggleRef}
        defaultToggleValue={defaultToggleValue}
      >
        {isAuthor && (
          <Button
            type="button"
            text="Delete Blog"
            onClick={handleDeleteBlog}
            className="bg-red-600 text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-300 rounded-lg py-2 px-4"
          />
        )}
      </Toggleable>
      <BlogCommentDisplay blog={blog} />
    </div>
  );
};

export default SpecificBlogDisplay;
