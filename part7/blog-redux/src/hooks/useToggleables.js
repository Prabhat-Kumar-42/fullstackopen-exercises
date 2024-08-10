import { useDispatch, useSelector } from "react-redux";
import { toggleablesActions } from "../redux/toggleableComponents/toggleablesSlice";

const useToggleables = () => {
  const toggleables = useSelector((state) => state.toggleables);
  const dispatch = useDispatch();

  const getRef = (toggleRef) => toggleables[toggleRef];

  const createRef = (toggleRef, value) => {
    if (toggleRef in toggleables) return false;
    const payload = { toggleRef, value };
    dispatch(toggleablesActions.addState(payload));
    return true;
  };

  const hideToggable = (toggleRef) => {
    const payload = { toggleRef };
    dispatch(toggleablesActions.toggleOffState(payload));
  };

  const showToggable = (toggleRef) => {
    const payload = { toggleRef };
    dispatch(toggleablesActions.toggleOnState(payload));
  };

  return {
    toggleables,
    getRef,
    createRef,
    showToggable,
    hideToggable,
  };
};

export default useToggleables;
