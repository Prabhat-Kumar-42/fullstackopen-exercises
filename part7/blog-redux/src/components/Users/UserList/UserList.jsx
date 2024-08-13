import { Link } from "react-router-dom";
import useUser from "../../../hooks/useUser";
import CONSTS from "../../../utils/config.util";

const UserList = () => {
  const { userList } = useUser();
  const keyPrefix = "userList";

  return (
    <div>
      <h2>Users</h2>
      <table>
        <thead>
          <tr>
            <th>users</th>
            <th>
              <strong>blogs created</strong>
            </th>
          </tr>
        </thead>
        <tbody>
          {userList.map((user) => (
            <tr key={`${keyPrefix}-${user.id}`}>
              <td>
                <Link to={`${CONSTS.clientUrls.users}/${user.id}`}>
                  {user.name}
                </Link>
              </td>
              <td>{user.blogs.length}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
