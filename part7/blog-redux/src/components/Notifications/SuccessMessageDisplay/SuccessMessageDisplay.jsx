import useNotification from "../../../hooks/useNotification";

const SuccessMessageDisplay = () => {
  const { successMessage: message } = useNotification();
  if (!message) {
    return null;
  }

  return (
    <div
      data-testid="successMessageDisplay"
      className="fixed top-0 right-0 m-4 p-4 bg-green-100 border border-green-300 text-green-700 rounded-lg shadow-lg"
    >
      <p>{message}</p>
    </div>
  );
};

export default SuccessMessageDisplay;
