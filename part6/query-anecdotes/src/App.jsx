import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import AnecdoteForm from "./components/AnecdoteForm";
import Notification from "./components/Notification";
import anecdoteServices from "./services/anecdotes.services";
import {
  displayNotificationActionCreator,
  useNotificationDispatch,
} from "./contexts/NotificationContext";

const App = () => {
  const anecdoteResponse = useQuery({
    queryKey: ["anecdotes"],
    queryFn: anecdoteServices.getAllAnecdotes,
    retry: 1,
  });

  const notificationDispatch = useNotificationDispatch();
  const queryClient = useQueryClient();
  const updateAnecdoteMutation = useMutation({
    mutationFn: anecdoteServices.updateAnecdote,
    onSuccess: (newAnecdote) => {
      const anecdotes = queryClient.getQueryData(["anecdotes"]);
      const updatedAnecdotes = anecdotes.map((anecdote) => {
        return anecdote.id != newAnecdote.id ? anecdote : newAnecdote;
      });
      queryClient.setQueryData(["anecdotes"], updatedAnecdotes);

      //Notification
      const successMessage = `You Liked ${newAnecdote.content} !!`;
      const messageAction = displayNotificationActionCreator(successMessage);
      notificationDispatch(messageAction);
    },
    onError: () => {
      const errorMessage = "anecdote like failed";
      const messageAction = displayNotificationActionCreator(errorMessage);
      notificationDispatch(messageAction);
    },
  });

  if (anecdoteResponse.isLoading) {
    return <div>Loading...</div>;
  }
  if (anecdoteResponse.isError) {
    return (
      <div>anecdote service is not available due to problem in server </div>
    );
  }

  const handleVote = (anecdote) => {
    const updatedAnecdote = { ...anecdote, votes: anecdote.votes + 1 };
    updateAnecdoteMutation.mutate(updatedAnecdote);
  };

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
