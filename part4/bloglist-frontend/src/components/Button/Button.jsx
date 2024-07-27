const Button = ({ title, buttonType, onEvent, eventHandler }) => {
  return (
    <button type={buttonType} {...{ [onEvent]: eventHandler }}>
      {title}
    </button>
  );
};

export default Button;
