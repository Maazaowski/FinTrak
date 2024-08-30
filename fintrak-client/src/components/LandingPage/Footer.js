import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; 2024 FinTrak. All rights reserved.</p>
      <div className="footer-links">
        <a href="/privacy-policy">Privacy Policy</a>
        <a href="/terms-of-service">Terms of Service</a>
      </div>
    </footer>
  );
};

export default Footer;
