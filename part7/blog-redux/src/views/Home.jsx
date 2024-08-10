import { useDispatch } from "react-redux";
import Button from "../components/Button/Button";
import useUser from "../hooks/useUser";
import userAsyncThunks from "../redux/user/userAsyncThunk";
import { useNavigate } from "react-router-dom";
import CONSTS from "../utils/config.util";
import BlogDisplay from "../components/BlogDisplay/BlogDisplay";

const Home = () => {
  const { user } = useUser();
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
      <BlogDisplay />
    </div>
  );
};

export default Home;
