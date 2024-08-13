import axios from "axios";
import getAuthKey from "./getAuthKey.util";

const login = async (username, password) => {
  const loginUrl = "/api/users/login";
  const payload = { username, password };
  const response = await axios.post(loginUrl, payload);
  return response.data;
};

const signup = async (username, name, password) => {
  const signupUrl = "/api/users/signup";
  const payload = { username, name, password };
  const response = await axios.post(signupUrl, payload);
  return response.data;
};

const getAllUser = async () => {
  const url = "/api/users";
  const authKey = getAuthKey();
  const authToken = `Bearer ${authKey}`;
  const axiosOptions = {
    headers: {
      Authorization: authToken,
    },
  };
  const response = await axios.get(url, axiosOptions);
  return response.data.users;
};

const userServices = {
  login,
  signup,
  getAllUser,
};

export default userServices;
