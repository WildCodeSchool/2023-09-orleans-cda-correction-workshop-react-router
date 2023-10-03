import { Link } from "react-router-dom";

function Menu() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/css">css</Link>
      <Link to="/js">js</Link>
      <Link to="/html">html</Link>
    </nav>
  );
}

export default Menu;
