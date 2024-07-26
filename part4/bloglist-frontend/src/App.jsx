import { useState, useEffect } from "react";
import Blog from "./components/Blog";
import blogService from "./services/blogs";
import LoginSignUp from "./components/LoginSignUp/LoginSignUp";
import BlogDisplay from "./components/BlogDisplay/BlogDisplay";

const App = () => {
  const [blogs, setBlogs] = useState([]);
  const [user, setUser] = useState(null);

  //TODO: make component for success message and failure message
  const [successMessage, setSuccessMessage] = useState("");
  const [failureMessage, setFailureMessage] = useState("");

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

  const loginSignUpDisplay = () => (
    <div>
      <LoginSignUp
        setUser={setUser}
        setSuccessMessage={setSuccessMessage}
        setFailureMessage={setFailureMessage}
      />
    </div>
  );

  const blogsDisplay = () => (
    <BlogDisplay
      blogs={blogs}
      setBlogs={setBlogs}
      user={user}
      handleLogout={handleLogout}
    />
  );
  return !user ? loginSignUpDisplay() : blogsDisplay();
};

export default App;
