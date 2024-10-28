import React from 'react';
import './Footer.css'; // Import the CSS file for styling
import { FaInstagram, FaFacebook } from 'react-icons/fa'; // Ensure you have react-icons installed

const Footer = () => {
  return (
    <footer className="footer">
      <img src="Logo.jpg" alt="Logo" className="footer-logo" />
      <div className="footer-content"> {/* Updated div class to footer-content */}
        <div className="footer-icons">
          <a href="https://www.instagram.com/rebootgymfitness" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="icon" />
          </a>
          <a href="https://www.facebook.com/share/ejWs91EDPgESomGk/?mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="icon" />
          </a>
        </div>
        <a href="tel:+1234567890" className="footer-phone">Contact: +1234567890</a> {/* Made phone number clickable */}
      </div>
    </footer>
  );
};

export default Footer;
