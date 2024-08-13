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
      {user && <PageHeader />}
      {/* didn't move there notification display to header 
      because notification also need to be displayed  
      on successfull and unsuccessfull login and signup. */}
      <ErrorMessageDisplay />
      <SuccessMessageDisplay />
      <AppRoutes />
    </div>
  );
}

export default App;
