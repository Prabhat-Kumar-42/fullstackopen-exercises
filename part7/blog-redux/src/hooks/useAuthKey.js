import { useSelector } from "react-redux";

const useAuthKey = () => {
  const userInfo = useSelector((state) => state.user);
  const filterAuthAttribute = ({ authKey, ...rest }) => authKey;
  return filterAuthAttribute(userInfo);
};
export default useAuthKey;
