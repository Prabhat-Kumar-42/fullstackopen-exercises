import AppRoutes from "./routes/AppRoutes";
import usePresistedUser from "./hooks/usePresistedUser";
import { useDispatch } from "react-redux";
import blogAsyncThunks from "./redux/blog/blogAsyncThunks";
import { useEffect } from "react";
import ErrorMessageDisplay from "./components/Notifications/ErrorMessageDisplay/ErrorMessageDisplay";
import SuccessMessageDisplay from "./components/Notifications/SuccessMessageDisplay/SuccessMessageDisplay";
import userAsyncThunks from "./redux/user/userAsyncThunk";
import PageHeader from "./components/PageHeader/PageHeader";
import useUser from "./hooks/useUser";

function App() {
  const dispatch = useDispatch();
  const { user } = useUser();
  usePresistedUser();

  useEffect(() => {
    // initiaize blogs
    dispatch(blogAsyncThunks.getAllBlogs());
    dispatch(userAsyncThunks.getAllUser());
  }, [dispatch]);

  return (
    <div>
      <ErrorMessageDisplay />
      <SuccessMessageDisplay />
      {user && <PageHeader />}
      <AppRoutes />
    </div>
  );
}

export default App;
