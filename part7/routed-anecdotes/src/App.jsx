import { useState } from "react";
import Footer from "./components/Footer/Footer";
import Menu from "./components/Menu/Menu";
import anecdotesMockData from "./mockData/anecdotesMockData";
import AnecdotesRoutes from "./components/AnecdotesRoutes/AnecdotesRoutes";
import { useNavigate } from "react-router-dom";
import Notification from "./components/Notification/Notification";

const App = () => {
  const [anecdotes, setAnecdotes] = useState(anecdotesMockData);

  const [notification, setNotification] = useState("");
  const [notificationTimeout, setNotificationTimeout] = useState(null);
  const navigate = useNavigate();

  const addNew = (anecdote) => {
    anecdote.id = Math.round(Math.random() * 10000);
    setAnecdotes(anecdotes.concat(anecdote));
    navigate("/");
  };

  const anecdoteById = (id) => anecdotes.find((a) => a.id === id);

  const handleVotes = (id) => {
    const anecdote = anecdoteById(id);

    const voted = {
      ...anecdote,
      votes: anecdote.votes + 1,
    };

    setAnecdotes(anecdotes.map((a) => (a.id === id ? voted : a)));
  };

  const handleNotification = (newNotification) => {
    if (notificationTimeout) setNotificationTimeout(null);
    const newNotificationTimeout = setTimeout(() => setNotification(""), 5000);
    setNotification(newNotification);
    setNotificationTimeout(newNotificationTimeout);
  };

  return (
    <div>
      <h1>Software anecdotes</h1>
      <Menu />
      <Notification notification={notification} />
      <AnecdotesRoutes
        anecdotes={anecdotes}
        addNew={addNew}
        handleNotification={handleNotification}
        handleVotes={handleVotes}
      />
      <Footer />
    </div>
  );
};

export default App;
