import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>URL Shortener</h2>
      <div className="nav-links">
        <Link to="/">Shorten</Link>
        <Link to="/stats">Stats</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </div>
    </nav>
  );
}

export default Navbar;
