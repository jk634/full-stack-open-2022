import { useState } from 'react';

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);

const Statistics = (props) => {
  const good = props.good;
  const neutral = props.neutral;
  const bad = props.bad;
  const sum = props.sum;
  const average = props.average;
  const positives = props.positives;

  if (sum === 0) {
    return <p>No feedback given</p>;
  } else {
    return (
      <>
        <table>
          <tbody>
            <tr>
              <StatisticLine text='good' value={good} />
            </tr>
            <tr>
              <StatisticLine text='neutral' value={neutral} />
            </tr>
            <tr>
              <StatisticLine text='bad' value={bad} />
            </tr>
            <tr>
              <StatisticLine text='all' value={sum} />
            </tr>
            <tr>
              <StatisticLine
                text='average'
                value={average([good, neutral, bad])}
              />
            </tr>
            <tr>
              <StatisticLine text='positive' value={positives(good) + ' %'} />
            </tr>
          </tbody>
        </table>
      </>
    );
  }
};

const StatisticLine = ({ text, value }) => {
  return (
    <>
      <td>{text}</td>
      <td>{value}</td>
    </>
  );
};

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
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        sum={sum}
        average={average}
        positives={positives}
      />
    </div>
  );
};

export default App;
