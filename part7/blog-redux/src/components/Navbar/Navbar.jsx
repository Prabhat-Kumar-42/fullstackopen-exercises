import { Link, useNavigate } from "react-router-dom";
import CONSTS from "../../utils/config.util";
import Button from "../Button/Button";
import useUser from "../../hooks/useUser";
import { useDispatch } from "react-redux";
import userAsyncThunks from "../../redux/user/userAsyncThunk";

const Navbar = () => {
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
      <Link to={CONSTS.clientUrls.blogs}>
        <span>blogs</span>
      </Link>
      <Link to={CONSTS.clientUrls.users}>
        <span>users</span>
      </Link>
      <span>{user.name} is logged in !! </span>
      <Button text={logoutText} onClick={handleLogout} />
    </div>
  );
};

export default Navbar;
