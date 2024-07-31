import { forwardRef, useImperativeHandle, useState } from "react";
import PropTypes from "prop-types";
import Button from "../Button/Button";

const Toggleable = forwardRef((props, ref) => {
  const {
    toDisplayTitle,
    toHideTitle,
    testIdShowButton,
    testIdHideButton,
    children,
  } = props;
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
          testid={testIdShowButton}
        />
      </div>
      <div style={showVisibility}>
        {children}
        <Button
          buttonType={"submit"}
          title={toHideTitle}
          onEvent={"onClick"}
          eventHandler={handleHideVisibility}
          testid={testIdHideButton}
        />
      </div>
    </>
  );
});

Toggleable.propTypes = {
  toDisplayTitle: PropTypes.string.isRequired,
  toHideTitle: PropTypes.string.isRequired,
  testIdShowButton: PropTypes.string.isRequired,
  testIdHideButton: PropTypes.string.isRequired,
};

Toggleable.displayName = "Toggleable";

export default Toggleable;
