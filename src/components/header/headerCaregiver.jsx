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
        <Navbar.Brand href="/">
          <img src="logo.png" alt="Company Logo" className="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto lead">
            <Link to="/home" className="nav-link"><span class="nav-text">Home</span></Link>
            <Link to="/chat" className="nav-link"><span class="nav-text">Resident Sign Up</span></Link>
            <Link to="/calendar" className="nav-link"><span class="nav-text">Search Resident</span></Link>
            <Link to="/emergency" className="nav-link"><span class="nav-text">Sign Out</span></Link>
            <button onClick={handleSignOut}>Sign Out</button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </>
    )

}
export default HeaderCaregiver;
