import axios from "axios";

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

const userServices = {
  login,
  signup,
};

export default userServices;
