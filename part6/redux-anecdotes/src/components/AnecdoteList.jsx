import { useSelector, useDispatch } from "react-redux";
import { upvoteAnecdote } from "../redux/reducers/anecdoteReducer";

const AnecdoteList = () => {
  const anecdotes = useSelector((state) => {
    const filter = state.filter;
    const filteredAnecdotes = state.anecdotes.filter((anecdote) =>
      anecdote.content.toLowerCase().includes(filter),
    );
    const sortedAnecdotes = [...filteredAnecdotes].sort(
      (a, b) => b.votes - a.votes,
    );
    return sortedAnecdotes;
  });
  const dispatch = useDispatch();

  const vote = (id) => {
    dispatch(upvoteAnecdote(id));
  };

  return (
    <>
      {anecdotes.map((anecdote) => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      ))}
    </>
  );
};

export default AnecdoteList;
