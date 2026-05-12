function Contact() {
  return (
    <section className="section contact">
      <div className="section-heading">
        <h2 className="section-title">Get in touch with Sailor Academy</h2>
        <p className="section-subtitle">
          Have questions about courses, sponsorship, or enrollment? Send us a
          message and we will respond quickly.
        </p>
      </div>

      <div className="contact-grid">
        <div className="contact-details surface">
          <div>
            <h3>Contact Information</h3>
            <p>Email: contact@sailoracademy.com</p>
            <p>Phone: +91 98765 43210</p>
            <p>Location: Mumbai, India</p>
          </div>
          <div>
            <h3>What we help with</h3>
            <p>
              IMUCET coaching, sponsorship guidance, interview prep, and career
              planning.
            </p>
          </div>
        </div>

        <form
          className="contact-form"
          action="https://formsubmit.co/sandeep456don@gmail.com"
          method="POST"
        >
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <input type="text" name="phone" placeholder="Phone Number" required />
          <textarea
            name="message"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
