import { useState, useEffect } from 'react';
import PersonForm from './components/PersonForm';
import Filter from './components/Filter';
import Persons from './components/Persons';
import contactsService from './services/ContactsService';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [newFilter, setNewFilter] = useState('');

  useEffect(() => {
    contactsService.getAll().then((response) => {
      setPersons(response);
    });
  }, []);

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
      contactsService.create(nameObject).then(() => {
        setPersons(persons.concat(nameObject));
        setNewName('');
        setNewNumber('');
      });
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
