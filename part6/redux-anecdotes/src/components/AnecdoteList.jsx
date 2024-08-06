import { useSelector, useDispatch } from "react-redux";
import { upvoteAnecdote } from "../redux/reducers/anecdoteReducer";
import { notify } from "../redux/reducers/notificationReducer";

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

  const vote = async (anecdote) => {
    dispatch(upvoteAnecdote(anecdote));
    const message = `you voted ${anecdote.content}`;
    const timeToLive = 5;
    dispatch(notify(message, timeToLive));
  };

  return (
    <>
      {anecdotes.map((anecdote) => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote)}>vote</button>
          </div>
        </div>
      ))}
    </>
  );
};

export default AnecdoteList;
