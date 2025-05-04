import React from "react";
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import "../styles/Footer.scss"; // Import the SCSS file
import { Link } from "react-router-dom";

const UniqueFooter = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-grid">
          {/* Company info */}
          <div className="footer-section">
            <h3 className="footer-heading">Sree Siva Balaji</h3>
            <p className="footer-text">
              Combining luxury and sustainability through innovative design and
              premium quality.
            </p>
            <div className="social-icons">
              <FaLinkedin className="social-icon" />
              <FaGithub className="social-icon" />
              <FaTwitter className="social-icon" />
              <FaInstagram className="social-icon" />
            </div>
          </div>

          {/* Quick links */}
          <div className="footer-section quick-links">
            <h4 className="footer-heading footer-heading-small">Quick Links</h4>
            <ul className="quick-links-list">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/commercial">Commercial</Link>
              </li>
              <li>
                <Link to="/residential">Residential</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-section">
            <h4 className="footer-heading footer-heading-small">Contact Us</h4>
            <div className="contact-item">
              <MdEmail className="contact-icon" />
              <span>contact@sreesivabalaji.com</span>
            </div>
            <p></p>
          </div>

          {/* Newsletter */}
          {/* <div className="footer-section">
            <h4 className="footer-heading footer-heading-small">Newsletter</h4>
            <p className="footer-text">
              Subscribe to our newsletter for exclusive offers and updates.
            </p>
            <div className="newsletter-form">
              <input type="email" placeholder="Your email" />
              <button>Subscribe</button>
            </div>
          </div> */}
        </div>

        {/* Copyright */}
        <div className="copyright">
          <p>
            &copy; {new Date().getFullYear()} Sree Siva Balaji. All rights
            reserved.
          </p>
          <p className="tagline">
            Combining the luxury of gold with the sustainability of green.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default UniqueFooter;
