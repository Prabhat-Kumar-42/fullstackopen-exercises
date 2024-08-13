import { Link } from "react-router-dom";
import useField from "../../../hooks/useField";
import CONSTS from "../../../utils/config.util";
import InputField from "../../InputField/InputField";
import Button from "../../Button/Button";
import { useDispatch } from "react-redux";
import userAsyncThunks from "../../../redux/user/userAsyncThunk";

const SignUpForm = () => {
  const dispatch = useDispatch();
  const name = useField("name", "text");
  const userName = useField("username", "text", "username");
  const password = useField("password", "password", "current-password");

  const handleSignUp = (event) => {
    event.preventDefault();
    const userInfo = {
      name: name.value,
      username: userName.value,
      password: password.value,
    };
    dispatch(userAsyncThunks.signup(userInfo));
    name.clearField();
    userName.clearField();
    password.clearField();
  };

  const resetSignUpForm = () => {
    name.clearField();
    userName.clearField();
    password.clearField();
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 p-6">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Sign Up</h1>
        <form onSubmit={handleSignUp} className="space-y-4">
          <InputField props={name} className="w-full" />
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
              onClick={resetSignUpForm}
              className="w-full bg-gray-500 text-white hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-300 rounded-lg py-2"
            />
          </div>
        </form>
        <div className="my-6 text-center text-gray-600">OR</div>
        <Link to={CONSTS.clientUrls.login} className="block text-center">
          <Button
            type="button"
            text="Login"
            className="w-full bg-green-500 text-white hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300 rounded-lg py-2"
          />
        </Link>
      </div>
    </div>
  );
};

export default SignUpForm;
