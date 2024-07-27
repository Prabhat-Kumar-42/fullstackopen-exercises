import { forwardRef, useImperativeHandle, useState } from "react";
import Button from "../Button/Button";

const Toggleable = forwardRef((props, ref) => {
  const { toDisplayTitle, toHideTitle, children } = props;
  const [visible, setVisible] = useState(false);

  const hideVisibility = { display: visible ? "none" : "" };
  const showVisibility = { display: visible ? "" : "none" };

  const handleShowVisibility = () => {
    setVisible(true);
  };
  const handleHideVisibility = () => {
    setVisible(false);
  };

  useImperativeHandle(ref, () => {
    return {
      showVisibility: handleShowVisibility,
      hideVisibility: handleHideVisibility,
    };
  });

  return (
    <>
      <div style={hideVisibility}>
        <Button
          buttonType={"submit"}
          title={toDisplayTitle}
          onEvent={"onClick"}
          eventHandler={handleShowVisibility}
        />
      </div>
      <div style={showVisibility}>
        {children}
        <Button
          buttonType={"submit"}
          title={toHideTitle}
          onEvent={"onClick"}
          eventHandler={handleHideVisibility}
        />
      </div>
    </>
  );
});

Toggleable.displayName = "Toggleable";

export default Toggleable;
