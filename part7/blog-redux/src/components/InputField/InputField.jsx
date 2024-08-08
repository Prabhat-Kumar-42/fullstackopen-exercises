const InputField = ({ props }) => {
  const { name } = props;
  const filterAttributes = ({ clearField, ...rest }) => rest;
  return (
    <div>
      <label htmlFor={name}>{name}: </label>
      <input {...filterAttributes(props)} />
    </div>
  );
};

export default InputField;
