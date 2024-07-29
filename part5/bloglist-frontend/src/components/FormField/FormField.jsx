import PropTypes from "prop-types";

const FormField = ({ title, inputType, fieldValue, onEvent, handleEvent }) => {
  return (
    <div>
      <label>{title}: </label>
      <input
        type={inputType}
        value={fieldValue}
        {...{ [onEvent]: handleEvent }}
      />
    </div>
  );
};

FormField.propTypes = {
  title: PropTypes.string.isRequired,
  inputType: PropTypes.string.isRequired,
  fieldValue: PropTypes.any,
  onEvent: PropTypes.string.isRequired,
  handleEvent: PropTypes.func.isRequired,
};

export default FormField;
