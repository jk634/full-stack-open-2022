const Persons = (props) => {
  return (
    <ul>
      {props.filteredToShow.map((person) => (
        <li key={person.name}>
          {person.name} {person.number}
          <button onClick={() => props.deleteContact(person)}>delete</button>
        </li>
      ))}
    </ul>
  );
};

export default Persons;
