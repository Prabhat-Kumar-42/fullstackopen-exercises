import { useState, useEffect } from "react";
import Blog from "./components/Blog";
import blogService from "./services/blogs";
import LoginSignUp from "./components/LoginSignUp/LoginSignUp";
import BlogDisplay from "./components/BlogDisplay/BlogDisplay";
import ErrorMessageDisplay from "./components/Notifications/ErrorMessageDisplay/ErrorMessageDisplay";
import SuccessMessageDisplay from "./components/Notifications/SuccessMessageDisplay/SuccessMessageDisplay";

const App = () => {
  const [blogs, setBlogs] = useState([]);
  const [user, setUser] = useState(null);

  const [successMessage, setSuccessMessage] = useState("");
  const [failureMessage, setErrorMessage] = useState("");

  useEffect(() => {
    blogService.getAll().then((blogs) => setBlogs(blogs));
  }, []);

  useEffect(() => {
    const storedUser = localStorage.getItem("loggedUser");
    if (!storedUser) {
      return setUser(null);
    }
    const loggedUser = JSON.parse(storedUser);
    blogService.setToken(loggedUser.authToken);
    setUser(loggedUser);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("loggedUser");
    setUser("");
  };
  const handleSuccessMessage = (message, timeout) => {
    setSuccessMessage(message);
    setTimeout(() => setSuccessMessage(""), timeout);
  };

  const handleErrorMessage = (message, timeout) => {
    setErrorMessage(message);
    setTimeout(() => setErrorMessage(""), timeout);
  };
  const loginSignUpDisplay = () => (
    <div>
      <ErrorMessageDisplay message={failureMessage} />
      <SuccessMessageDisplay message={successMessage} />
      <LoginSignUp
        setUser={setUser}
        handleSuccessMessage={handleSuccessMessage}
        handleErrorMessage={handleErrorMessage}
      />
    </div>
  );

  const blogsDisplay = () => (
    <div>
      <ErrorMessageDisplay message={failureMessage} />
      <SuccessMessageDisplay message={successMessage} />
      <BlogDisplay
        blogs={blogs}
        setBlogs={setBlogs}
        user={user}
        handleLogout={handleLogout}
        handleSuccessMessage={handleSuccessMessage}
        handleErrorMessage={handleErrorMessage}
      />
    </div>
  );
  return !user ? loginSignUpDisplay() : blogsDisplay();
};

export default App;
