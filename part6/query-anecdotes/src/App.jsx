import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import AnecdoteForm from "./components/AnecdoteForm";
import Notification from "./components/Notification";
import anecdoteServices from "./services/anecdotes.services";

const App = () => {
  const anecdoteResponse = useQuery({
    queryKey: ["anecdotes"],
    queryFn: anecdoteServices.getAllAnecdotes,
  });

  if (anecdoteResponse.isLoading) {
    return <div>Loading...</div>;
  }
  if (anecdoteResponse.isError) {
    return (
      <div>anecdote service is not available due to problem in server </div>
    );
  }

  const handleVote = (anecdote) => {};

  const anecdotes = anecdoteResponse.data;
  return (
    <div>
      <h3>Anecdote app</h3>

      <Notification />
      <AnecdoteForm />

      {anecdotes.map((anecdote) => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => handleVote(anecdote)}>vote</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default App;
