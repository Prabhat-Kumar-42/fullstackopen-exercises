import axios from "axios";
const baseUrl = "/api/blogs";

let authToken = "";

const setToken = (newToken) => {
  authToken = `Bearer ${newToken}`;
};

const getAll = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

const postBlog = async (payload) => {
  const response = await axios.post(baseUrl, payload, {
    headers: { Authorization: authToken },
  });
  return response.data;
};

export default { getAll, setToken, postBlog };
