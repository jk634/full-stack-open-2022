import axios from 'axios';

const baseUrl = 'http://localhost:3001/anecdotes';

const getAll = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

const createNew = async (content) => {
  const object = { content, votes: 0 };
  const response = await axios.post(baseUrl, object);
  return response.data;
};

const vote = async (id) => {
  const all = await axios.get(baseUrl);
  const anecToChange = all.data.find((anec) => anec.id === id);
  const changedAnecdote = {
    ...anecToChange,
    votes: anecToChange.votes + 1,
  };

  const response = await axios.put(`${baseUrl}/${id}`, changedAnecdote);
  return response.data;
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { getAll, createNew, vote };
