import useNotification from "../../../hooks/useNotification";
import "./style.css";

const SuccessMessageDisplay = () => {
  const { successMessage: message } = useNotification();
  if (!message) {
    return;
  }

  return (
    <div className="success" data-testid="successMessageDisplay">
      <p>{message}</p>
    </div>
  );
};

export default SuccessMessageDisplay;
