import Header from "./Header/Header";
import Content from "./Content/Content";
import Total from "./Total/Total";

const Course = ({ courses }) => {
  const mainHeading = "Web developement Curriculum";
  return (
    <>
      <Header text={mainHeading} headingType={1} />
      {courses.map((course) => (
        <div key={course.id}>
          <Header text={course.name} headingType={2} />
          <Content course={course} />
          <Total course={course} />
        </div>
      ))}
    </>
  );
};
export default Course;
