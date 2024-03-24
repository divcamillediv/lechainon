import React from "react";
import "./header.css";

function HeaderCaregiver() {
    return(
        <>
        <Navbar class="navbar" expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <img src="src/assets/logo.png" alt="Company Logo" className="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto lead">
            <Link to="/home" className="nav-link"><span class="nav-text">Home</span></Link>
            <Link to="/chat" className="nav-link"><span class="nav-text">Resident Sign Up</span></Link>
            <Link to="/calendar" className="nav-link"><span class="nav-text">Search Resident</span></Link>
            <Link to="/emergency" className="nav-link"><span class="nav-text">Sign Out</span></Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </>
    )

}
export default HeaderCaregiver;
