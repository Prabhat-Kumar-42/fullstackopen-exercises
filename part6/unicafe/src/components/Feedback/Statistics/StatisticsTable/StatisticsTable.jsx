import StatisticsLine from "../StatisticsLine/StatisticsLine";

const StatisticsTable = ({ good, bad, ok }) => {
  const total = good + bad + ok;
  const average = (good - bad) / total;
  const positivePercent = (good / total) * 100;
  const goodText = "good";
  const okText = "ok";
  const badText = "bad";
  const allText = "all";
  const averageText = "average";
  const positiveText = "positive";

  return (
    <>
      <table>
        <tbody>
          <StatisticsLine text={goodText} value={good} />
          <StatisticsLine text={okText} value={ok} />
          <StatisticsLine text={badText} value={bad} />
          <StatisticsLine text={allText} value={total} />
          <StatisticsLine text={averageText} value={average} />
          <StatisticsLine text={positiveText} value={positivePercent + " %"} />
        </tbody>
      </table>
    </>
  );
};

export default StatisticsTable;
