import axios from "axios";

const baseUrl = "https://studies.cs.helsinki.fi/restcountries/api";

const getAllCountries = async () => {
  const endpoint = "/all";
  const response = await axios.get(baseUrl + endpoint);
  return response.data;
};

const getSpecificCountry = async (country) => {
  if (!country) return;
  const endpoint = `/name/${country}`;
  const url = baseUrl + endpoint;
  console.log(url);
  const response = await axios.get(url);
  return response.data;
};

const restCountriesApi = {
  getAllCountries,
  getSpecificCountry,
};

export default restCountriesApi;
