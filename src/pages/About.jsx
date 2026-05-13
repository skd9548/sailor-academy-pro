import { Link } from "react-router-dom";

function About() {
  return (
    <>
      <section className="section page-hero about-hero surface-soft">
        <div className="page-hero-copy">
          <span className="eyebrow">ABOUT US</span>
          <h1>Built by Sailors, Not Just Teachers</h1>
          <p className="hero-text">
            With 5+ years of sea and teaching experience, our team of Merchant
            Navy officers and PCM experts guide you with the most practical
            insights and strategies for IMUCET and sponsorship.
          </p>

          <div className="hero-buttons">
            <Link to="/courses" className="main-btn">
              Start Your Journey
            </Link>
            <Link to="/contact" className="secondary-btn">
              Watch Demo Class
            </Link>
          </div>
        </div>

        <div className="page-hero-media about-hero-card">
          <img
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1100&q=80"
            alt="Merchant Navy training"
          />
          <div className="hero-card-tag">5+ Years of Coaching Experience</div>
        </div>
      </section>

      <section className="section about-details">
        <div className="section-heading">
          <h2 className="section-title">Why choose Sailor Academy?</h2>
          <p className="section-subtitle">
            We combine exam preparation with maritime mentorship so every
            student arrives confident for both IMUCET and sponsorship selection.
          </p>
        </div>

        <div className="feature-grid">
          <div className="service-card">
            <h3>Practical strategy</h3>
            <p>
              Focused learning plans, mock tests, and time management for peak
              exam performance.
            </p>
          </div>
          <div className="service-card">
            <h3>Industry mentors</h3>
            <p>
              Coaching from sailors who understand shipboard expectations and
              sponsorship norms.
            </p>
          </div>
          <div className="service-card">
            <h3>Sponsor readiness</h3>
            <p>
              Mock interviews, document preparation, and sponsorship-focused
              guidance.
            </p>
          </div>
          <div className="service-card">
            <h3>Career clarity</h3>
            <p>
              Clear next steps from exam study to placement support and cadet
              life.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
