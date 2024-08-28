import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import Invoices from './components/Invoices';
import InvoiceForm from './components/InvoiceForm';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Sidebar />
        <div className="main-content">
          <Header />
          <div className="content">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/new-invoice" element={<InvoiceForm />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
