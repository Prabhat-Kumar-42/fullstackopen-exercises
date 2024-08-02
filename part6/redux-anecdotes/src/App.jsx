import { useEffect } from "react";
import AnecdoteForm from "./components/AncedoteForm";
import AnecdoteList from "./components/AnecdoteList";
import Filter from "./components/Filter";
import Notification from "./components/Notification";
import { setAnecdotes } from "./redux/reducers/anecdoteReducer";
import anecdotesServices from "./services/anecdotes.services";
import { useDispatch } from "react-redux";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    anecdotesServices.getAnecdotes().then((responseData) => {
      dispatch(setAnecdotes(responseData));
    });
  });

  return (
    <div>
      <h2>Anecdotes</h2>
      <Notification />
      <Filter />
      <AnecdoteList />
      <AnecdoteForm />
    </div>
  );
};

export default App;
