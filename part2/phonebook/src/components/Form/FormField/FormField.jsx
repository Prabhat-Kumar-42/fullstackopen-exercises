const FormField = ({ fieldTitle, fieldValue, eventHandler, eventType }) => {
  return (
    <div>
      {fieldTitle}:{" "}
      <input value={fieldValue} {...{ [eventType]: eventHandler }} />
    </div>
  );
};

export default FormField;
