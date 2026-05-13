import { NavLink } from "react-router-dom";
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
        <NavLink to="/" className="logo">
          ⛵ Sailor Academy
        </NavLink>

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
          <NavLink to="/" onClick={handleNavClick} className={({ isActive }) => isActive ? "active" : ""} end>
            Home
          </NavLink>
          <NavLink to="/about" onClick={handleNavClick} className={({ isActive }) => isActive ? "active" : ""}>
            About
          </NavLink>
          <NavLink to="/courses" onClick={handleNavClick} className={({ isActive }) => isActive ? "active" : ""}>
            Courses
          </NavLink>
          <NavLink to="/founder" onClick={handleNavClick} className={({ isActive }) => isActive ? "active" : ""}>
            Founder
          </NavLink>
          <NavLink to="/contact" onClick={handleNavClick} className={({ isActive }) => isActive ? "active" : ""}>
            Contact
          </NavLink>

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
