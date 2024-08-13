const InputField = ({ props }) => {
  const { name, className, clearField, ...rest } = props; // Extract className and other props

  return (
    <div className="flex flex-col space-y-2">
      <label htmlFor={name} className="text-gray-700 font-medium">
        {name}
      </label>
      <input
        id={name}
        {...rest}
        className={`border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors duration-200 ease-in-out ${className}`}
      />
    </div>
  );
};

export default InputField;
