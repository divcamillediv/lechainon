import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav } from 'react-bootstrap';
import '/components/navbar-left/navbarleft.css';

const LeftNavbar = () => {
  return (
    <Nav className="flex-column bg-light navbar-left">
      <Nav.Link href="#">Home</Nav.Link>
      <Nav.Link href="#">About</Nav.Link>
      <Nav.Link href="#">Services</Nav.Link>
      <Nav.Link href="#">Contact</Nav.Link>
    </Nav>
  );
};

export default LeftNavbar;