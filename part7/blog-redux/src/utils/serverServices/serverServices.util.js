import axios from "axios";
import getAuthKey from "../getAuthKey.util";

const serverServices = (baseUrl) => {
  if (baseUrl[baseUrl.length - 1] !== "/") baseUrl += "/";

  const getAuthToken = () => {
    const authKey = getAuthKey();
    return authKey ? `Bearer ${authKey}` : null;
  };

  const getHeaders = () => {
    const authToken = getAuthToken();
    return authToken ? { Authorization: authToken } : {};
  };

  const getAllResource = async () => {
    const response = await axios.get(baseUrl, { headers: getHeaders() });
    return response.data;
  };

  const create = async (payload) => {
    const response = await axios.post(baseUrl, payload, {
      headers: getHeaders(),
    });
    return response.data;
  };

  const update = async (resource, payload) => {
    const url = baseUrl + resource.id;
    const response = await axios.put(url, payload, { headers: getHeaders() });
    return response.data;
  };

  const remove = async (resource) => {
    const url = baseUrl + resource.id;
    const response = await axios.delete(url, { headers: getHeaders() });
    return response.data;
  };

  const getSpecificResource = async (resource) => {
    const url = baseUrl + resource.id;
    const response = await axios.get(url, { headers: getHeaders() });
    return response.data;
  };

  return {
    create,
    update,
    remove,
    getSpecificResource,
    getAllResource,
  };
};

export default serverServices;
