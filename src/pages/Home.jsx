import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Build Your Career in Merchant Navy</h1>

        <p>
          Learn from real maritime experts and prepare for IMUCET with India’s
          trusted maritime academy.
        </p>

        <div className="hero-buttons">
          <Link to="/courses" className="main-btn">
            Start Your Journey
          </Link>

          <Link to="/contact" className="secondary-btn">
            Book Free Class
          </Link>
        </div>
      </div>

      <div className="hero-image">
        <img
          src="https://images.unsplash.com/photo-1565688534245-05d6b5be184a"
          alt="Ship Captain"
        />
      </div>
    </section>
  );
}

export default Home;
