import AppRoutes from "./routes/AppRoutes";
import usePresistedUser from "./hooks/usePresistedUser";
import { useDispatch } from "react-redux";
import blogAsyncThunks from "./redux/blog/blogAsyncThunks";
import { useEffect } from "react";
import ErrorMessageDisplay from "./components/Notifications/ErrorMessageDisplay/ErrorMessageDisplay";
import SuccessMessageDisplay from "./components/Notifications/SuccessMessageDisplay/SuccessMessageDisplay";

function App() {
  const dispatch = useDispatch();
  usePresistedUser();

  useEffect(() => {
    // initiaize blogs
    dispatch(blogAsyncThunks.getAllBlogs());
  }, [dispatch]);

  return (
    <div>
      <ErrorMessageDisplay />
      <SuccessMessageDisplay />
      <AppRoutes />
    </div>
  );
}

export default App;
