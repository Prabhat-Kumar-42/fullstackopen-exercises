import { useState } from "react";
import Footer from "./components/Footer/Footer";
import Menu from "./components/Menu/Menu";
import anecdotesMockData from "./mockData/anecdotesMockData";
import AnecdotesRoutes from "./components/AnecdotesRoutes/AnecdotesRoutes";

const App = () => {
  const [anecdotes, setAnecdotes] = useState(anecdotesMockData);

  const [notification, setNotification] = useState("");

  const addNew = (anecdote) => {
    anecdote.id = Math.round(Math.random() * 10000);
    setAnecdotes(anecdotes.concat(anecdote));
  };

  const anecdoteById = (id) => anecdotes.find((a) => a.id === id);

  const vote = (id) => {
    const anecdote = anecdoteById(id);

    const voted = {
      ...anecdote,
      votes: anecdote.votes + 1,
    };

    setAnecdotes(anecdotes.map((a) => (a.id === id ? voted : a)));
  };

  return (
    <div>
      <h1>Software anecdotes</h1>
      <Menu />
      <AnecdotesRoutes anecdotes={anecdotes} addNew={addNew} />
      <Footer />
    </div>
  );
};

export default App;
