import PropTypes from "prop-types";

const Button = ({ title, buttonType, onEvent, eventHandler, testid }) => {
  return (
    <button
      type={buttonType}
      {...{ [onEvent]: eventHandler }}
      data-testid={testid}
    >
      {title}
    </button>
  );
};
Button.propTypes = {
  title: PropTypes.string.isRequired,
  buttonType: PropTypes.string.isRequired,
  onEvent: PropTypes.string.isRequired,
  eventHandler: PropTypes.func.isRequired,
  testid: PropTypes.string.isRequired,
};
export default Button;
