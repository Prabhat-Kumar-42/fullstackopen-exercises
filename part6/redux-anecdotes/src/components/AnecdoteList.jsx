import { useSelector, useDispatch } from "react-redux";
import { upvoteAnecdote } from "../redux/reducers/anecdoteReducer";
import {
  clearNotification,
  setNotification,
} from "../redux/reducers/notificationReducer";

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

  const vote = (anecdote) => {
    const id = anecdote.id;
    const message = `you voted ${anecdote.content}`;
    dispatch(upvoteAnecdote(id));
    const timeoutId = setTimeout(() => dispatch(clearNotification()), 5000);
    // Notification
    const notificationPayload = { message, timeoutId };
    dispatch(clearNotification());
    dispatch(setNotification(notificationPayload));
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
