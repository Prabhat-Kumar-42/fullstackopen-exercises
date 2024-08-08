import { useState } from "react";

const useField = (type) => {
  const [value, setValue] = useState("");

  const onChange = (event) => {
    setValue(event.target.value);
  };

  const clearField = () => {
    setValue("");
  };

  return {
    value,
    type,
    onChange,
    clearField,
  };
};

export default useField;
