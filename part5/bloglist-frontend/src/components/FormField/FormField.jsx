import PropTypes from "prop-types";

const FormField = ({
  title,
  inputType,
  fieldValue,
  onEvent,
  handleEvent,
  testid,
}) => {
  return (
    <div>
      <label>{title}: </label>
      <input
        type={inputType}
        value={fieldValue}
        {...{ [onEvent]: handleEvent }}
        data-testid={testid}
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
  testid: PropTypes.string.isRequired,
};

export default FormField;
