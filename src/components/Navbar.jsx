import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = () => {
    setMenuOpen(false);
  };

  return (
    <header>
      <div className="navbar">
        <Link to="/" className="logo">
          ⛵ Sailor Academy
        </Link>

        <button 
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
          <Link to="/" onClick={handleNavClick}>Home</Link>
          <Link to="/about" onClick={handleNavClick}>About</Link>
          <Link to="/courses" onClick={handleNavClick}>Courses</Link>
          <Link to="/founder" onClick={handleNavClick}>Founder</Link>
          <Link to="/contact" onClick={handleNavClick}>Contact</Link>
          
          <button
            className="dark-btn"
            onClick={() => {
              document.body.classList.toggle("dark");
              setDarkMode(!darkMode);
            }}
          >
            {darkMode ? "☀️" : "🌙"}
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
