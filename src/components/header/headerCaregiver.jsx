import React from "react";
import "./header.css";
import { Link, useNavigate } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';

function HeaderCaregiver() {
  const navigate = useNavigate();

  const handleSignOut = () => {
    const confirmed = window.confirm('Are you sure you want to sign out?');
    if (confirmed) {
      // iif user confirms, navigate to the login page
      navigate('/login');
    }
  };
  
    return(
        <>
        <Navbar class="navbar" expand="lg">
      <Container>
        <Navbar.Brand href="/homecaregiver">
          <img src="src/assets/logo.png" alt="Company Logo" className="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto lead">
            <Link to="/homecaregiver" className="nav-link"><span class="nav-text">Home</span></Link>
            <Link to="/chatcaregiver" className="nav-link"><span class="nav-text">Chat</span></Link>
            <Link to="/calendarcaregiver" className="nav-link"><span class="nav-text">Calendar</span></Link>
            <Link to="/feedbackcaregiver" className="nav-link"><span class="nav-text">Feedback</span></Link>
            <button onClick={handleSignOut}>Sign Out</button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </>
    )

}
export default HeaderCaregiver;
