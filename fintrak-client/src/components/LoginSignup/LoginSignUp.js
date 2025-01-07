import React, { useContext } from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext'; // Import the AuthContext
import './LoginSignUp.css';

const LoginSignUp = () => {
  const navigate = useNavigate();
  const { setIsLoggedIn } = useContext(AuthContext); // Get the login state setter

  const handleGoogleSuccess = (credentialResponse) => {
    console.log('Google login successful:', credentialResponse);
    setIsLoggedIn(true); // Update the login state
    navigate('/app/dashboard'); // Redirect to dashboard
  };

  const handleGoogleFailure = (error) => {
    console.error('Google login failed:', error);
  };

  return (
    <div className="login-signup-container">
      <h2>Login / Sign Up</h2>
      <GoogleLogin
        onSuccess={handleGoogleSuccess}
        onError={handleGoogleFailure}
      />
    </div>
  );
};

export default LoginSignUp;
