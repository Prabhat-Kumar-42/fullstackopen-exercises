import { useEffect, useState } from "react";
import { useNotification } from "../contexts/NotificationContext";
import { clearNotificationActionCreator } from "../contexts/NotificationContext";

const Notification = () => {
  const style = {
    border: "solid",
    padding: 10,
    borderWidth: 1,
    marginBottom: 5,
  };

  const [notification, notificationDispatch] = useNotification();
  const [timeoutRef, setTimeoutRef] = useState(null);

  const timeToLive = 3000;

  useEffect(() => {
    if (notification) {
      if (timeoutRef) clearTimeout(timeoutRef);
      const newTimeout = setTimeout(() => {
        const clearAction = clearNotificationActionCreator();
        notificationDispatch(clearAction);
      }, timeToLive);
      setTimeoutRef(newTimeout);
      return () => clearTimeout(newTimeout);
    }
  }, [notification]);

  if (!notification) return null;

  return <div style={style}>{notification}</div>;
};

export default Notification;
