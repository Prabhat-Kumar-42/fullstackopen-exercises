import { createContext, useContext, useReducer } from "react";

const actions = {
  MESSAGE: "MESSAGE",
  CLEAR: "CLEAR",
};

const notificationReducer = (state, action) => {
  const type = action.type;
  switch (type) {
    case actions.MESSAGE:
      return action.payload;
    case actions.CLEAR:
      return "";
    default:
      return state;
  }
};

const NotificationContext = createContext();
const NotificationContextProvider = ({ children }) => {
  const [notification, notificationDispatch] = useReducer(
    notificationReducer,
    "",
  );
  return (
    <NotificationContext.Provider value={[notification, notificationDispatch]}>
      {children}
    </NotificationContext.Provider>
  );
};

const useNotification = () => {
  return useContext(NotificationContext);
};

const useNotificationValue = () => {
  const notificationVal = useContext(NotificationContext)[0];
  return notificationVal;
};

const useNotificationDispatch = () => {
  const notificationDispatch = useContext(NotificationContext)[1];
  return notificationDispatch;
};

const displayNotificationActionCreator = (notification) => {
  return {
    type: actions.MESSAGE,
    payload: notification,
  };
};

const clearNotificationActionCreator = () => {
  return {
    type: actions.CLEAR,
  };
};

export default NotificationContext;

export {
  actions,
  useNotification,
  useNotificationValue,
  useNotificationDispatch,
  displayNotificationActionCreator,
  clearNotificationActionCreator,
  NotificationContextProvider,
};
