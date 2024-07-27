import "./style.css";
import PropTypes from "prop-types";

const SuccessMessageDisplay = ({ message }) => {
  if (!message) {
    return;
  }
  return (
    <div className="success">
      <p>{message}</p>
    </div>
  );
};

SuccessMessageDisplay.propTypes = {
  message: PropTypes.string.isRequired,
};

export default SuccessMessageDisplay;
