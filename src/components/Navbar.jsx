import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <header>
      <div className="navbar">
        <h2 className="logo">Sailor Academy</h2>

        <nav className="nav-links">
          <button
            className="dark-btn"
            onClick={() => {
              document.body.classList.toggle("dark");
              setDarkMode(!darkMode);
            }}
          >
            {darkMode ? "☀️" : "🌙"}
          </button>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/courses">Courses</Link>
          <Link to="/founder">Founder</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
