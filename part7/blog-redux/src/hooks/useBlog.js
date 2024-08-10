import { useSelector } from "react-redux";

const useBlog = () => {
  const blogInfo = useSelector((state) => state.blogs);
  return blogInfo;
};

export default useBlog;
