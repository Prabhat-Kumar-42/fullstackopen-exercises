import useField from "../../../hooks/useField";
import InputField from "../../InputField/InputField";
import Button from "../Button/Button";

const SignUpForm = () => {
  const name = useField("name", "text");
  const userName = useField("username", "text", "username");
  const password = useField("password", "password", "current-password");

  const handleSignUp = () => null;

  const resetSignUpForm = () => {
    userName.clearField();
    name.clearField();
    password.clearField();
  };

  return (
    <div>
      <h1>Sign Up</h1>
      <form action="">
        <InputField props={name} />
        <InputField props={userName} />
        <InputField props={password} />
        <Button type="submit" text="submit" onClick={handleSignUp} />
        <Button type="reset" text="reset" onClick={resetSignUpForm} />
      </form>
    </div>
  );
};

export default SignUpForm;
