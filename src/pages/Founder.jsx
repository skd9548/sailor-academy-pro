function Founder() {
  return (
    <section className="section founder">
      <div className="section-heading">
        <h2 className="section-title">Meet the mentor behind Sailor Academy</h2>
        <p className="section-subtitle">
          Our founder is a seasoned Merchant Navy professional with a mission to
          make maritime careers accessible, confident, and prepared.
        </p>
      </div>

      <div className="founder-grid">
        <div className="founder-content">
          <p>
            With years of experience at sea and in training cadets, our founder
            built Sailor Academy to solve the gap between exam preparation and
            real shipboard readiness.
          </p>
          <p>
            The academy emphasizes practical guidance, accurate sponsorship
            preparation, and a supportive path from application through
            selection.
          </p>
          <div className="feature-grid">
            <div className="service-card">
              <h3>Real mentorship</h3>
              <p>
                Advice from mentors who have worked on merchant vessels and
                responded to industry requirements.
              </p>
            </div>
            <div className="service-card">
              <h3>Proven results</h3>
              <p>
                Students gain clarity, discipline, and confidence for both exams
                and interviews.
              </p>
            </div>
          </div>
        </div>
        <div className="founder-image">
          <img
            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1200&q=80"
            alt="Founder portrait"
          />
        </div>
      </div>
    </section>
  );
}

export default Founder;
