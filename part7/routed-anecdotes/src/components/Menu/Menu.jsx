import { Link, Route, Routes } from "react-router-dom";
import AnecdoteList from "../AnecdoteList/AnecdoteList";
import AnecdoteForm from "../AnecdoteForm/AnecdoteForm";
import About from "../About/About";

const Menu = ({ anecdotes, addNew }) => {
  const padding = {
    paddingRight: 5,
  };
  const homeUrl = "/";
  const anecdoteFormUrl = "/create";
  const aboutUrl = "/about";
  return (
    <div>
      <Link to={homeUrl} style={padding}>
        anecdotes
      </Link>
      <Link to={anecdoteFormUrl} style={padding}>
        create new
      </Link>
      <Link to={aboutUrl} style={padding}>
        about
      </Link>

      <Routes>
        <Route
          path={homeUrl}
          element={<AnecdoteList anecdotes={anecdotes} />}
        />
        <Route
          path={anecdoteFormUrl}
          element={<AnecdoteForm addNew={addNew} />}
        />
        <Route path={aboutUrl} element={<About />} />
      </Routes>
    </div>
  );
};

export default Menu;
