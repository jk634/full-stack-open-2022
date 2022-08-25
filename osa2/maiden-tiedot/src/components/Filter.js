const Filter = (props) => {
  return (
    <div>
      find countries <input onChange={props.handleFilterChange}></input>
    </div>
  );
};

export default Filter;
