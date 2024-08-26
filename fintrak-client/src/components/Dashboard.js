import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [totalIncome, setTotalIncome] = useState(0);

  useEffect(() => {
    axios.get('http://localhost:3000/dashboard')  // Correct endpoint URL
      .then((response) => setTotalIncome(response.data.totalIncome))
      .catch((error) => console.error('Error fetching dashboard data:', error));
  }, []);

  return (
    <div>
      <h2>Dashboard</h2>
      <p>Total Income: ${totalIncome}</p>
    </div>
  );
};

export default Dashboard;
