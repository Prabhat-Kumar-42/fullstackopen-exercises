import { useState } from "react";
import Button from "../Button/Button";

const Toggleable = ({ toDisplayTitle, toHideTitle, children }) => {
  const [visible, setVisible] = useState(false);

  const hideVisibility = { display: visible ? "none" : "" };
  const showVisibility = { display: visible ? "" : "none" };

  const handleShowVisibility = () => {
    setVisible(true);
  };
  const handleHideVisibility = () => {
    setVisible(false);
  };

  return (
    <>
      <div style={hideVisibility}>
        <Button
          type={"submit"}
          text={toDisplayTitle}
          onClick={handleShowVisibility}
        />
      </div>
      <div style={showVisibility}>
        {children}
        <Button
          type={"submit"}
          text={toHideTitle}
          onClick={handleHideVisibility}
        />
      </div>
    </>
  );
};

export default Toggleable;
