import anecdoteService from '../services/anecdotes';

const reducer = (state = [], action) => {
  console.log('state now: ', state);
  console.log('action', action);

  switch (action.type) {
    case 'VOTE':
      const anecToChange = state.find((anec) => anec.id === action.id);
      const changedAnecdote = {
        ...anecToChange,
        votes: anecToChange.votes + 1,
      };
      return state.map((anec) =>
        anec.id !== action.id ? anec : changedAnecdote
      );

    case 'CREATE':
      return [...state, action.data];
    case 'SET':
      state = action.data;
      return state;

    default:
      return state;
  }
};

export const setAnecdotes = (content) => {
  return {
    type: 'SET',
    data: content,
  };
};

export const voteAnecdote = (id) => {
  console.log('vote', id);
  return { type: 'VOTE', id: id };
};

export const appendAnecdote = (content) => {
  return {
    type: 'CREATE',
    data: content,
  };
};

export const initializeAnecdotes = () => {
  return async (dispatch) => {
    const anecdotes = await anecdoteService.getAll();
    dispatch(setAnecdotes(anecdotes));
  };
};

export const createAnecdote = (content) => {
  return async (dispatch) => {
    const newAnecdote = await anecdoteService.createNew(content);
    dispatch(appendAnecdote(newAnecdote));
  };
};

export default reducer;
