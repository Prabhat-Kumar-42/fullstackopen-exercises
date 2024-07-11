import FeedbackButton from "./FeedBackButton/FeedbackButton";
import Header from "./Header/Header";
import Statistics from "./Statistics/Statistics";
import { useState } from "react";

const Feedback = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGoodFeedback = () => {
    const updatedGood = good + 1;
    setGood(updatedGood);
  };
  const handleBadFeedback = () => {
    const updatedBad = bad + 1;
    setBad(updatedBad);
  };
  const handleNeutralFeedback = () => {
    const updatedNeutral = neutral + 1;
    setNeutral(updatedNeutral);
  };

  const title = "give feedback";
  const goodText = "good";
  const badText = "bad";
  const neutralText = "neutral";

  return (
    <>
      <Header text={title} />
      <FeedbackButton text={goodText} handleClick={handleGoodFeedback} />
      <FeedbackButton text={neutralText} handleClick={handleNeutralFeedback} />
      <FeedbackButton text={badText} handleClick={handleBadFeedback} />
      <Statistics good={good} bad={bad} neutral={neutral} />
    </>
  );
};

export default Feedback;
