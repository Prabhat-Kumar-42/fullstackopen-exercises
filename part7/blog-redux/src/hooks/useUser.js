import { useSelector } from "react-redux";

const useUser = () => {
  const userInfo = useSelector((state) => state.user);
  const filterUserAttribute = ({ authKey, ...rest }) => rest;
  return {
    ...filterUserAttribute(userInfo),
  };
};
export default useUser;
