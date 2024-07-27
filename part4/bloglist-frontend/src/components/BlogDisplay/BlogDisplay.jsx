import Header from "../Header/Header";
import Button from "../Button/Button";
import BlogForm from "../BlogForm/BlogForm";
import DisplaySpecificBlog from "./DisplaySpecificBlog/DisplaySpecificBlog";

const BlogDisplay = ({
  blogs,
  user,
  setBlogs,
  handleLogout,
  handleSuccessMessage,
  handleErrorMessage,
  handleUpdates,
}) => {
  return (
    <div>
      <Header heading={"blogs"} type={1} />
      <BlogForm
        blogs={blogs}
        setBlogs={setBlogs}
        handleSuccessMessage={handleSuccessMessage}
        handleErrorMessage={handleErrorMessage}
      />
      <p>{user.name} is logged in !!</p>
      <Button
        title={"logout"}
        buttonType={"submit"}
        onEvent={"onClick"}
        eventHandler={handleLogout}
      />
      {blogs.map((blog) => (
        <div key={blog.id}>
          <DisplaySpecificBlog
            user={user}
            blog={blog}
            handleSuccessMessage={handleSuccessMessage}
            handleErrorMessage={handleErrorMessage}
            handleUpdates={handleUpdates}
          />
        </div>
      ))}
    </div>
  );
};

export default BlogDisplay;
