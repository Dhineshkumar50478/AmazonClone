import React, { useState, useEffect } from 'react';
import countryData from '../assets/CountryCodes.json';

const CountrySelect = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    // Using imported JSON data directly
    setCountries(countryData);
  }, []);

  return (
    <div>
      <select id="country-select">
        {countries.map((country, index) => (
          <option key={index} value={country.dial_code}>
            {country.code} ({country.dial_code})
          </option>
        ))}
      </select>
    </div>
  );
};

export default CountrySelect;
