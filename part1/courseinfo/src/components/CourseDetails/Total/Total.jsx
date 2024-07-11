const Total = (props) => {
  const initialValue = 0;
  return (
    <>
      <p>
        Number of exercises{" "}
        {props.course.parts.reduce(
          (acc, part) => acc + part.exercises,
          initialValue,
        )}
      </p>
    </>
  );
};

export default Total;
