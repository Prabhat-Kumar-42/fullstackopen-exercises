import { useState } from "react";

const useField = (name, type) => {
  const [value, setValue] = useState("");
  const onChange = (event) => {
    const newValue = event.target.value;
    setValue(newValue);
  };
  const clearField = () => setValue("");

  return {
    name,
    type,
    value,
    onChange,
    clearField,
  };
};

export default useField;
