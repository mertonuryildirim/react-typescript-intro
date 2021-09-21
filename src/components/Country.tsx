import { CountryType } from "../types";

interface ICountryProps {
  country: CountryType;
}

const Country: React.FC<ICountryProps> = (props) => {
  const { country } = props;
  return (
    <p>
      {country.name} - {country.capital}
    </p>
  );
};

export default Country;
