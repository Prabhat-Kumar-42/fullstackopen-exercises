import Part from "../Part/Part";

const Content = (props) => {
  return (
    <>
      {props.course.parts.map((part, index) => (
        <Part key={index} name={part.name} exercises={part.exercises} />
      ))}
    </>
  );
};

export default Content;
