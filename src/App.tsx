import axios from "axios";
import { useEffect, useState } from "react";
import Country from "./components/Country";
import Loading from "./components/Loading";
import { CountryType } from "./types";

const App = () => {
  const [countries, setCountries] = useState<CountryType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const getCountries = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get<CountryType[]>(
        "https://restcountries.eu/rest/v2/all"
      );
      setCountries(data);
    } catch {
      console.log("Error fetching countries");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCountries();
  }, []);

  return (
    <div>
      <Loading loading={loading}>
        {countries.map((country) => (
          <Country key={country.name} country={country} />
        ))}
      </Loading>
    </div>
  );
};

export default App;
