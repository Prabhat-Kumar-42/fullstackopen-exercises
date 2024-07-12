const Total = ({ course }) => {
  const initialValue = 0;
  return (
    <p>
      <b>
        total of{" "}
        {course.parts.reduce((acc, part) => acc + part.exercises, initialValue)}{" "}
        exercises
      </b>
    </p>
  );
};

export default Total;
