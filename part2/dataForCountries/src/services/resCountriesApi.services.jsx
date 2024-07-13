import axios from "axios";

const baseUrl = "https://studies.cs.helsinki.fi/restcountries/api";

const getAllCountries = () => {
  const endpoint = "/all";
  const request = axios.get(baseUrl + endpoint);
  return request.then((response) => response.data);
};

const getSpecificCountry = (country) => {
  const endpoint = `/name/${country}`;
  const request = axios.get(baseUrl + endpoint);
  return request.then((response) => response.data);
};

export default {
  getAllCountries,
  getSpecificCountry,
};
