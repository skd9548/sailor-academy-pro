import { Link } from "react-router-dom";

function Contact() {
  return (
    <>
      <section className="section page-hero contact-hero surface-soft">
        <div className="page-hero-copy">
          <span className="eyebrow">CONTACT</span>
          <h1>Ready to join Sailor Academy?</h1>
          <p className="hero-text">
            Have questions about courses, sponsorship, or enrollment? Get in
            touch and our team will respond quickly with the right next step.
          </p>
          <div className="hero-buttons">
            <Link to="/contact" className="main-btn">
              Book Free Counselling
            </Link>
            <Link to="/courses" className="secondary-btn">
              View Courses
            </Link>
          </div>
        </div>

        <div className="page-hero-media contact-hero-card">
          <img
            src="https://images.unsplash.com/photo-1518546305924-5f25ad01634d?auto=format&fit=crop&w=1100&q=80"
            alt="Contact support"
          />
          <div className="hero-card-tag">Support available 7 days a week</div>
        </div>
      </section>

      <section className="section contact-section">
        <div className="section-heading">
          <h2 className="section-title">Get in touch with Sailor Academy</h2>
          <p className="section-subtitle">
            Share your course requirements and we will help you pick the right
            training plan for IMUCET and sponsorship.
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-panel surface">
            <h3>Contact Information</h3>
            <p>Email: contact@sailoracademy.com</p>
            <p>Phone: +91 9548490154</p>
            <p>Location: Agra, India</p>
            <div className="contact-badges">
              <span>IMUCET Coaching</span>
              <span>Sponsorship Guidance</span>
              <span>Free Counselling</span>
            </div>
          </div>

          <form
            className="contact-form"
            action="https://formsubmit.co/sandeep456don@gmail.com"
            method="POST"
          >
            <input type="text" name="name" placeholder="Your Name" required />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              required
            />
            <textarea
              name="message"
              placeholder="Tell us about your goals"
              required
            ></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </section>
    </>
  );
}

export default Contact;
