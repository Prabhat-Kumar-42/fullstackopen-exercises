import { Route, Routes, useMatch } from "react-router-dom";
import SpecificAnecdote from "../SpecificAnecdote/SpecificAnecdote";
import AnecdoteList from "../AnecdoteList/AnecdoteList";
import AnecdoteForm from "../AnecdoteForm/AnecdoteForm";
import About from "../About/About";
import anecdoteUrls from "../../utils/urls";

const AnecdotesRoutes = ({ anecdotes, addNew }) => {
  const match = useMatch(anecdoteUrls.specificAnecdote);
  const anecdote = match
    ? anecdotes.find((anecdote) => anecdote.id === Number(match.params.id))
    : null;

  return (
    <Routes>
      <Route
        path={anecdoteUrls.home}
        element={<AnecdoteList anecdotes={anecdotes} />}
      />
      <Route
        path={anecdoteUrls.anecdoteForm}
        element={<AnecdoteForm addNew={addNew} />}
      />
      <Route path={anecdoteUrls.about} element={<About />} />
      <Route
        path={anecdoteUrls.specificAnecdote}
        element={<SpecificAnecdote anecdote={anecdote} />}
      />
    </Routes>
  );
};

export default AnecdotesRoutes;
