// src/components/Dashboard.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [totalIncome, setTotalIncome] = useState(0);

  useEffect(() => {
    axios.get('/dashboard').then((response) => setTotalIncome(response.data.totalIncome));
  }, []);

  return (
    <div>
      <h2>Dashboard</h2>
      <p>Total Income: ${totalIncome}</p>
    </div>
  );
};

export default Dashboard;
