import DisplayWeather from "../DisplayWeather/DisplayWeather";
import Header from "../Header/Header";

const DisplaySpecificCountry = ({ country }) => {
  if (!country) return;
  const countryName = country.name.common;
  const capital = country.capital;
  const capitalLat = country.capitalInfo.latlng[0];
  const capitalLon = country.capitalInfo.latlng[1];
  const area = country.area;
  const flagUrl = country.flags.png || country.flags.svg;
  const imageAltText = country.flags.alt;
  const languages = Object.values(country.languages);
  const languageHeading = "languages:";

  return (
    <div>
      <Header heading={countryName} type={1} />
      <p>capital: {capital}</p>
      <p>area: {area}</p>
      <Header heading={languageHeading} type={3} />
      <ul>
        {languages.map((lang) => (
          <li key={lang}>{lang}</li>
        ))}
      </ul>
      <img src={flagUrl} alt={imageAltText} />
      <DisplayWeather placeName={capital} lat={capitalLat} lon={capitalLon} />
    </div>
  );
};

export default DisplaySpecificCountry;
