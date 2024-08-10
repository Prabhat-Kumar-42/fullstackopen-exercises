import { Link } from "react-router-dom";
import anecdoteUrls from "../../utils/urls";

const AnecdoteList = ({ anecdotes }) => {
  return (
    <div>
      <h2>Anecdotes</h2>
      <ul>
        {anecdotes.map((anecdote) => (
          <li key={anecdote.id}>
            <Link to={anecdoteUrls.anecdotes + anecdote.id}>
              {anecdote.content}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AnecdoteList;
