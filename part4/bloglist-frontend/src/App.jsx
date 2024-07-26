import { useState, useEffect } from "react";
import Blog from "./components/Blog";
import blogService from "./services/blogs";
import LoginSignUp from "./components/LoginSignUp/LoginSignUp";

const App = () => {
  const [blogs, setBlogs] = useState([]);

  const [user, setUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);

  //TODO: make component for success message and failure message
  const [successMessage, setSuccessMessage] = useState("");
  const [failureMessage, setFailureMessage] = useState("");

  useEffect(() => {
    blogService.getAll().then((blogs) => setBlogs(blogs));
  }, []);

  return (
    <div>
      <LoginSignUp
        setUser={setUser}
        setLoggedIn={setLoggedIn}
        setSuccessMessage={setSuccessMessage}
        setFailureMessage={setFailureMessage}
      />
    </div>
  );
};

export default App;

