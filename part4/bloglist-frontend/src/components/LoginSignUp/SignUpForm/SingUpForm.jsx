import Button from "../../Button/Button";
import FormField from "../../FormField/FormField";
import Header from "../../Header/Header";

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
      <form>
        <FormField
          title={"username"}
          inputType="text"
          onEvent={"onChange"}
          fieldValue={usernameValue}
          handleEvent={handleUserName}
        />
        <FormField
          title={"name"}
          inputType="text"
          onEvent={"onChange"}
          fieldValue={nameValue}
          handleEvent={handleName}
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
          eventHandler={handleSignUp}
        />
      </form>
    </div>
  );
};

export default SignUpForm;
