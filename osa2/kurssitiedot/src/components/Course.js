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

const Course = ({ courses }) => {
  return courses.map((course) => {
    return (
      <div key={course.id}>
        <Header course={course.name} />
        <Content parts={course.parts} />
        <Total sum={total(course.parts)} />
      </div>
    );
  });
};

const total = (parts) =>
  parts.reduce((s, p) => {
    return s + p.exercises;
  }, 0);

export default Course;
