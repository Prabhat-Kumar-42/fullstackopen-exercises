import { counterStore } from "../../redux/stores/stores";
import FeedbackButton from "./FeedBackButton/FeedbackButton";
import Header from "./Header/Header";
import Statistics from "./Statistics/Statistics";

const Feedback = () => {
  const goodAction = { type: "GOOD" };
  const badAction = { type: "BAD" };
  const okAction = { type: "OK" };

  const handleGoodFeedback = () => {
    counterStore.dispatch(goodAction);
  };
  const handleBadFeedback = () => {
    counterStore.dispatch(badAction);
  };
  const handleOkFeedback = () => {
    counterStore.dispatch(okAction);
  };

  const title = "give feedback";
  const goodText = "good";
  const badText = "bad";
  const okText = "ok";

  const good = counterStore.getState().good || 0;
  const bad = counterStore.getState().bad || 0;
  const ok = counterStore.getState().ok || 0;

  return (
    <>
      <Header text={title} />
      <FeedbackButton text={goodText} handleClick={handleGoodFeedback} />
      <FeedbackButton text={okText} handleClick={handleOkFeedback} />
      <FeedbackButton text={badText} handleClick={handleBadFeedback} />
      <Statistics good={good} bad={bad} ok={ok} />
    </>
  );
};

export default Feedback;
