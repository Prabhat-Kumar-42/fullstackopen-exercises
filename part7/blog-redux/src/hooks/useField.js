import { useState } from "react";

const useField = (name, type, autoComplete) => {
  const [value, setValue] = useState("");

  const onChange = (event) => {
    setValue(event.target.value);
  };

  const clearField = () => {
    setValue("");
  };

  return {
    name,
    value,
    autoComplete,
    type,
    onChange,
    clearField,
  };
};

export default useField;
