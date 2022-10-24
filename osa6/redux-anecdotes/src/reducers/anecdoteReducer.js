import anecdoteService from '../services/anecdotes';

const reducer = (state = [], action) => {
  console.log('state now: ', state);
  console.log('action', action);

  switch (action.type) {
    case 'VOTE':
      return state.map((anec) =>
        anec.id !== action.data.id ? anec : action.data
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

export const vote = (content) => {
  console.log('vote', content.id);
  return { type: 'VOTE', data: content };
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

export const voteAnecdote = (id) => {
  return async (dispatch) => {
    const votedAnecdote = await anecdoteService.vote(id);
    dispatch(vote(votedAnecdote));
  };
};

export default reducer;
