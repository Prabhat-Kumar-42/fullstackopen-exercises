import Button from "../Button/Button";
import FormField from "../FormField/FormField";

const SignUpForm = ({ handleUserName, handlePassword, handleSignUp }) => {
  return (
    <div>
      <form>
        <FormField
          title={"username"}
          inputType="text"
          onEvent={"onChange"}
          handleEvent={handleUserName}
        />
        <FormField
          title={"name"}
          inputType="text"
          onEvent={"onChange"}
          handleEvent={handleUserName}
        />
        <FormField
          title={"password"}
          inputType="password"
          onEvent={"onChange"}
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
