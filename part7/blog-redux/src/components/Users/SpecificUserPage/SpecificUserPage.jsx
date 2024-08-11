import { useMatch } from "react-router-dom";
import useUser from "../../../hooks/useUser";
import CONSTS from "../../../utils/config.util";

const SpecificUserPage = () => {
  const match = useMatch(CONSTS.clientUrls.specificUser);
  const { userList } = useUser();
  if (!userList.length) return null;
  const user = !match
    ? null
    : userList.find((user) => user.id === match.params.id);
  const baseKey = `specificUserPage/${user.id}`;
  return (
    <div>
      <h2>{user.name}</h2>
      <h4>added blogs</h4>
      <ul>
        {user.blogs.map((blog) => (
          <li key={`${baseKey}/${blog.id}`}>{blog.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default SpecificUserPage;
