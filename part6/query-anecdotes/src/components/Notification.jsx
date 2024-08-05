import { useReducer } from "react";
import notificationReducer, {
  clearNotificationActionCreator,
  displayNotificationActionCreator,
} from "../reducers/notificationReducer";
import { useState } from "react";
import PropTypes from "prop-types";
import { useNotification } from "../contexts/notificationContext";

const Notification = ({ message, timeToLive }) => {
  const style = {
    border: "solid",
    padding: 10,
    borderWidth: 1,
    marginBottom: 5,
  };

  const [notification, notificationDispatch] = useNotification();
  const [timeoutRef, setTimeoutRef] = useState(null);

  const handleTimeout = () => {
    if (timeoutRef) clearTimeout(timeoutRef);
    const newTimeout = setTimeout(() => {
      const clearAction = clearNotificationActionCreator();
      notificationDispatch(clearAction);
    }, timeToLive);
    setTimeoutRef(newTimeout);
  };

  const handleNotification = () => {
    const displayAction = displayNotificationActionCreator(message);
    notificationDispatch(displayAction);
  };

  handleTimeout();
  handleNotification();

  if (!notification) return null;
  return <div style={style}>{notification}</div>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
  timeToLive: PropTypes.number.isRequired,
};

export default Notification;
