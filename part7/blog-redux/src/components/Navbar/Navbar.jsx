
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
  const logoutText = "Logout";
  const handleLogout = async () => {
    const loginUrl = CONSTS.clientUrls.login;
    dispatch(userAsyncThunks.logout());
    navigate(loginUrl);
  };

  return (
    <div className="bg-gray-800 text-white py-4 px-6 flex items-center justify-between">
      <div className="flex space-x-4">
        <Link to={CONSTS.clientUrls.blogs} className="hover:text-gray-400 transition-colors">
          <span className="text-lg font-medium">Blogs</span>
        </Link>
        <Link to={CONSTS.clientUrls.users} className="hover:text-gray-400 transition-colors">
          <span className="text-lg font-medium">Users</span>
        </Link>
      </div>
      <div className="flex items-center space-x-4">
        <span className="text-sm">{user.name} is logged in!</span>
        <Button
          text={logoutText}
          onClick={handleLogout}
          className="bg-red-600 text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-300 rounded-lg px-4 py-2 text-sm"
        />
      </div>
    </div>
  );
};

export default Navbar;

