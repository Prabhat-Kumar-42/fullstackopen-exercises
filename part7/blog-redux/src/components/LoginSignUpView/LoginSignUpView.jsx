import { useState } from "react";
import LoginForm from "../Forms/LoginForm/LoginForm";
import SignUpForm from "../Forms/SignUpForm/SignUpForm";

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
      <button onClick={toggleLoginFromDisplay}>{toggleButtonText}</button>
    </div>
  );
};

export default LoginSignUpView;
