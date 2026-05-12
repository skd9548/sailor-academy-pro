import WhyChoose from "../components/WhyChoose";
import Stats from "../components/Stats";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <p className="eyebrow">
            Merchant Navy coaching for ambitious students
          </p>
          <h1>Launch a successful maritime career with expert mentorship</h1>

          <p>
            Sailor Academy prepares you for IMUCET, sponsorship interviews, and
            real shipboard life with a complete training roadmap.
          </p>

          <div className="hero-buttons">
            <Link to="/courses" className="main-btn">
              Explore Courses
            </Link>
            <Link to="/contact" className="secondary-btn">
              Book a Free Session
            </Link>
          </div>

          <div className="overview-grid">
            <div className="overview-card">
              <h3>Fast skill growth</h3>
              <p>Structured lessons that keep you ahead of the competition.</p>
            </div>
            <div className="overview-card">
              <h3>Industry guidance</h3>
              <p>Train with mentors who have sailed the same path.</p>
            </div>
            <div className="overview-card">
              <h3>Placement focus</h3>
              <p>Interview preparation and sponsorship support included.</p>
            </div>
          </div>
        </div>

        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1517832207067-4db24a2ae47c?auto=format&fit=crop&w=1100&q=80"
            alt="Professional maritime training"
          />
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <h2 className="section-title">Results-driven maritime coaching</h2>
          <p className="section-subtitle">
            Our academy combines exam-focused instruction with career-ready
            training so students arrive confident, capable, and interview-ready.
          </p>
        </div>

        <div className="feature-grid">
          <div className="service-card">
            <h3>IMUCET preparation</h3>
            <p>
              Complete exam planning, practice tests, and performance reviews.
            </p>
          </div>
          <div className="service-card">
            <h3>Sponsorship support</h3>
            <p>
              College sponsorship guidance and interview coaching for every
              student.
            </p>
          </div>
          <div className="service-card">
            <h3>Maritime mentorship</h3>
            <p>
              Live sessions, career counseling, and real-world advice from
              sailors.
            </p>
          </div>
        </div>
      </section>

      <Stats />

      <WhyChoose />

      <section className="cta-banner">
        <div>
          <h2>Ready to start your merchant navy journey?</h2>
          <p>
            Book a free strategy call, see the course roadmap, and discover how
            we make success predictable.
          </p>
        </div>
        <div>
          <Link to="/contact" className="main-btn">
            Schedule a Call
          </Link>
        </div>
      </section>
    </>
  );
}

export default Home;
