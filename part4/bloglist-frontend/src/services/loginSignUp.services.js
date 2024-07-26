import axios from "axios";

const login = async (username, password) => {
  const loginUrl = "/api/user/login";
  const payload = { username, password };
  const response = await axios.post(loginUrl, payload);
  return response.data;
};

const signup = async (username, name, password) => {
  const signupUrl = "/api/user/signup";
  const payload = { username, name, password };
  const response = await axios.post(signupUrl, payload);
  return response.data;
};

export default { login, signup };
