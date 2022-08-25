import Country from './Country';

const Countries = (props) => {
  let countries = props.countries;
  let newFilter = props.newFilter;

  const filteredCountries = countries.filter(
    (country) =>
      country.name.common.toUpperCase().startsWith(newFilter.toUpperCase()) ===
      true
  );

  const showCountries = () => {
    if (filteredCountries.length > 10) {
      return <p>too many matches, specify another filter</p>;
    } else if (filteredCountries.length <= 10 && filteredCountries.length > 1) {
      return (
        <ul>
          {filteredCountries.map((cntr) => (
            <li key={cntr.flag}>{cntr.name.common}</li>
          ))}
        </ul>
      );
    } else if (filteredCountries.length === 1) {
      return <Country country={filteredCountries[0]} />;
    }
  };

  return <div>{showCountries()}</div>;
};

export default Countries;
