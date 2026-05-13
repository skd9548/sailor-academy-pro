import WhyChoose from "../components/WhyChoose";
import Stats from "../components/Stats";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <section className="top-banner">
        Admission open for IMUCET 2027 / 2028 • Join our next batch now
      </section>

      <section className="hero hero-modern">
        <div className="hero-copy">
          <p className="eyebrow">Built by sailors, not just teachers</p>
          <h1>Training programs built for Merchant Navy success</h1>
          <p className="hero-text">
            With 5+ years of sea and teaching experience, Sailor Academy helps
            you crack IMUCET, secure sponsorship, and navigate your maritime
            career with confidence.
          </p>

          <div className="hero-buttons">
            <Link to="/courses" className="main-btn">
              Start Your Journey
            </Link>
            <Link to="/contact" className="secondary-btn">
              Book Free Counselling
            </Link>
          </div>

          <div className="hero-cta-row">
            <div>
              <p className="metric">5+ Years</p>
              <span>Industry experience</span>
            </div>
            <div>
              <p className="metric">100% </p>
              <span>Sponsorship support</span>
            </div>
            <div>
              <p className="metric">200+</p>
              <span>Successful students</span>
            </div>
          </div>
        </div>

        <div className="hero-media">
          <div className="hero-card">
            <img
              src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80"
              alt="Maritime training"
            />
            <div className="hero-card-tag">5+ YEARS Experience</div>
          </div>
        </div>
      </section>

      <section className="brand-strip">
        <div className="brand-item">MSC</div>
        <div className="brand-item">SCI</div>
        <div className="brand-item">Anglo Eastern</div>
        <div className="brand-item">Mærsk</div>
        <div className="brand-item">Fleet</div>
      </section>

      <section className="section about-section surface">
        <div className="about-grid">
          <div className="about-text">
            <span className="eyebrow">ABOUT US</span>
            <h2>Built by Sailors, Not Just Teachers</h2>
            <p>
              With 5+ years of sea and teaching experience, our team of Merchant
              Navy officers and PCM experts guide you with practical insights,
              exam strategy, and sponsorship preparation.
            </p>
            <div className="about-actions">
              <Link to="/courses" className="main-btn">
                Start Your Journey
              </Link>
              <Link to="/contact" className="secondary-btn">
                Watch Demo Class
              </Link>
            </div>
          </div>
          <div className="about-visual">
            <img
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1100&q=80"
              alt="Merchant Navy training"
            />
          </div>
        </div>
      </section>

      <section className="section program-section">
        <div className="section-heading">
          <h2 className="section-title">Our Core Training Programs</h2>
          <p className="section-subtitle">
            Everything you need to crack IMUCET and secure sponsorship.
          </p>
        </div>

        <div className="program-grid">
          <div className="program-card">
            <h3>PCM Mastery</h3>
            <p>Strong foundation in Physics, Chemistry & Mathematics.</p>
          </div>
          <div className="program-card">
            <h3>IMUCET Strategy</h3>
            <p>Exam-focused preparation, mock tests & past question practice.</p>
          </div>
          <div className="program-card">
            <h3>Sponsorship Guidance</h3>
            <p>Interview readiness and sponsor selection support.</p>
          </div>
          <div className="program-card">
            <h3>Real Maritime Exposure</h3>
            <p>Learn directly from sailors with shipboard experience.</p>
          </div>
        </div>
      </section>

      <section className="section why-section">
        <div className="why-grid surface-soft">
          <div className="why-copy">
            <span className="eyebrow">WHY CHOOSE SAILOR ACADEMY?</span>
            <h2>Practical training, exam strategy, and sponsorship support</h2>
            <ul className="why-list">
              <li>Early preparation advantage for IMUCET</li>
              <li>Experienced PCM faculty and maritime mentors</li>
              <li>Proven strategy for IMUCET & sponsorship</li>
              <li>Real industry insights from current seafarers</li>
            </ul>
          </div>

          <div className="pricing-card surface">
            <span className="eyebrow">IMUCET Batch</span>
            <h3>₹15,000</h3>
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
        </div>
      </section>

      <section className="section testimonial-section">
        <div className="section-heading">
          <h2 className="section-title">Success Stories from Our Students</h2>
          <p className="section-subtitle">
            Hear how aspiring cadets cracked IMUCET and sponsorship with Sailor
            Academy.
          </p>
        </div>

        <div className="testimonial-grid">
          <div className="testimonial-card surface">
            <p className="testimonial-text">
              "Sailor Academy gave me the confidence to clear IMUCET and get
              sponsorship guidance that really worked."
            </p>
            <h4>Ankit Sharma</h4>
            <span>Rank 62</span>
          </div>
          <div className="testimonial-card surface">
            <p className="testimonial-text">
              "The mentorship and exam strategy made every concept clear. This
              course was worth it."
            </p>
            <h4>Rohit Verma</h4>
            <span>Rank 137</span>
          </div>
          <div className="testimonial-card surface">
            <p className="testimonial-text">
              "I felt prepared on day one of my interview. The guidance was
              practical and focused."
            </p>
            <h4>Adiya Joshi</h4>
            <span>XCI Sponsorship</span>
          </div>
        </div>
      </section>

      <Stats />
      <WhyChoose />
    </>
  );
}

export default Home;
