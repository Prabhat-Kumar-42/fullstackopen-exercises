import axios from "axios";
import { useEffect, useMemo, useState } from "react";
import useAuthKey from "./useAuthKey";

const useResources = (baseUrl) => {
  const [resources, setResources] = useState(baseUrl);
  if (baseUrl[baseUrl.length - 1] !== "/") baseUrl += "/";
  const authKey = useAuthKey();
  const authToken = authKey ? `Bearer: ${authKey}` : null;

  const axiosOptions = useMemo(() => {
    const options = {};
    if (authToken) {
      options.headers = {
        Authorization: authToken,
      };
    }
    return options;
  }, [authToken]);

  useEffect(() => {
    const fetchAllResources = async () => {
      const fetchedResources = await axios.get(baseUrl, axiosOptions);
      setResources(fetchedResources);
    };
    fetchAllResources();
  }, [baseUrl, axiosOptions]);

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

  return {
    resources,
    create,
    update,
    remove,
    getSpecificResource,
  };
};

export default useResources;
