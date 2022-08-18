const Persons = (props) => {
  return (
    <ul>
      {props.filteredToShow.map((person) => (
        <li key={person.name}>
          {person.name} {person.number}
        </li>
      ))}
    </ul>
  );
};

export default Persons;
