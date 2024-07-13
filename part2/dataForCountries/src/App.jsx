import { useEffect, useState } from "react";
import SearchField from "./components/SearchForm/SearchForm";
import resCountriesApiServices from "./services/resCountriesApi.services";
import DisplayCountriesList from "./components/DisplayCountries/DisplayCountriesList";

const filterCountry = (countryFilter, countriesList) => {
  const newCountriesList = countriesList.filter((country) =>
    country.name.common.toLowerCase().includes(countryFilter.toLowerCase()),
  );
  return newCountriesList;
};

const App = () => {
  const [country, setCountry] = useState("");
  const [countriesList, setCountriesList] = useState([]);
  const [selectedCountries, setSelectedCountries] = useState([]);

  useEffect(() => {
    const response = resCountriesApiServices.getAllCountries();
    response.then((responseData) => {
      const newCountriesList = responseData;
      setCountriesList(newCountriesList);
    });
  }, []);

  const handleCountry = (event) => {
    const searchedCountry = event.target.value;
    setCountry(searchedCountry);
    setSelectedCountries([]);
  };

  const handleSelectedCountry = (country) => {
    const countryName = country.name.common;

    if (selectedCountries.includes(countryName)) {
      const newSelectedCountry = selectedCountries.filter(
        (contName) => contName != countryName,
      );
      setSelectedCountries(newSelectedCountry);
      return;
    }
    const newSelectedCountry = [...selectedCountries, countryName];
    setSelectedCountries(newSelectedCountry);
  };

  const fieldTitle = "find countries";
  const eventType = "onChange";
  const countriesToDisplay = !country
    ? countriesList
    : filterCountry(country, countriesList);
  return (
    <div>
      <SearchField
        fieldTitle={fieldTitle}
        fieldValue={country}
        eventType={eventType}
        eventHandler={handleCountry}
      />
      {!countriesList.length && <p>Loading... Please Wait :D</p>}
      {!country && countriesList.length > 0 && <p>Enter a search query</p>}
      {country && (
        <DisplayCountriesList
          countriesList={countriesToDisplay}
          selectedCountries={selectedCountries}
          handleSelectedCountry={handleSelectedCountry}
        />
      )}
    </div>
  );
};

export default App;
