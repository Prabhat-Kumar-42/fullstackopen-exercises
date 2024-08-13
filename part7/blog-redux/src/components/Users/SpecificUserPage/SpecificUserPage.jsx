import { Link, useMatch } from "react-router-dom";
import useUser from "../../../hooks/useUser";
import CONSTS from "../../../utils/config.util";

const SpecificUserPage = () => {
  const match = useMatch(CONSTS.clientUrls.specificUser);
  const { userList } = useUser();

  if (!userList.length) return null;
  const user = !match
    ? null
    : userList.find((user) => user.id === match.params.id);

  if (!user)
    return (
      <div className="p-6 text-center text-red-500">Cannot find that user</div>
    );

  const baseKey = `specificUserPage/${user.id}`;
  const baseUrl = CONSTS.clientUrls.blogs;

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">{user.name}</h2>
      <h4 className="text-xl font-semibold text-gray-600 mb-2">Added Blogs</h4>
      {user.blogs.length === 0 ? (
        <p className="text-gray-500">This user has not added any blogs yet.</p>
      ) : (
        <ul className="list-disc list-inside space-y-2">
          {user.blogs.map((blog) => (
            <li key={`${baseKey}/${blog.id}`}>
              <Link
                to={`${baseUrl}/${blog.id}`}
                className="text-blue-600 hover:text-blue-800"
              >
                {blog.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SpecificUserPage;
