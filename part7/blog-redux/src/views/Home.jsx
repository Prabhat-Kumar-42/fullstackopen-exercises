import BlogForm from "../components/BlogForm/BlogForm";
import Toggleable from "../components/Toggleable/Toggleable";
import useUser from "../hooks/useUser";

const Home = () => {
  const { user } = useUser();
  const formDisplayText = "create new blog";
  const formHideText = "cancle";
  return (
    <div>
      <h1>blogs</h1>
      <Toggleable toDisplayTitle={formDisplayText} toHideTitle={formHideText}>
        <BlogForm />
      </Toggleable>
      <span>{user.name} is logged in !! </span>
    </div>
  );
};

export default Home;
