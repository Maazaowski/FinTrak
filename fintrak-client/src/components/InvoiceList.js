import React, { useState, useEffect } from 'react';
import axios from 'axios';

const InvoiceList = () => {
  const [invoices, setInvoices] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/invoices')  // Correct endpoint URL
      .then((response) => setInvoices(response.data))
      .catch((error) => console.error('Error fetching invoices:', error));
  }, []);

  return (
    <div>
      <h2>Invoices</h2>
      <ul>
        {invoices.map((invoice) => (
          <li key={invoice._id}>
            {invoice.date} - ${invoice.amount} - {invoice.status}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InvoiceList;
