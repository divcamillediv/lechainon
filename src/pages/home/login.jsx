import React from 'react';
import './login.css';
import HeaderLogin from '../../components/header/headerLogin';

function Login() {
  return (
    <>
      <HeaderLogin />
      <div className="login-page">
        <div className="login-form">
          <div className="login-title">Connexion</div>
          <div className="username-label">Username or e-mail</div>
          <input type="text" className="username-input" />
          <div className="password-label">Password</div>
          <input type="password" className="password-input" />
          <button className="sign-in-button">Sign In</button>
        </div>
        <div className="forgot-password">Forgot Password?</div>
      </div>
    </>
  );
}

export default Login;
