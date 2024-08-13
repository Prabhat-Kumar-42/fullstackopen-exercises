import useNotification from "../../../hooks/useNotification";

const ErrorMessageDisplay = () => {
  const { errorMessage: message } = useNotification();
  if (!message) {
    return null;
  }

  return (
    <div
      data-testid="errorMessageDisplay"
      className="fixed top-0 right-0 m-4 p-4 bg-red-100 border border-red-300 text-red-700 rounded-lg shadow-lg"
    >
      <p>{message}</p>
    </div>
  );
};

export default ErrorMessageDisplay;
