import axios from "axios";

export const getCountryData = () => {
  return axios.get(
    "https://restcountries.com/v3.1/all?fields=name,population,region,capital,flags",
  );
};

export const getSingleCountry = (countryName) => {
  return axios.get(
    `https://restcountries.com/v3.1/name/${countryName}?fullText=true&fields=name,population,region,subregion,capital,tld,currencies,languages,borders,flags`,
  );
};
