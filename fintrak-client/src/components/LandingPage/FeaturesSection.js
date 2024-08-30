import React from 'react';
import './FeaturesSection.css';

const FeaturesSection = () => {
  return (
    <div className="features-container">
      <h2>Features</h2>
      <div className="features-grid">
        <div className="feature">
          <h3>Easy Invoicing</h3>
          <p>Create and send invoices in minutes.</p>
        </div>
        <div className="feature">
          <h3>Track Payments</h3>
          <p>Keep track of payments and outstanding balances.</p>
        </div>
        <div className="feature">
          <h3>Dashboard Insights</h3>
          <p>Get a clear overview of your finances.</p>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
