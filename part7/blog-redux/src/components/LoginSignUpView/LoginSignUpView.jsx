import { useState } from "react";
import LoginForm from "./LoginForm/LoginForm";
import SignUpForm from "./SignUpForm/SignUpForm";
import Button from "./Button/Button";

const LoginSignUpView = () => {
  const [showLoginForm, setShowLoginForm] = useState("true");

  const toggleLoginFromDisplay = () => {
    const newState = !showLoginForm;
    setShowLoginForm(newState);
  };

  const displayForm = showLoginForm ? <LoginForm /> : <SignUpForm />;
  const toggleButtonText = showLoginForm ? "Sign Up" : "Login";
  return (
    <div>
      {displayForm}
      OR
      <Button
        text={toggleButtonText}
        type="button"
        onClick={toggleLoginFromDisplay}
      />
    </div>
  );
};

export default LoginSignUpView;
