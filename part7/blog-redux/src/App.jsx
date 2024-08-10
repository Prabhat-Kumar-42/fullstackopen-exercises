import AppRoutes from "./routes/AppRoutes";
import usePresistedUser from "./hooks/usePresistedUser";
import { useDispatch } from "react-redux";
import blogAsyncThunks from "./redux/blog/blogAsyncThunks";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();
  usePresistedUser();

  useEffect(() => {
    // initiaize blogs
    dispatch(blogAsyncThunks.getAllBlogs());
  }, [dispatch]);

  return (
    <div>
      <AppRoutes />
    </div>
  );
}

export default App;
