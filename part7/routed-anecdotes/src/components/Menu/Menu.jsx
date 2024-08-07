import { Link } from "react-router-dom";
import anecdoteUrls from "../../utils/urls";

const Menu = () => {
  const padding = {
    paddingRight: 5,
  };
  return (
    <div>
      <Link to={anecdoteUrls.home} style={padding}>
        anecdotes
      </Link>
      <Link to={anecdoteUrls.anecdoteForm} style={padding}>
        create new
      </Link>
      <Link to={anecdoteUrls.about} style={padding}>
        about
      </Link>
    </div>
  );
};

export default Menu;
