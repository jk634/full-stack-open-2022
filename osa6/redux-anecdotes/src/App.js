import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import anecdotes from './services/anecdotes';
import { setAnecdotes } from './reducers/anecdoteReducer';
import AnecdoteForm from './components/AnecdoteForm';
import AnecdoteList from './components/AnecdoteList';
import Notification from './components/Notification';
import Filter from './components/Filter';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    anecdotes.getAll().then((anec) => dispatch(setAnecdotes(anec)));
  }, [dispatch]);

  return (
    <div>
      <h2>Anecdotes</h2>
      <Filter />
      <Notification />
      <AnecdoteList />
      <AnecdoteForm />
    </div>
  );
};

export default App;
