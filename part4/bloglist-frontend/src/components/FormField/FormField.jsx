const FormField = ({ title, inputType, fieldValue, onEvent, handleEvent }) => {
  return (
    <div>
      {title}:{" "}
      <input
        type={inputType}
        value={fieldValue}
        {...{ [onEvent]: handleEvent }}
      />
    </div>
  );
};

export default FormField;
