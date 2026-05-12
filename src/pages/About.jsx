function About() {
  return (
    <section className="section about">
      <div className="section-heading">
        <h2 className="section-title">About Sailor Academy</h2>
        <p className="section-subtitle">
          We are a specialized Merchant Navy coaching academy designed to help
          students transition from classroom success to real-world maritime
          careers.
        </p>
      </div>

      <div className="about-grid">
        <div className="about-text">
          <p>
            Founded by experienced seafarers, Sailor Academy offers structured
            training for IMUCET aspirants, sponsorship interview preparation,
            and practical industry insight.
          </p>
          <p>
            Our methodology combines exam-focused lessons, performance feedback,
            and direct guidance from maritime professionals so every student can
            move confidently toward a placement.
          </p>
          <div className="feature-grid">
            <div className="service-card">
              <h3>Focused curriculum</h3>
              <p>
                Clear syllabus planning, topic mastery, and weekly progress
                goals.
              </p>
            </div>
            <div className="service-card">
              <h3>Career coaching</h3>
              <p>
                Resume review, sponsor interview support, and college selection
                help.
              </p>
            </div>
          </div>
        </div>
        <div className="about-media">
          <img
            src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=80"
            alt="Maritime academy students"
          />
        </div>
      </div>
    </section>
  );
}

export default About;
