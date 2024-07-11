import Header from "../Header/Header";
import StatisticsTable from "./StatisticsTable/StatisticsTable";

const Statistics = ({ good, bad, neutral }) => {
  const heading = "Statistics";
  const total = good + bad + neutral;

  if (total == 0) {
    return (
      <>
        <Header text={heading} />
        <p>No feedback given</p>
      </>
    );
  }
  return (
    <>
      <Header text={heading} />
      <StatisticsTable good={good} bad={bad} neutral={neutral} />
    </>
  );
};

export default Statistics;
