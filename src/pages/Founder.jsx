function Founder() {
  return (
    <>
      <section className="section page-hero founder-hero surface-soft">
        <div className="page-hero-copy">
          <span className="eyebrow">FOUNDER</span>
          <h1>Built for maritime careers by real sailors</h1>
          <p className="hero-text">
            Our founder is a seasoned Merchant Navy officer who understands both
            exam pressure and life on board. The academy is built around
            practical learning, sponsorship readiness, and real seafarer advice.
          </p>
        </div>

        <div className="page-hero-media founder-hero-card">
          <img
            src="https://images.unsplash.com/photo-1488161628813-04466f872be2?auto=format&fit=crop&w=1100&q=80"
            alt="Founder maritime mentor"
          />
          <div className="hero-card-tag">Ex-Deck Officer & Training Mentor</div>
        </div>
      </section>

      <section className="section founder-details">
        <div className="section-heading">
          <h2 className="section-title">
            Meet the mentor behind Sailor Academy
          </h2>
          <p className="section-subtitle">
            Experienced guidance, structured coaching, and a supportive path
            from preparation to placement.
          </p>
        </div>

        <div className="founder-grid">
          <div className="founder-content">
            <div className="feature-grid">
              <div className="service-card">
                <h3>Real mentorship</h3>
                <p>
                  Advice from mentors who have worked on merchant vessels and
                  seen the industry firsthand.
                </p>
              </div>
              <div className="service-card">
                <h3>Proven results</h3>
                <p>
                  Students gain clarity, discipline, and confidence for both
                  exams and interviews.
                </p>
              </div>
              <div className="service-card">
                <h3>Practical training</h3>
                <p>
                  Hands-on exam strategy, mock interview drills, and sponsor
                  preparation.
                </p>
              </div>
            </div>
          </div>
          <div className="founder-image">
            <img
              src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80"
              alt="Founder portrait"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Founder;
