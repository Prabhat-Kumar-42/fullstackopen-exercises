import axios from "axios";
import getAuthKey from "../getAuthKey.util";

const serverServices = (baseUrl) => {
  if (baseUrl[baseUrl.length - 1] !== "/") baseUrl += "/";

  const authKey = getAuthKey();
  const authToken = authKey ? `Bearer ${authKey}` : null;

  const axiosOptions = {};
  if (authToken)
    axiosOptions.headers = {
      Authorization: authToken,
    };
  const getAllResource = async () => {
    const response = await axios.get(baseUrl, axiosOptions);
    return response.data;
  };

  const create = async (payload) => {
    const response = await axios.post(baseUrl, payload, axiosOptions);
    return response.data;
  };

  const update = async (resource, payload) => {
    const url = baseUrl + resource.id;
    const response = await axios.put(url, payload, axiosOptions);
    return response.data;
  };

  const remove = async (resource) => {
    const url = baseUrl + resource.id;
    const response = await axios.delete(url, axiosOptions);
    return response.data;
  };

  const getSpecificResource = async (resource) => {
    const url = baseUrl + resource.id;
    const response = await axios.get(url, axiosOptions);
    return response.data;
  };

  //TODO: remove baseUrl from returnd values
  return {
    baseUrl,
    create,
    update,
    remove,
    getSpecificResource,
    getAllResource,
  };
};

export default serverServices;
