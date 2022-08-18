import { useState } from 'react';
import PersonForm from './components/PersonForm';
import Filter from './components/Filter';
import Persons from './components/Persons';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' },
  ]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [newFilter, setNewFilter] = useState('');

  const handleNameChange = (event) => setNewName(event.target.value);
  const handleNumberChange = (event) => setNewNumber(event.target.value);
  const handleFilterChange = (event) => setNewFilter(event.target.value);

  const addContent = (event) => {
    event.preventDefault();
    const nameObject = { name: newName, number: newNumber };

    const isSameName = persons.some((p) => (p.name === newName ? true : false));

    if (isSameName) {
      alert(`${newName} is already added to phonebook`);
    } else {
      setPersons(persons.concat(nameObject));
      setNewName('');
      setNewNumber('');
    }
  };

  const filteredToShow = newName
    .toUpperCase()
    .startsWith(newFilter.toUpperCase())
    ? persons
    : persons.filter(
        (person) =>
          person.name.toUpperCase().startsWith(newFilter.toUpperCase()) === true
      );

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter handleFilterChange={handleFilterChange} />
      <h3>Add a new</h3>
      <PersonForm
        addContent={addContent}
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
      />
      <h2>Numbers</h2>
      <Persons filteredToShow={filteredToShow} />
    </div>
  );
};

export default App;
