import { useEffect, useState } from "react";
import restCountriesApi from "../utils/restCountriesApi.util";

const useCountry = (name) => {
  const [country, setCountry] = useState(null);

  useEffect(() => {
    if (!name) {
      setCountry(null);
      return;
    }
    setCountry(null);
    const request = restCountriesApi.getSpecificCountry(name);
    request
      .then((responseData) => {
        const found = true;
        const data = responseData;
        const payload = { found, data };
        setCountry(payload);
      })
      .catch(() => {
        setCountry({ found: false });
      });
  }, [name]);

  return country;
};

export default useCountry;
