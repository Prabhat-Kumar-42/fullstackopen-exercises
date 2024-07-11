import Header from "../../Header/Header";

const AnecdotesDisplay = ({ heading, text, votes }) => {
  return (
    <>
      <Header heading={heading} />
      <p>{text}</p>
      <p> has {votes} votes </p>
    </>
  );
};

export default AnecdotesDisplay;
