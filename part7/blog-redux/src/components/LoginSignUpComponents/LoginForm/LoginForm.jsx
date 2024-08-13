import { useDispatch } from "react-redux";
import useField from "../../../hooks/useField";
import userAsyncThunks from "../../../redux/user/userAsyncThunk";
import InputField from "../../InputField/InputField";
import { Link } from "react-router-dom";
import CONSTS from "../../../utils/config.util";
import Button from "../../Button/Button";

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
    <div className="flex items-center justify-center min-h-screen bg-gray-50 p-6">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Login</h1>
        <form onSubmit={handleLogin} className="space-y-4">
          <InputField props={userName} className="w-full" />
          <InputField props={password} className="w-full" />
          <div className="flex flex-col gap-4">
            <Button
              type="submit"
              text="Submit"
              className="w-full bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-lg py-2"
            />
            <Button
              type="reset"
              text="Reset"
              onClick={resetLoginForm}
              className="w-full bg-gray-500 text-white hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-300 rounded-lg py-2"
            />
          </div>
        </form>
        <div className="my-6 text-center text-gray-600">OR</div>
        <Link to={CONSTS.clientUrls.signup} className="block text-center">
          <Button
            type="button"
            text="Sign Up"
            className="w-full bg-green-500 text-white hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300 rounded-lg py-2"
          />
        </Link>
      </div>
    </div>
  );
};

export default LoginForm;
