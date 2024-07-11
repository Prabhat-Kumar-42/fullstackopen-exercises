import Header from "../Header/Header";

const Statistics = ({ good, bad, neutral }) => {
  const heading = "Statistics";
  return (
    <>
      <Header text={heading} />
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
    </>
  );
};

export default Statistics;
