import { useState, useEffect } from 'react';
import axios from 'axios';
import Filter from './components/Filter';
import Countries from './components/Countries';

const App = () => {
  const [countries, setCountries] = useState([]);
  const [newFilter, setNewFilter] = useState('');

  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all').then((res) => {
      setCountries(res.data);
    });
  }, []);

  const handleFilterChange = (event) => setNewFilter(event.target.value);

  return (
    <div>
      <Filter handleFilterChange={handleFilterChange} />
      <Countries countries={countries} newFilter={newFilter} />
    </div>
  );
};

export default App;
