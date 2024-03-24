import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';

function HeaderResident() {
  return (
    <Navbar class="navbar" expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <img src="src/assets/logo.png" alt="Company Logo" className="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto lead">
            <Link to="/home" className="nav-link"><span class="nav-text">Home</span></Link>
            <Link to="/chat" className="nav-link"><span class="nav-text">Chat</span></Link>
            <Link to="/calendar" className="nav-link"><span class="nav-text">Calendar</span></Link>
            <Link to="/intervention-plan" className="nav-link"><span class="nav-text">Intervention Plan</span></Link>
            <Link to="/feedback" className="nav-link"><span class="nav-text">Feedback</span></Link>
            <Link to="/emergency" className="nav-link"><span class="nav-text">Emergency</span></Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}


  export default HeaderResident;