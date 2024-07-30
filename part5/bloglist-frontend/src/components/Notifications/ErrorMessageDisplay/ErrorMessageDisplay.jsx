import "./style.css";
import PropTypes from "prop-types";

const ErrorMessageDisplay = ({ message }) => {
  if (!message) {
    return;
  }
  return (
    <div className="error" data-testid="errorMessageDisplay">
      <p>{message}</p>
    </div>
  );
};

ErrorMessageDisplay.propTypes = {
  message: PropTypes.string.isRequired,
};

export default ErrorMessageDisplay;
