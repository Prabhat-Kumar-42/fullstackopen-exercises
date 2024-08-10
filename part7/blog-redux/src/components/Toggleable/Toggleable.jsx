import { useEffect, useState } from "react";
import Button from "../Button/Button";
import useToggleables from "../../hooks/useToggleables";

const Toggleable = ({
  toDisplayTitle,
  toHideTitle,
  toggleRef,
  defaultToggleValue,
  children,
}) => {
  const { getRef, createRef, showToggable, hideToggable } = useToggleables();

  useEffect(() => {
    createRef(toggleRef, defaultToggleValue);
  }, [createRef, toggleRef, defaultToggleValue]);

  const visible = getRef(toggleRef);

  const hideVisibility = { display: visible ? "none" : "" };
  const showVisibility = { display: visible ? "" : "none" };

  const handleShowVisibility = () => {
    showToggable(toggleRef);
  };
  const handleHideVisibility = () => {
    hideToggable(toggleRef);
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
