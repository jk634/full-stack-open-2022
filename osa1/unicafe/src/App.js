import { useState } from 'react';

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);

const Statistics = ({ amount, text }) => (
  <p>
    {text} {amount}
  </p>
);

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [sum, setSum] = useState(0);

  const handleGood = () => {
    setGood(good + 1);
    setSum(sum + 1);
  };
  const handleNeutral = () => {
    setNeutral(neutral + 1);
    setSum(sum + 1);
  };
  const handleBad = () => {
    setBad(bad + 1);
    setSum(sum + 1);
  };

  const average = (array) => {
    const good = 1 * array[0];
    const bad = -1 * array[2];
    const diff = good + bad;
    const average = diff / sum;

    return isNaN(average) ? sum : average;
  };

  const positives = (goods) => {
    const result = (goods / sum) * 100;
    return isNaN(result) ? sum : result;
  };

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={handleGood} text='good' />
      <Button handleClick={handleNeutral} text='neutral' />
      <Button handleClick={handleBad} text='bad' />
      <h1>statistics</h1>
      <Statistics amount={good} text='good' />
      <Statistics amount={neutral} text='neutral' />
      <Statistics amount={bad} text='bad' />
      <Statistics amount={sum} text='all' />
      <Statistics amount={average([good, neutral, bad])} text='average' />
      <Statistics amount={positives(good)} text='positive' />
    </div>
  );
};

export default App;
