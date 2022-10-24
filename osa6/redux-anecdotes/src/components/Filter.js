import { connect } from 'react-redux';
import { addFilter } from '../reducers/filterReducer';

const Filter = (props) => {
  const handleChange = (event) => {
    const filterStr = event.target.value;
    console.log(filterStr);
    props.addFilter(filterStr);
  };
  const style = {
    marginBottom: 10,
  };

  return (
    <div style={style}>
      filter <input onChange={handleChange} />
    </div>
  );
};

export default connect(null, { addFilter })(Filter);
