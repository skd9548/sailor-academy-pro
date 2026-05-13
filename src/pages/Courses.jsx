import { Link } from "react-router-dom";

function Courses() {
  return (
    <>
      <section className="section page-hero courses-hero surface-soft">
        <div className="page-hero-copy">
          <span className="eyebrow">COURSES</span>
          <h1>Training programs built for Merchant Navy success</h1>
          <p className="hero-text">
            Pick the course that fits your goals: exam preparation, sponsorship
            readiness, or full career mentorship from experienced maritime
            professionals.
          </p>
        </div>

        <div className="course-hero-panel surface">
          <span className="eyebrow">IMUCET Batch</span>
          <h2>₹15,000</h2>
          <ul>
            <li>Live Classes</li>
            <li>Mock Tests</li>
            <li>Personal Mentorship</li>
            <li>Sponsorship Preparation</li>
          </ul>
          <Link to="/contact" className="main-btn">
            Enroll Now
          </Link>
        </div>
      </section>

      <section className="section program-section">
        <div className="section-heading">
          <h2 className="section-title">Our Core Training Programs</h2>
          <p className="section-subtitle">
            Everything you need to crack IMUCET and secure sponsorships.
          </p>
        </div>

        <div className="course-cards">
          <div className="course-card">
            <h3>PCM Mastery</h3>
            <p>
              Strong foundation in Physics, Chemistry, and Mathematics for top
              IMUCET results.
            </p>
          </div>
          <div className="course-card">
            <h3>IMUCET Strategy</h3>
            <p>Exam-focused coaching, mock tests, and past paper analysis.</p>
          </div>
          <div className="course-card">
            <h3>Sponsorship Guidance</h3>
            <p>
              Interview practice, sponsor selection support, and documentation
              readiness.
            </p>
          </div>
          <div className="course-card">
            <h3>Real Maritime Exposure</h3>
            <p>Learn directly from experienced sailors about life at sea.</p>
          </div>
        </div>
      </section>

      <section className="section course-plan-section surface-soft">
        <div className="section-heading">
          <h2 className="section-title">Select your voyage</h2>
          <p className="section-subtitle">
            Choose the package that matches your current preparation level and
            career goal.
          </p>
        </div>

        <div className="course-plan-grid">
          <div className="plan-card">
            <h3>Early Voyage</h3>
            <p>Ideal for 11th / 12th students starting IMUCET preparation.</p>
          </div>
          <div className="plan-card">
            <h3>Navigator</h3>
            <p>
              For students who want a complete exam + sponsorship ready
              strategy.
            </p>
          </div>
          <div className="plan-card">
            <h3>Last Voyage</h3>
            <p>
              Focused revision, mock interviews, and final sponsor guidance.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Courses;
