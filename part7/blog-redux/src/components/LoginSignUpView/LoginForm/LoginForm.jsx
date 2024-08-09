import { useDispatch } from "react-redux";
import useField from "../../../hooks/useField";
import userAsyncThunks from "../../../redux/user/userAsyncThunk";
import InputField from "../../InputField/InputField";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import CONSTS from "../../../utils/config.util";

const LoginForm = () => {
  const dispatch = useDispatch();

  const userName = useField("username", "text", "username");
  const password = useField("password", "password", "current-password");

  const handleLogin = (event) => {
    event.preventDefault();
    const payload = {
      username: userName.value,
      password: password.value,
    };
    dispatch(userAsyncThunks.login(payload));
  };

  const resetLoginForm = () => {
    userName.clearField();
    password.clearField();
  };

  return (
    <div>
      <h1>Login</h1>
      <form>
        <InputField props={userName} />
        <InputField props={password} />
        <Button type="submit" text="submit" onClick={handleLogin} />
        <Button type="reset" text="reset" onClick={resetLoginForm} />
      </form>
      OR
      <Link to={CONSTS.clientUrls.signup}>
        <Button type="button" text="sign up" />
      </Link>
    </div>
  );
};

export default LoginForm;
