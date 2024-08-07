const Notification = ({ notification }) => {
  if (!notification) return null;
  return <div>NOTIFICATION: {notification}</div>;
};

export default Notification;
