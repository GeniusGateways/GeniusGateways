import React from "react";
import { FaWhatsapp, FaEnvelope, FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa'; // Importing icons
import "./../styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
    <div className="footer-container">
      {/* Section 1: Contact Information */}
      <div className="footer-section">
        <img src="logo.png" alt="Genius Gateways" className="footer-logo" /> {/* Replace with actual logo path */}
        <p className="footer-heading">
          <strong>SEAMLESS <span className="highlight">VISA SOLUTIONS</span></strong><br />
          FOR YOUR <span className="highlight">GLOBAL JOURNEY</span>!
        </p>
        <div className="footer-contact">
          <p><FaWhatsapp className="icon" /> +923183561921</p>
          <p><FaWhatsapp className="icon" /> +923183561921</p>
          <p><FaEnvelope className="icon" /> geniusgateway@gmail.com</p>
        </div>
        <a href="https://wa.me/+923183561921" className="whatsapp-btn" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp /> Whatsapp Click to Chat
        </a>
      </div>

      {/* Section 2: Links */}
      <div className="footer-section">
        <h4>Links</h4>
        <ul className="footer-links">
          <li><a href="#">About Us</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Case Studies</a></li>
          <li><a href="#">How it works</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Careers</a></li>
          <li><a href="#">Areas We Serve</a></li>
        </ul>
      </div>

      {/* Section 3: Address */}
      <div className="footer-section">
        <h4>Contact us</h4>
        <p>
          Registered office:<br />
          A/402, Ganpati Complex, Sector 27,<br />
          Nerul east, Navi Mumbai 400706
        </p>
        <p>
          Branch:<br />
          G 2, Dwarkesh Darshan, Khajuria Tank Road,<br />
          Opp. Majitia Nagar, Off S V Road,<br />
          Kandivali West, Mumbai 400067
        </p>
        <div className="social-icons">
          <a href="#"><FaFacebookF className="social-icon" /></a>
          <a href="#"><FaInstagram className="social-icon" /></a>
          <a href="#"><FaTwitter className="social-icon" /></a>
          <a href="#"><FaLinkedinIn className="social-icon" /></a>
        </div>
      </div>
    </div>
  </footer>
  );
};

export default Footer;
