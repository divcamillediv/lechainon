import './login.css';
import HeaderLogin from '../../components/header/headerLogin';
import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom"; // idea from "https://stackoverflow.com/questions/71721691/how-do-you-go-to-another-page-on-button-click-in-react"

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const handleResidentClick = () => navigate("/home", { replace: true });
  const handleCaregiverClick = () => navigate("/homecaregiver", { replace: true });

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if username and password are correct
    // check user type
    if (username === 'resident' && password === 'password') {
 
      console.log('Authentication successful');

      handleResidentClick();
    } else if (username === 'caregiver' && password === 'password') {

      console.log('Authentication successful');

      handleCaregiverClick();
    }else{
      // Authentication failed
      console.log('Authentication failed');
    }
  };

  return (
    <>
      <HeaderLogin />
      <div className="login-page">
        <div className="login-form">
          <div className="login-title">Connexion</div>
          <div className="username-label">Username or e-mail</div>
          <input
            type="text"
            className="username-input"
            value={username}
            onChange={handleUsernameChange}
          />
          <div className="password-label">Password</div>
          <input
            type="password"
            className="password-input"
            value={password}
            onChange={handlePasswordChange}
          />
          <button className="sign-in-button" onClick={handleSubmit}>Sign In</button>
        </div>
        <div className="forgot-password">Forgot Password?</div>
      </div>
    </>
  );
}

export default Login;