import { useMutation, useQueryClient } from "@tanstack/react-query";
import anecdoteServices from "../services/anecdotes.services";
import {
  displayNotificationActionCreator,
  useNotificationDispatch,
} from "../contexts/NotificationContext";

const AnecdoteForm = () => {
  const queryClient = useQueryClient();
  const notificationDispatch = useNotificationDispatch();
  const postAnecdoteMutation = useMutation({
    mutationFn: anecdoteServices.postAnecdote,
    onSuccess: (newAnecdote) => {
      const anecdotes = queryClient.getQueryData(["anecdotes"]);
      queryClient.setQueryData(["anecdotes"], anecdotes.concat(newAnecdote));
      const successMessage = `${newAnecdote.content} has been created`;
      const messageAction = displayNotificationActionCreator(successMessage);
      notificationDispatch(messageAction);
    },
    onError: () => {
      const errorMessage = "anecdote creation failed";
      const messageAction = displayNotificationActionCreator(errorMessage);
      notificationDispatch(messageAction);
    },
  });

  const onCreate = (event) => {
    event.preventDefault();
    const content = event.target.anecdote.value;
    event.target.anecdote.value = "";
    postAnecdoteMutation.mutate(content);
  };

  return (
    <div>
      <h3>create new</h3>
      <form onSubmit={onCreate}>
        <input name="anecdote" />
        <button type="submit">create</button>
      </form>
    </div>
  );
};

export default AnecdoteForm;
