import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import Invoices from './components/Invoices';
import InvoiceForm from './components/InvoiceForm';
import LandingPage from './components/LandingPage/LandingPage';
import LoginSignUp from './components/LoginSignup/LoginSignUp';
import './App.css';

function App() {
  return (
    <GoogleOAuthProvider clientId="34344977592-g4b1ql3ndc3hdeek2ouchjrmkfv118co.apps.googleusercontent.com">
      <Router>
        <div className="App">
          <Routes>
            {/* Route for the Landing Page */}
            <Route path="/" element={<LandingPage />} />

            {/* Route for the Login/SignUp Page */}
            <Route path="/login" element={<LoginSignUp />} />

            {/* Routes for the Main Application */}
            <Route
              path="/app/*"
              element={
                <div className="app-container">
                  <Sidebar />
                  <div className="main-content">
                    <Header />
                    <div className="content">
                      <Routes>
                        <Route path="dashboard" element={<Dashboard />} />
                        <Route path="invoices" element={<Invoices />} />
                        <Route path="new-invoice" element={<InvoiceForm />} />
                      </Routes>
                    </div>
                  </div>
                </div>
              }
            />
          </Routes>
        </div>
      </Router>
    </GoogleOAuthProvider>
  );
}

export default App;
