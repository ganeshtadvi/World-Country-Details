import { getCountryData } from "../api/postApi";
import { useEffect, useState, useTransition } from "react";
import { Loader } from "../components/UI/Loader.jsx";
import { CountryCard } from "../components/Layout/CountryCard.jsx";
import { SearchFilter } from "../components/UI/SearchFilter.jsx";
export const Country = () => {
  const [isPending, startTransition] = useTransition();
  
  const [countries, setCountries] = useState([]);
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const res = await getCountryData();
      startTransition(() => {
        setCountries(res.data);
      });
    };

    fetchData();
  }, []);

  if (isPending) return <Loader />;

  const searchCountry = (country) => {
    if (search) {
      return country.name.common.toLowerCase().includes(search.toLowerCase());
    }
    return country;
  };
  const filterRegion = (country) => {
    if (filter === "all") return country;
    return country.region === filter;
  };

  const filterCountries = countries.filter((country) => {
    return searchCountry(country) && filterRegion(country);
  });

  return (
    <section className="country-section">
      <SearchFilter
        search={search}
        setSearch={setSearch}
        filter={filter}
        setFilter={setFilter}
        countries={countries}
        setCountries={setCountries}
      />
      <ul className="grid grid-four-cols">
        {filterCountries.map((curCountry, index) => {
          return <CountryCard country={curCountry} key={index} />;
        })}
      </ul>
    </section>
  );
};
