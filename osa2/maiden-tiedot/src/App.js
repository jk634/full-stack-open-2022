import { useState, useEffect } from 'react';
import axios from 'axios';
import Filter from './components/Filter';
import Countries from './components/Countries';

const App = () => {
  const [countries, setCountries] = useState([]);
  const [newFilter, setNewFilter] = useState('');
  const [country, setCountry] = useState([]);

  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all').then((res) => {
      setCountries(res.data);
    });
  }, []);

  const handleFilterChange = (event) => {
    setNewFilter(event.target.value);
    emptyCountry();
  };

  const handleClick = (cntr) => {
    setCountry(new Array(cntr));
  };

  const emptyCountry = () => {
    if (country.length > 0) {
      var array = [...country];
      array.splice(0, 1);
      setCountry(array);
    }
  };

  return (
    <div>
      <Filter handleFilterChange={handleFilterChange} />
      <Countries
        countries={countries}
        newFilter={newFilter}
        handleClick={handleClick}
        country={country}
        emptyCountry={emptyCountry}
      />
    </div>
  );
};

export default App;
