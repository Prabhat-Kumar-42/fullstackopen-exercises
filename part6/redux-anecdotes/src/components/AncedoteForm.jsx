import { useDispatch } from "react-redux";
import { addAnecdote } from "../redux/reducers/anecdoteReducer";
import { notify } from "../redux/reducers/notificationReducer";
const AnecdoteForm = () => {
  const dispatch = useDispatch();

  const createAnecdote = async (event) => {
    event.preventDefault();
    const contentTarget = event.target.content;
    dispatch(addAnecdote(contentTarget.value));
    contentTarget.value = "";

    //Notification
    const message = "you created anecdote";
    const timeToLive = 5;
    dispatch(notify(message, timeToLive));
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
