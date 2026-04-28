function Contact() {
  return (
    <section className="contact">
      <h1>Contact Us</h1>

      <form
        className="contact-form"
        action="https://formsubmit.co/sandeep456don@gmail.com"
        method="POST"
      >
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <input type="text" name="phone" placeholder="Phone Number" required />
        <textarea name="message" placeholder="Your Message" required></textarea>

        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}

export default Contact;
