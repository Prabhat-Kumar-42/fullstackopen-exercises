import { useDispatch, useSelector } from "react-redux";
import { clearNotification } from "../redux/reducers/notificationReducer";

const Notification = () => {
  const notification = useSelector((state) => state.notification.message);
  const dispatch = useDispatch();

  if (!notification) return null;

  const style = {
    border: "solid",
    padding: 10,
    borderWidth: 1,
  };

  const closeNotification = () => {
    dispatch(clearNotification());
  };

  return (
    <div style={style}>
      {notification}
      <button onClick={closeNotification}> close </button>
    </div>
  );
};

export default Notification;
