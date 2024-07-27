import axios from "axios";
const baseUrl = "/api/blogs/";

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

const updateBlog = async (blog, payload) => {
  const url = baseUrl + blog.id;
  const response = await axios.put(url, payload, {
    headers: { Authorization: authToken },
  });
  return response.data;
};

const deleteBlog = async (blog) => {
  const url = baseUrl + blog.id;
  const response = await axios.delete(url, {
    headers: { Authorization: authToken },
  });
  return response.status;
};

export default {
  getAll,
  setToken,
  postBlog,
  updateBlog,
  deleteBlog,
};
