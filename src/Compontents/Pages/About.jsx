import React from 'react'
import './About.css';

function About() {
  return (
    <>
            <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <h1>About Us</h1>
        <p>We’re more than just a workspace we’re a community for creators, founders, and remote professionals.</p>
      </section>

      {/* Mission & Vision */}
      <section className="about-section">
        <h2>Our Mission</h2>
        <p>
          To empower businesses, entrepreneurs, and remote workers with inspiring and flexible workspaces that
          support growth, creativity, and collaboration.
        </p>
      </section>

      {/* What Makes Us Different */}
      <section className="about-section">
        <h2>Why Choose Us?</h2>
        <ul>
          <li> Variety of spaces to suit your working style – from open desks to private suites.</li>
          <li> High-speed WiFi, meeting rooms, coffee bar, printing and more.</li>
          <li> Vibrant community events and networking opportunities.</li>
          <li> Flexible booking options – daily, weekly or monthly.</li>
        </ul>
      </section>

      {/* Our Team */}
      <section className="about-section">
        <h2>Meet Our Team</h2>
        <p>
          Behind every great space is a passionate team. We’re a group of creatives, professionals, and
          community builders working together to make your workday smoother and more productive.
        </p>
      </section>

      {/* Call to Action */}
      <section className="about-cta">
        <h3>Ready to join our community?</h3>
        <button className="btn1">Book a Tour</button>
      </section>
    </div>





      
      {/* workspace newletter section  */}

      <div className="newsletter-section">
        <h2>Stay in the Loop</h2>
        <p>
          Get the latest workspace updates, exclusive deals, and productivity tips straight to your inbox.
          No spam just useful content, once a week.
        </p>
        <form className="newsletter-form">
          <input type="email" placeholder="Enter your email address" required />
          <button type="submit" className="btn">Subscribe</button>
        </form>
      </div>
    </>
  )
}

export default About