import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import './HeroSection.css';

const HeroSection = () => {
  return (
    <div className="hero-container">
      <h1>Welcome to FinTrak</h1>
      <p>Manage Your Finances with Ease</p>
      {/* Use Link to navigate to the login page */}
      <Link to="/login">
        <button className="cta-button">Get Started</button>
      </Link>
    </div>
  );
};

export default HeroSection;
