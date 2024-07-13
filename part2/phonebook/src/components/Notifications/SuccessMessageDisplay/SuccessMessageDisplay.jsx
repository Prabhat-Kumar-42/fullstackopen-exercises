import "./style.css";

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

export default SuccessMessageDisplay;
