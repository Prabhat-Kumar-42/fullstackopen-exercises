import { useState, useEffect } from "react";
import Button from "../Button/Button";
import services from "../../services/loginSignUp.services";
import LoginForm from "./LoginForm/LoginForm";
import SignUpForm from "./SignUpForm/SingUpForm";
import blogService from "../../services/blogs";
import PropTypes from "prop-types";

const LoginSignUp = ({ setUser, handleSuccessMessage, handleErrorMessage }) => {
  const [toggleLoginSingUpForm, setToggleLoginSignUpForm] = useState(true);
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
      const user = responseData.user;
      localStorage.setItem("loggedUser", JSON.stringify(user));
      blogService.setToken(user.authToken);
      handleSuccessMessage("successfully logged in", 3000);
      setUser(user);
      setUserName("");
      setPassword("");
    } catch (err) {
      console.log(err);
      const newErrorMessage = err.response.data.error;
      handleErrorMessage(newErrorMessage, 3000);
    }
  };

  const handleSignUp = async (event) => {
    event.preventDefault();
    try {
      await services.signup(username, name, password);
      const newSuccessMessage = "signup successfull";
      handleSuccessMessage(newSuccessMessage, 3000);
      setUserName("");
      setPassword("");
      setName("");
    } catch (err) {
      console.log(err);
      const newErrorMessage = "signup failed";
      handleErrorMessage(newErrorMessage, 3000);
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
        testid={"swithToSignUpFormButton"}
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
        testid={"swithToLoginFormButton"}
      />
    </div>
  );

  return !toggleLoginSingUpForm ? signupForm : loginForm;
};

LoginSignUp.propTypes = {
  setUser: PropTypes.func.isRequired,
  handleSuccessMessage: PropTypes.func.isRequired,
  handleErrorMessage: PropTypes.func.isRequired,
};

export default LoginSignUp;
