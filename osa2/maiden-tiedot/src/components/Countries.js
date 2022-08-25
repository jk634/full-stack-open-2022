import Country from './Country';
import ButtonShow from './ButtonShow';

const Countries = (props) => {
  let countries = props.country.length < 1 ? props.countries : props.country;
  let newFilter = props.newFilter;

  const filteredCountries = countries.filter(
    (country) =>
      country.name.common.toUpperCase().includes(newFilter.toUpperCase()) ===
      true
  );

  const showCountries = () => {
    if (filteredCountries.length > 10) {
      return <p>too many matches, specify another filter</p>;
    } else if (filteredCountries.length <= 10 && filteredCountries.length > 1) {
      return (
        <ul>
          {filteredCountries.map((country) => (
            <li key={country.flag}>
              {country.name.common}{' '}
              <ButtonShow
                handleClick={() => props.handleClick(country)}
                text='show'
              />
            </li>
          ))}
        </ul>
      );
    } else if (filteredCountries.length === 1) {
      return (
        <Country
          handleCountryOpen={props.handleCountryOpen}
          country={filteredCountries[0]}
        />
      );
    }
  };

  return <div>{showCountries()}</div>;
};

export default Countries;
