import axios from "axios";

const baseUrl = "/api/persons";

const getAllUser = () => {
  const request = axios.get(baseUrl);
  return request.then((response) => response.data);
};

const getUser = (user) => {
  const id = user.id;
  const request = axios.get(`${baseUrl}/${id}`);
  return request.then((response) => response.data);
};

const createUser = (user) => {
  const request = axios.post(baseUrl, user);
  return request.then((response) => response.data);
};

const deleteUser = (user) => {
  const id = user.id;
  const request = axios.delete(`${baseUrl}/${id}`);
  return request.then((response) => response.data);
};

const putUser = (user) => {
  const id = user.id;
  delete user.id;
  const request = axios.put(`${baseUrl}/${id}`, user);
  return request.then((response) => response.data);
};

export default {
  getAllUser,
  getUser,
  createUser,
  deleteUser,
  putUser,
};
