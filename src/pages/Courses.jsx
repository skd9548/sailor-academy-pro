function Courses() {
  return (
    <section className="section courses">
      <div className="section-heading">
        <h2 className="section-title">
          Training programs built for Merchant Navy success
        </h2>
        <p className="section-subtitle">
          Pick the course that fits your goals: exam preparation, sponsorship
          readiness, or full career mentorship from experienced maritime
          professionals.
        </p>
      </div>

      <div className="course-cards">
        <div className="course-card">
          <h2>PCM Mastery</h2>
          <p>
            Deep understanding of Physics, Chemistry, and Mathematics for top
            IMUCET performance.
          </p>
        </div>
        <div className="course-card">
          <h2>IMUCET Strategy</h2>
          <p>
            Exam-specific coaching, mock tests, and time management techniques.
          </p>
        </div>
        <div className="course-card">
          <h2>Sponsorship Readiness</h2>
          <p>
            Interview coaching, document guidance, and practical sponsor
            preparation.
          </p>
        </div>
        <div className="course-card">
          <h2>Real Experience</h2>
          <p>
            Learn from seafarers with direct Merchant Navy experience and
            industry insights.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Courses;
