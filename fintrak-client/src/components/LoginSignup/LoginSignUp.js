import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import './LoginSignUp.css'; // Add custom styles if needed

const LoginSignUp = () => {
  const handleGoogleSuccess = (credentialResponse) => {
    console.log('Google login successful:', credentialResponse);
    // Handle successful login with Google here (e.g., send token to backend)
  };

  const handleGoogleFailure = (error) => {
    console.error('Google login failed:', error);
    // Handle failed login attempt
  };

  return (
    <div className="login-signup-container">
      <h2>Login / Sign Up</h2>
      <div className="auth-buttons">
        <button className="login-button">Log In</button>
        <button className="signup-button">Sign Up</button>
      </div>
      <GoogleLogin
        onSuccess={handleGoogleSuccess}
        onError={handleGoogleFailure}
      />
    </div>
  );
};

export default LoginSignUp;
