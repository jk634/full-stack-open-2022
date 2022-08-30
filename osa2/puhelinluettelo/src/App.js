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
    const contact = persons.find((res) => newName === res.name);

    const isSameName = persons.some((p) => (p.name === newName ? true : false));

    if (isSameName) {
      if (
        window.confirm(
          `${newName} is already added to phonebook, replace the old number with a new one?`
        )
      ) {
        contactsService.update(contact.id, nameObject).then((response) => {
          setPersons(
            persons.map((con) => (con.id !== response.id ? con : response))
          );
          setNewName('');
          setNewNumber('');
        });
      }
    } else {
      contactsService.create(nameObject).then((response) => {
        setPersons(persons.concat(response));
        setNewName('');
        setNewNumber('');
      });
    }
  };

  const filteredToShow = newName.toUpperCase().includes(newFilter.toUpperCase())
    ? persons
    : persons.filter(
        (person) =>
          person.name.toUpperCase().includes(newFilter.toUpperCase()) === true
      );

  const deleteContact = (person) => {
    if (window.confirm(`Delete ${person.name}?`)) {
      const contact = persons.find((con) => con.id === person.id);
      contactsService.deleteSingleContact(contact.id).then(() => {
        setPersons(persons.filter((per) => contact.id !== per.id));
      });
    }
  };

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
      <Persons filteredToShow={filteredToShow} deleteContact={deleteContact} />
    </div>
  );
};

export default App;
