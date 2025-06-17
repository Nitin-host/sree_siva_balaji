import {FaInstagram,FaWhatsapp,} from "react-icons/fa";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import "../styles/Footer.scss";

const UniqueFooter = () => {
  const navigate = useNavigate();

  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-grid">
          {/* Company info */}
          <div className="footer-section">
            <h3 className="footer-heading">Sree Siva Balaji Enterprises</h3>
            <p className="footer-text">
              Combining luxury and sustainability through innovative design and
              premium quality.
            </p>
            <div className="social-icons">
              <a
                // href="https://wa.me/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram size={30} className="social-icon" />
              </a>
              <a
                href="https://wa.me/9030613838"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp size={30} className="social-icon" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div className="footer-section quick-links">
            <h4 className="footer-heading footer-heading-small">Quick Links</h4>
            <ul className="quick-links-list">
              <li>
                <span onClick={() => navigate("/")} className="footer-link">
                  Home
                </span>
              </li>
              <li>
                <span
                  onClick={() => navigate("/commercial")}
                  className="footer-link"
                >
                  Commercial
                </span>
              </li>
              <li>
                <span
                  onClick={() => navigate("/residential")}
                  className="footer-link"
                >
                  Residential
                </span>
              </li>
              <li>
                <span
                  onClick={() => navigate("/about")}
                  className="footer-link"
                >
                  About Us
                </span>
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
            <div className="location-item">
              <MdLocationOn className="location-icon" />
              <span>{`Plot No 481, Flat No 103, Green Leaf Apartment, RajaRajeshwara Nagar, Hyderabad, Rangareddy, Telangana, 500084`}</span>
            </div>
          </div>
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
