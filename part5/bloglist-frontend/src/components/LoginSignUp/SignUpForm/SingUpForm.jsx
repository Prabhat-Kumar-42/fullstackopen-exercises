import Button from "../../Button/Button";
import FormField from "../../FormField/FormField";
import Header from "../../Header/Header";
import PropTypes from "prop-types";

const SignUpForm = ({
  usernameValue,
  nameValue,
  passwordValue,
  handleName,
  handleUserName,
  handlePassword,
  handleSignUp,
}) => {
  const formHeading = "SignUp";
  const headingType = 2;
  return (
    <div>
      <Header type={headingType} heading={formHeading} />
      <form data-testid="singpForm">
        <FormField
          title={"username"}
          inputType="text"
          onEvent={"onChange"}
          fieldValue={usernameValue}
          handleEvent={handleUserName}
          testid={"signupFormUserNameField"}
        />
        <FormField
          title={"name"}
          inputType="text"
          onEvent={"onChange"}
          fieldValue={nameValue}
          handleEvent={handleName}
          testid={"signupFormNameField"}
        />
        <FormField
          title={"password"}
          inputType="password"
          onEvent={"onChange"}
          fieldValue={passwordValue}
          handleEvent={handlePassword}
          testid={"signupFormPasswordField"}
        />
        <Button
          title={"submit"}
          buttonType={"submit"}
          onEvent={"onClick"}
          eventHandler={handleSignUp}
          testid={"signupFormSubmitButton"}
        />
      </form>
    </div>
  );
};

SignUpForm.propTypes = {
  usernameValue: PropTypes.string.isRequired,
  nameValue: PropTypes.string.isRequired,
  passwordValue: PropTypes.string.isRequired,
  handleUserName: PropTypes.func.isRequired,
  handleName: PropTypes.func.isRequired,
  handlePassword: PropTypes.func.isRequired,
  handleSignUp: PropTypes.func.isRequired,
};

export default SignUpForm;
