import PropTypes from "prop-types";

const Button = ({ title, buttonType, onEvent, eventHandler }) => {
  return (
    <button type={buttonType} {...{ [onEvent]: eventHandler }}>
      {title}
    </button>
  );
};
Button.propTypes = {
  title: PropTypes.string.isRequired,
  buttonType: PropTypes.string.isRequired,
  onEvent: PropTypes.string.isRequired,
  eventHandler: PropTypes.func.isRequired,
};
export default Button;
