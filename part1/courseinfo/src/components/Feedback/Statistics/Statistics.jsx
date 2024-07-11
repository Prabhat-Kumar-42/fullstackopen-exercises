import Header from "../Header/Header";

const Statistics = ({ good, bad, neutral }) => {
  const heading = "Statistics";
  const total = good + bad + neutral;
  const average = (good - bad) / total;
  const positivePercent = (good / total) * 100;

  return (
    <>
      <Header text={heading} />
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {total}</p>
      <p>average {average}</p>
      <p>positive {positivePercent} %</p>
    </>
  );
};

export default Statistics;
