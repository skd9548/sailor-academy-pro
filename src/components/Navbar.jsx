import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header>
      <div className="navbar">
        <h2 className="logo">Sailor Academy</h2>

        <nav>
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
