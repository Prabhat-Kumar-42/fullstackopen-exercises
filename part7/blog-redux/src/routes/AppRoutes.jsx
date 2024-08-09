import { useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import CONSTS from "../utils/config.util";
import LoginForm from "../components/LoginSignUpView/LoginForm/LoginForm";
import SignUpForm from "../components/LoginSignUpView/SignUpForm/SignUpForm";

const AppRoutes = () => {
  const user = useSelector((state) => state.user.user);
  return (
    <Routes>
      <Route path={CONSTS.clientUrls.login} element={<LoginForm />} />
      <Route path={CONSTS.clientUrls.signup} element={<SignUpForm />} />
      <Route
        path="/"
        element={user ? null : <Navigate to={CONSTS.clientUrls.login} />}
      />
    </Routes>
  );
};

export default AppRoutes;
