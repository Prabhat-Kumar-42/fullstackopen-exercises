import { useState } from "react";

const useField = (name, type) => {
  const [value, setValue] = useState("");
  const onChange = (event) => {
    const newValue = event.target.value;
    setValue(newValue);
  };

  return {
    name,
    type,
    value,
    onChange,
  };
};

export default useField;
