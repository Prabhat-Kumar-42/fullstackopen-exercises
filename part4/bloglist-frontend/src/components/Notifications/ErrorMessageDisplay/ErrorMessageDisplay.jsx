import "./style.css";

const ErrorMessageDisplay = ({ message }) => {
  if (!message) {
    return;
  }
  return (
    <div className="error">
      <p>{message}</p>
    </div>
  );
};

export default ErrorMessageDisplay;
