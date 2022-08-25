const Country = (props) => {
  let country = props.country;
  return (
    <div>
      <h1>{country.name.common}</h1>
      <p>capital {country.capital}</p>
      <p>area {country.area}</p>
      <h3>languages</h3>
      <ul>
        {Object.values(country.languages).map((v) => (
          <li key={Math.floor(Math.random() * 10000)}>{v}</li>
        ))}
      </ul>
      <img src={Object.values(country.flags)[0]} alt='flag'></img>
    </div>
  );
};

export default Country;
