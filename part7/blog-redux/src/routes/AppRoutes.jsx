import { Navigate, Route, Routes } from "react-router-dom";
import CONSTS from "../utils/config.util";
import LoginForm from "../components/LoginSignUpComponents/LoginForm/LoginForm";
import SignUpForm from "../components/LoginSignUpComponents/SignUpForm/SignUpForm";
import useUser from "../hooks/useUser";
import Home from "../views/Home";

const AppRoutes = () => {
  const { user } = useUser();

  return (
    <Routes>
      <Route
        path={CONSTS.clientUrls.login}
        element={
          !user ? <LoginForm /> : <Navigate to={CONSTS.clientUrls.home} />
        }
      />
      <Route
        path={CONSTS.clientUrls.signup}
        element={
          !user ? <SignUpForm /> : <Navigate to={CONSTS.clientUrls.home} />
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
