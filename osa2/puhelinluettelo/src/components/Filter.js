const Filter = (props) => {
  return (
    <div>
      filter shown with <input onChange={props.handleFilterChange}></input>
    </div>
  );
};

export default Filter;
