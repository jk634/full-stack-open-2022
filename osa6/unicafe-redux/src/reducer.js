const initialState = {
  good: 0,
  ok: 0,
  bad: 0,
};

const counterReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case 'GOOD':
      const addedGoodState = {
        ...state,
        good: state.good + 1,
      };
      return addedGoodState;
    case 'OK':
      const addedOkState = {
        ...state,
        ok: state.ok + 1,
      };
      return addedOkState;
    case 'BAD':
      const addedBadState = {
        ...state,
        bad: state.bad + 1,
      };
      return addedBadState;
    case 'ZERO':
      const resetState = {
        good: 0,
        ok: 0,
        bad: 0,
      };
      return resetState;
    default:
      return state;
  }
};

export default counterReducer;
