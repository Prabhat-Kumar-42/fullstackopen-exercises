import { useState, useEffect } from "react";
import Button from "../Button/Button";
import services from "../../services/loginSignUp.services";
import LoginForm from "./LoginForm/LoginForm";
import SignUpForm from "./SignUpForm/SingUpForm";

const LoginSignUp = ({
  setLoggedIn,
  setUser,
  setSuccessMessage,
  setFailureMessage,
}) => {
  const [toggleLoginSingUpForm, setToggleLoginSignUpForm] = useState(false);
  const [username, setUserName] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const toggleForms = () => setToggleLoginSignUpForm(!toggleLoginSingUpForm);

  const handleUserName = (event) => {
    const updatedName = event.target.value;
    setUserName(updatedName);
  };

  const handleName = (event) => {
    const updatedName = event.target.value;
    setName(updatedName);
  };

  const handlePassword = (event) => {
    const updatedPassword = event.target.value;
    setPassword(updatedPassword);
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const responseData = await services.login(username, password);
      console.log(responseData);
      //localStorage.setItem('authToken',)
    } catch (err) {
      console.log(err);
      const newErrorMessage = "signup failed";
      setFailureMessage(newErrorMessage);
    }
  };

  const handleSignUp = async (event) => {
    event.preventDefault();
    try {
      const responseData = await services.signup(username, name, password);
      const newSuccessMessage = "signup successfull";
      setSuccessMessage(newSuccessMessage);
    } catch (err) {
      console.log(err);
      const newErrorMessage = "signup failed";
      setFailureMessage(newErrorMessage);
    }
  };

  const loginForm = (
    <div>
      <LoginForm
        usernameValue={username}
        passwordValue={password}
        handleUserName={handleUserName}
        handlePassword={handlePassword}
        handleLogin={handleLogin}
      />
      <p>Or</p>
      <Button
        title={"Sign Up"}
        buttonType={"submit"}
        onEvent={"onClick"}
        eventHandler={toggleForms}
      />
    </div>
  );

  const signupForm = (
    <div>
      <SignUpForm
        usernameValue={username}
        passwordValue={password}
        nameValue={name}
        handleUserName={handleUserName}
        handlePassword={handlePassword}
        handleSignUp={handleSignUp}
        handleName={handleName}
      />
      <p>Or</p>
      <Button
        title={"Login"}
        buttonType={"submit"}
        onEvent={"onClick"}
        eventHandler={toggleForms}
      />
    </div>
  );

  return !toggleLoginSingUpForm ? signupForm : loginForm;
};

export default LoginSignUp;
