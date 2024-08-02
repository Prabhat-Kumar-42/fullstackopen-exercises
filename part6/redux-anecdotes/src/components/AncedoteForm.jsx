import { useDispatch } from "react-redux";
import { addAnecdote } from "../redux/reducers/anecdoteReducer";
import {
  clearNotification,
  setNotification,
} from "../redux/reducers/notificationReducer";
import anecdotesServices from "../services/anecdotes.services";
const AnecdoteForm = () => {
  const dispatch = useDispatch();

  const createAnecdote = async (event) => {
    event.preventDefault();
    const contentTarget = event.target.content;
    const postedAnecdote = await anecdotesServices.postAnecdotes(
      contentTarget.value,
    );
    const action = addAnecdote(postedAnecdote);
    dispatch(action);
    contentTarget.value = "";

    //Notification
    const message = "you created anecdote";
    const timeoutId = setTimeout(() => dispatch(clearNotification()), 5000);
    const notificationPayload = { message, timeoutId };
    dispatch(clearNotification());
    dispatch(setNotification(notificationPayload));
  };

  return (
    <>
      <h2>create new</h2>
      <form onSubmit={createAnecdote}>
        <div>
          <input name="content" />
        </div>
        <button>create</button>
      </form>
    </>
  );
};

export default AnecdoteForm;
