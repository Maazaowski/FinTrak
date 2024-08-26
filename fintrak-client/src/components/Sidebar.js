// src/components/Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>FinTrak</h2>
      <ul>
        <li><Link to="/">Dashboard</Link></li>
        <li><Link to="/invoices">Invoices</Link></li>
        {/* Add more links as needed */}
      </ul>
    </div>
  );
};

export default Sidebar;
