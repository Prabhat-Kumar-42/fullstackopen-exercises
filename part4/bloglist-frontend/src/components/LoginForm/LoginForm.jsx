import Button from "../Button/Button";
import FormField from "../FormField/FormField";

const LoginForm = ({ handleUserName, handlePassword, handleLogin }) => {
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
          title={"password"}
          inputType="password"
          onEvent={"onChange"}
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
