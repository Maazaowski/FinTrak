// src/components/InvoiceForm.js
import React, { useState } from 'react';
import axios from 'axios';

const InvoiceForm = () => {
  const [invoice, setInvoice] = useState({
    customer: '',
    invoiceNumber: '',
    poNumber: '',
    invoiceDate: '',
    paymentDue: '',
    items: [{ description: '', quantity: 1, price: 0 }],
    discount: 0,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInvoice((prevInvoice) => ({
      ...prevInvoice,
      [name]: value,
    }));
  };

  const handleItemChange = (index, e) => {
    const { name, value } = e.target;
    const newItems = [...invoice.items];
    newItems[index][name] = value;
    setInvoice((prevInvoice) => ({
      ...prevInvoice,
      items: newItems,
    }));
  };

  const addItem = () => {
    setInvoice((prevInvoice) => ({
      ...prevInvoice,
      items: [...prevInvoice.items, { description: '', quantity: 1, price: 0 }],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3000/invoices', invoice);
      alert('Invoice created successfully!');
      // Clear form or redirect as needed
    } catch (error) {
      console.error('Error creating invoice:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create New Invoice</h2>

      <div>
        <label>Customer</label>
        <input
          type="text"
          name="customer"
          value={invoice.customer}
          onChange={handleInputChange}
          required
        />
      </div>

      <div>
        <label>Invoice Number</label>
        <input
          type="text"
          name="invoiceNumber"
          value={invoice.invoiceNumber}
          onChange={handleInputChange}
          required
        />
      </div>

      <div>
        <label>P.O./S.O. Number</label>
        <input
          type="text"
          name="poNumber"
          value={invoice.poNumber}
          onChange={handleInputChange}
        />
      </div>

      <div>
        <label>Invoice Date</label>
        <input
          type="date"
          name="invoiceDate"
          value={invoice.invoiceDate}
          onChange={handleInputChange}
          required
        />
      </div>

      <div>
        <label>Payment Due</label>
        <input
          type="date"
          name="paymentDue"
          value={invoice.paymentDue}
          onChange={handleInputChange}
          required
        />
      </div>

      <h3>Items</h3>
      {invoice.items.map((item, index) => (
        <div key={index}>
          <input
            type="text"
            name="description"
            placeholder="Description"
            value={item.description}
            onChange={(e) => handleItemChange(index, e)}
          />
          <input
            type="number"
            name="quantity"
            placeholder="Quantity"
            value={item.quantity}
            onChange={(e) => handleItemChange(index, e)}
          />
          <input
            type="number"
            name="price"
            placeholder="Price"
            value={item.price}
            onChange={(e) => handleItemChange(index, e)}
          />
        </div>
      ))}
      <button type="button" onClick={addItem}>Add Item</button>

      <div>
        <label>Discount</label>
        <input
          type="number"
          name="discount"
          value={invoice.discount}
          onChange={handleInputChange}
        />
      </div>

      <button type="submit" onClick={handleSubmit}>Save and Continue</button>
    </form>
  );
};

export default InvoiceForm;
