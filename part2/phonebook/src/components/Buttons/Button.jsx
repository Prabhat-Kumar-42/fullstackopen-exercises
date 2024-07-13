const Button = ({ text, type, eventType, eventHandler }) => {
  return (
    <button type={type} {...{ [eventType]: eventHandler }}>
      {text}
    </button>
  );
};

export default Button;
