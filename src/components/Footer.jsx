import React from "react";
import { FaWhatsapp, FaEnvelope, FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa'; // Importing icons
import "./../styles/footer.css";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="footer">
    <div className="footer-container">
      {/* Section 1: Contact Information */}
      <div className="footer-section">
        <img src={logo} alt="Genius Gateways" className="footer-logo" />    
        <h2 className="footer-heading">GENIUS GATEWAYS</h2>
        <p className="footer-heading">
          <strong>SEAMLESS <span className="highlight">VISA SOLUTIONS</span></strong><br />
          FOR YOUR <span className="highlight">GLOBAL JOURNEY</span>!
        </p>
        <div className="footer-contact">
          <p><FaWhatsapp className="icon" /> +91 7666058015</p>
          <p><FaEnvelope className="icon" /> geniusgateway@gmail.com</p>
        </div>
        <a href="https://wa.me/+917666058015" className="whatsapp-btn" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp /> Whatsapp Click to Chat
        </a>
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