import React from 'react';
import './header.css';

function HeaderLogin() {
    return (
      <header className="header">
        <img src="src/assets/logo.png" alt="Company Logo" className="logo" />
        <nav className="navigation">
          <a href="#" className="nav-link">
            Home
          </a>
          <a href="#" className="nav-link">
            Login
          </a>
          <a href="#" className="nav-link">
            Contact Us
          </a>
        </nav>
        </header>
    );
  }

  export default HeaderLogin;