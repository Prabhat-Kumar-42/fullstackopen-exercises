import { useEffect } from "react";
import AppRoutes from "./routes/AppRoutes";
import { useDispatch } from "react-redux";
import { userAction } from "./redux/user/userSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (!user) return;
    const parsedUser = JSON.parse(user);
    dispatch(
      userAction.setUser({
        user: parsedUser,
      }),
    );
  }, []);

  return (
    <div>
      <AppRoutes />
    </div>
  );
}
export default App;
