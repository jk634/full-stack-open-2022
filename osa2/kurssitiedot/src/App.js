const Header = ({ course }) => <h1>{course}</h1>;

const Total = ({ sum }) => <p>total of {sum} exercises</p>;

const Part = ({ part }) => (
  <p>
    {part.name} {part.exercises}
  </p>
);

const Content = ({ parts }) => (
  <>
    {parts.map((part) => {
      return <Part key={part.id} part={part} />;
    })}
  </>
);

const Course = ({ course }) => {
  return (
    <>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total sum={total(course.parts)} />
    </>
  );
};

const total = (parts) =>
  parts.reduce((s, p) => {
    return s + p.exercises;
  }, 0);

const App = () => {
  const course = {
    name: 'Half Stack application development',
    id: 1,
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1,
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2,
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3,
      },
    ],
  };

  return (
    <div>
      <Course course={course} />
    </div>
  );
};

export default App;
