import Button from "../Button/Button";
import FormField from "../FormField/FormField";
import Header from "../Header/Header";

const LoginForm = ({
  usernameValue,
  passwordValue,
  handleUserName,
  handlePassword,
  handleLogin,
}) => {
  const formHeading = "Login Form";
  const headingType = 2;
  return (
    <div>
      <Header type={headingType} heading={formHeading} />
      <form>
        <FormField
          title={"username"}
          inputType="text"
          onEvent={"onChange"}
          fieldValue={usernameValue}
          handleEvent={handleUserName}
        />
        <FormField
          title={"password"}
          inputType="password"
          onEvent={"onChange"}
          fieldValue={passwordValue}
          handleEvent={handlePassword}
        />
        <Button
          title={"submit"}
          buttonType={"submit"}
          onEvent={"onClick"}
          eventHandler={handleLogin}
        />
      </form>
    </div>
  );
};

export default LoginForm;
