import { useSelector, useDispatch } from 'react-redux';
import { voteAnecdote } from '../reducers/anecdoteReducer';
import {
  addNotification,
  removeNotification,
} from '../reducers/notificationReducer';

const AnecdoteList = () => {
  const anecdotes = useSelector((state) => {
    state.anecdotes.sort((a, b) => b.votes - a.votes);
    return state.anecdotes.filter((anec) =>
      anec.content.toLowerCase().includes(state.filter.toLowerCase())
    );
  });

  const dispatch = useDispatch();

  const vote = (id, content) => {
    console.log('vote', id);
    console.log(content);
    dispatch(voteAnecdote(id));

    dispatch(addNotification(`you voted '${content}'`));
    setTimeout(() => {
      dispatch(removeNotification());
    }, 5000);
  };

  return (
    <>
      {anecdotes.map((anecdote) => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id, anecdote.content)}>
              vote
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default AnecdoteList;
