const FeedbackButton = ({ handleClick, text }) => {
  return <button onClick={handleClick}>{text}</button>;
};

export default FeedbackButton;
