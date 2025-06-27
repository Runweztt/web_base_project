import React from 'react';
import './Footer.css';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import logoimg from '../../assets/logoimg.png'

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-logo">
        
            <img src={logoimg} alt="logo" />
          <p>Empowering creators, teams & remote professionals through premium workspaces.</p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/product">Workspaces</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#faq">FAQs</a></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h3>Contact</h3>
          <p>Email: hello@worknest.com</p>
          <p>Phone: +234 810 123 4567</p>
          <p>Address: 14 Innovation Way, Lagos, NG</p>
        </div>

        <div className="footer-socials">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaLinkedinIn /></a>
            <a href="#"><FaInstagram /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} WorkNest. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
