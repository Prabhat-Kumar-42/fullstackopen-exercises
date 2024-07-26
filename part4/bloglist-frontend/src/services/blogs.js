import axios from "axios";
const baseUrl = "/api/blogs";

let authToken = null;

const setToken = (newToken) => (authToken = newToken);

const getAll = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

export default { getAll, setToken };

