import React from 'react';
import './TestimonialsSection.css';

const TestimonialsSection = () => {
  return (
    <div className="testimonials-container">
      <h2>What Our Users Say</h2>
      <div className="testimonial">
        <p>"FinTrak has been a game-changer for managing my business finances!"</p>
        <span>- John Doe, Freelancer</span>
      </div>
      <div className="testimonial">
        <p>"The dashboard feature gives me a great overview of my income."</p>
        <span>- Jane Smith, Small Business Owner</span>
      </div>
    </div>
  );
};

export default TestimonialsSection;
