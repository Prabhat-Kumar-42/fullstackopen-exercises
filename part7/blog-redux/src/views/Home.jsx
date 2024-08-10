import { useDispatch } from "react-redux";
import BlogForm from "../components/BlogForm/BlogForm";
import Button from "../components/Button/Button";
import Toggleable from "../components/Toggleable/Toggleable";
import useUser from "../hooks/useUser";
import userAsyncThunks from "../redux/user/userAsyncThunk";
import { useNavigate } from "react-router-dom";
import CONSTS from "../utils/config.util";

const Home = () => {
  const { user } = useUser();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formDisplayText = "create new blog";
  const formHideText = "cancle";
  const logoutText = "logout";

  const handleLogout = async () => {
    const loginUrl = CONSTS.clientUrls.login;
    dispatch(userAsyncThunks.logout());
    navigate(loginUrl);
  };

  return (
    <div>
      <h1>blogs</h1>
      <span>{user.name} is logged in !! </span>
      <Button text={logoutText} onClick={handleLogout} />
      <Toggleable toDisplayTitle={formDisplayText} toHideTitle={formHideText}>
        <BlogForm />
      </Toggleable>
    </div>
  );
};

export default Home;
