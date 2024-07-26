const Button = ({ title, buttonType, onEvent, eventHandler }) => {
  return (
    <div>
      <button type={buttonType} {...{ [onEvent]: eventHandler }}>
        {title}
      </button>
    </div>
  );
};

export default Button;
