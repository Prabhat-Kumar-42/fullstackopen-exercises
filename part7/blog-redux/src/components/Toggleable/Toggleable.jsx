import { useEffect } from "react";
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

  const handleShowVisibility = () => {
    showToggable(toggleRef);
  };

  const handleHideVisibility = () => {
    hideToggable(toggleRef);
  };

  return (
    <div className="relative">
      {/* Show Button */}
      <div
        className={`absolute top-0 left-0 w-full ${visible ? "opacity-0 pointer-events-none" : "opacity-100 pointer-events-auto"} transition-opacity duration-300`}
        style={{ marginBottom: visible ? "0" : "1rem" }}
      >
        <Button
          type="button"
          text={toDisplayTitle}
          onClick={handleShowVisibility}
          className="w-full bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-lg py-2"
        />
      </div>

      {/* Content */}
      <div
        className={`transition-opacity duration-300 ${visible ? "opacity-100 block" : "opacity-0 hidden"}`}
      >
        <div className="p-4 bg-white rounded-lg mb-4">{children}</div>
        <Button
          type="button"
          text={toHideTitle}
          onClick={handleHideVisibility}
          className="w-full bg-gray-500 text-white hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-300 rounded-lg py-2"
        />
      </div>
    </div>
  );
};

export default Toggleable;
