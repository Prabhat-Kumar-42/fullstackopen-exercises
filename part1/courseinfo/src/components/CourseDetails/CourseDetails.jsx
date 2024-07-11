import Header from "./Header/Header";
import Content from "./Content/Content";
import Total from "./Total/Total";

const CourseDetails = (props) => {
  return (
    <div>
      <Header course={props.course} />
      <Content course={props.course} />
      <Total course={props.course} />
    </div>
  );
};

export default CourseDetails;
