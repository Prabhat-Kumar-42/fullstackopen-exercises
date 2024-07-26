const FormField = ({ title, inputType, onEvent, handleEvent }) => {
  return (
    <div>
      {title}: <input type={inputType} {...{ [onEvent]: handleEvent }} />
    </div>
  );
};

export default FormField;
