import React from 'react';
import './Footer.css';
import { FaInstagram, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <img src="Logo.jpg" alt="Logo" className="footer-logo" />
      <div className="footer-content">
        <div className="footer-icons">
          <a href="https://www.instagram.com/rebootgymfitness" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="icon" />
          </a>
          <a href="https://www.facebook.com/share/ejWs91EDPgESomGk/?mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="icon" />
          </a>
        </div>
        <a href="tel:+91 8104583327" className="footer-phone">Contact: +91 8104583327</a>
      </div>
    </footer>
  );
};

export default Footer;