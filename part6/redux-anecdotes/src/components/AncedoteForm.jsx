import { useDispatch } from "react-redux";
import { addAnecdote } from "../redux/reducers/anecdoteReducer";

const AnecdoteForm = () => {
  const dispatch = useDispatch();

  const createAnecdote = (event) => {
    event.preventDefault();
    const contentTarget = event.target.content;
    const action = addAnecdote(contentTarget.value);
    dispatch(action);
    contentTarget.value = "";
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
