// src/components/InvoiceList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const InvoiceList = () => {
  const [invoices, setInvoices] = useState([]);

  useEffect(() => {
    axios.get('/invoices').then((response) => setInvoices(response.data));
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
