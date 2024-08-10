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

  const update = async (payload) => {
    const response = await axios.put(baseUrl, payload, axiosOptions);
    return response.data;
  };

  const remove = async (payload) => {
    const url = baseUrl + payload.id;
    const response = await axios.delete(url, payload, axiosOptions);
    return response.data;
  };

  const getSpecificResource = async (payload) => {
    const url = baseUrl + payload.id;
    const response = await axios.post(url, payload, axiosOptions);
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
