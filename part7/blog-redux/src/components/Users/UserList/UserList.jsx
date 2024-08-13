import { Link } from "react-router-dom";
import useUser from "../../../hooks/useUser";
import CONSTS from "../../../utils/config.util";

const UserList = () => {
  const { userList } = useUser();
  const keyPrefix = "userList";

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Users</h2>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-6 py-3 text-left text-gray-600 font-medium uppercase tracking-wider">
              Users
            </th>
            <th className="px-6 py-3 text-left text-gray-600 font-medium uppercase tracking-wider">
              <strong>Blogs Created</strong>
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {userList.map((user) => (
            <tr key={`${keyPrefix}-${user.id}`}>
              <td className="px-6 py-4 whitespace-nowrap">
                <Link
                  to={`${CONSTS.clientUrls.users}/${user.id}`}
                  className="text-blue-600 hover:text-blue-800"
                >
                  {user.name}
                </Link>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-gray-600">
                {user.blogs.length}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
