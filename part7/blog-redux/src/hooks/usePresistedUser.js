import { useDispatch } from "react-redux";
import { userAction } from "../redux/user/userSlice";
import { useEffect } from "react";

const usePresistedUser = () => {
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
  }, [dispatch]);
};

export default usePresistedUser;
