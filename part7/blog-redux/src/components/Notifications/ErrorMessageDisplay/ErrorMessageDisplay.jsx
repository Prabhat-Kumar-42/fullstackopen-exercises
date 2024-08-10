import useNotification from "../../../hooks/useNotification";
import "./style.css";

const ErrorMessageDisplay = () => {
  const { errorMessage: message } = useNotification();
  if (!message) {
    return;
  }
  return (
    <div className="error" data-testid="errorMessageDisplay">
      <p>{message}</p>
    </div>
  );
};

export default ErrorMessageDisplay;
