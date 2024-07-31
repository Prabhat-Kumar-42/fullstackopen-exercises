import Button from "../../Button/Button";
import FormField from "../../FormField/FormField";
import Header from "../../Header/Header";
import PropTypes from "prop-types";

const LoginForm = ({
  usernameValue,
  passwordValue,
  handleUserName,
  handlePassword,
  handleLogin,
}) => {
  const formHeading = "Login";
  const headingType = 2;
  return (
    <div>
      <Header type={headingType} heading={formHeading} />
      <form data-testid="loginForm">
        <FormField
          title={"username"}
          inputType="text"
          onEvent={"onChange"}
          fieldValue={usernameValue}
          handleEvent={handleUserName}
          testid={"loginFormUserNameField"}
        />
        <FormField
          title={"password"}
          inputType="password"
          onEvent={"onChange"}
          fieldValue={passwordValue}
          handleEvent={handlePassword}
          testid={"loginFormPasswordField"}
        />
        <Button
          title={"submit"}
          buttonType={"submit"}
          onEvent={"onClick"}
          eventHandler={handleLogin}
          testid={"loginFormSubmitButton"}
        />
      </form>
    </div>
  );
};

LoginForm.propTypes = {
  usernameValue: PropTypes.string.isRequired,
  passwordValue: PropTypes.string.isRequired,
  handleUserName: PropTypes.func.isRequired,
  handlePassword: PropTypes.func.isRequired,
  handleLogin: PropTypes.func.isRequired,
};

export default LoginForm;
