import { Navigate, Route, Routes } from "react-router-dom";
import CONSTS from "../utils/config.util";
import LoginForm from "../components/LoginSignUpComponents/LoginForm/LoginForm";
import SignUpForm from "../components/LoginSignUpComponents/SignUpForm/SignUpForm";
import useUser from "../hooks/useUser";
import Home from "../views/Home";
import AutoRedirect from "../components/AutoRedirect/AutoRedirect";

const AppRoutes = () => {
  const { user } = useUser();
  console.log("AppRoutes: ", user);
  return (
    <Routes>
      <Route
        path={CONSTS.clientUrls.login}
        element={
          <AutoRedirect redirectTo={CONSTS.clientUrls.home}>
            {!user ? <LoginForm /> : <Navigate to={CONSTS.clientUrls.home} />}
          </AutoRedirect>
        }
      />
      <Route
        path={CONSTS.clientUrls.signup}
        element={
          <AutoRedirect redirectTo={CONSTS.clientUrls.login}>
            {!user ? <SignUpForm /> : <Navigate to={CONSTS.clientUrls.home} />}
          </AutoRedirect>
        }
      />
      <Route
        path={CONSTS.clientUrls.home}
        element={user ? <Home /> : <Navigate to={CONSTS.clientUrls.login} />}
      />
    </Routes>
  );
};

export default AppRoutes;
