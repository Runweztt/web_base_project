import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <h1>Contact Us</h1>
        <p>We're here to help you find the perfect workspace or answer any questions.</p>
      </section>

      {/* Contact Info + Form */}
      <section className="contact-content">
        <div className="contact-details">
          <h2>Get In Touch</h2>
          <p><strong>Phone:</strong> +234 801 234 5678</p>
          <p><strong>Email:</strong> hello@yourworkspace.com</p>
          <p><strong>Location:</strong>  14 Innovation Way, Lagos, NG</p>
        </div>

        <form className="contact-form">
          <h2>Send a Message</h2>
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email Address" required />
          <textarea placeholder="Your Message..." required></textarea>
          <button type="submit" className="btn1">Submit</button>
        </form>
      </section>
    </div>
  );
}

export default Contact;
