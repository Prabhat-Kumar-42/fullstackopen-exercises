import { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import useUser from "../../hooks/useUser";
import CONSTS from "../../utils/config.util";

const AutoRedirect = ({ redirectTo, children }) => {
  const navigate = useNavigate();
  const { user, status } = useUser();
  useEffect(() => {
    if (user || status === CONSTS.asyncThunkStatus.SUCCEEDED) {
      return navigate(redirectTo);
    } else if (status === CONSTS.asyncThunkStatus.FAILED) {
      // TODO: nofity for failed status
    }
  }, [status]);
  return !user ? children : <Navigate to={redirectTo} />;
};

export default AutoRedirect;
