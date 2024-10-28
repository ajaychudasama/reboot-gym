import React from 'react';
import './Header.css'; // Import the CSS file for styling

const Header = () => {
  return (
    <header className="header">
      <a href="/" className="logo-link"> {/* Make the logo clickable */}
        <img src="Logo.jpg" alt="Logo" className="logo" />
      </a>
      <nav className="nav">
        <a href="/" className="nav-link active">Home</a>
        <a href="/privacy-policy" className="nav-link">Privacy Policy</a>
      </nav>
    </header>
  );
};

export default Header;
