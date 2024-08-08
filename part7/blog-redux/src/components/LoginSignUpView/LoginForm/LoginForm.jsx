import useField from "../../../hooks/useField";
import InputField from "../../InputField/InputField";
import Button from "../Button/Button";

const LoginForm = () => {
  const userName = useField("username", "text", "username");
  const password = useField("password", "password", "current-password");

  const handleLogin = () => null;

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
    </div>
  );
};

export default LoginForm;
