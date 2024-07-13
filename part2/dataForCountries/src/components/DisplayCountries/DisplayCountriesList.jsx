import Button from "../Buttons/Button";
import DisplaySpecificCountry from "./DisplaySpecificCountry";

const DisplayCountriesList = ({
  countriesList,
  selectedCountries,
  handleSelectedCountry,
}) => {
  if (countriesList.length > 10) {
    return <p>Too many matches, specify another filter</p>;
  }
  if (countriesList.length == 1) {
    return <DisplaySpecificCountry country={countriesList[0]} />;
  }

  const getButtonText = (countryName) =>
    selectedCountries.includes(countryName) ? "hide" : "show";
  const showButtonType = "submit";
  const showButtonEventType = "onClick";

  return (
    <div>
      {countriesList.map((country) => (
        <div key={country.name.common}>
          <p>
            {country.name.common}{" "}
            <Button
              text={getButtonText(country.name.common)}
              type={showButtonType}
              eventType={showButtonEventType}
              eventHandler={() => handleSelectedCountry(country)}
            />
          </p>
          {selectedCountries.some(
            (countryName) => countryName === country.name.common,
          ) && <DisplaySpecificCountry country={country} />}
        </div>
      ))}
    </div>
  );
};

export default DisplayCountriesList;
