import {
  Navigate,
  Route,
  Routes,
  useMatch,
  useNavigate,
} from "react-router-dom";
import CONSTS from "../utils/config.util";
import LoginForm from "../components/LoginSignUpComponents/LoginForm/LoginForm";
import SignUpForm from "../components/LoginSignUpComponents/SignUpForm/SignUpForm";
import useUser from "../hooks/useUser";
import UserList from "../components/Users/UserList/UserList";
import SpecificUserPage from "../components/Users/SpecificUserPage/SpecificUserPage";
import BlogDisplay from "../components/BlogDisplay/BlogDisplay";
import SpecificBlogDisplay from "../components/BlogDisplay/SpecificBlogDisplay/SpecificBlogDisplay";

const AppRoutes = () => {
  const { user } = useUser();
  const navigate = useNavigate();
  const match = useMatch("/");
  if (match) navigate(CONSTS.clientUrls.blogs);

  return (
    <Routes>
      <Route
        path={CONSTS.clientUrls.login}
        element={
          !user ? <LoginForm /> : <Navigate to={CONSTS.clientUrls.blogs} />
        }
      />
      <Route
        path={CONSTS.clientUrls.signup}
        element={
          !user ? <SignUpForm /> : <Navigate to={CONSTS.clientUrls.blogs} />
        }
      />

      <Route
        path={CONSTS.clientUrls.users}
        element={
          user ? <UserList /> : <Navigate to={CONSTS.clientUrls.login} />
        }
      />
      <Route
        path={CONSTS.clientUrls.specificUser}
        element={
          user ? (
            <SpecificUserPage />
          ) : (
            <Navigate to={CONSTS.clientUrls.login} />
          )
        }
      />
      <Route
        path={CONSTS.clientUrls.blogs}
        element={
          user ? <BlogDisplay /> : <Navigate to={CONSTS.clientUrls.login} />
        }
      />
      <Route
        path={CONSTS.clientUrls.specificBlog}
        element={
          user ? (
            <SpecificBlogDisplay />
          ) : (
            <Navigate to={CONSTS.clientUrls.login} />
          )
        }
      />
    </Routes>
  );
};

export default AppRoutes;
