import React from 'react';
import { Link } from 'react-router-dom';
import HeaderResident from '../../components/header/headerResident';
import './menuCaregiver.css';

function Layout() {
  return (
    <>
    {/* can try 20 - 80 - 20 */}
    <HeaderResident/>
    <div className="container-fluid">
      <div className="row">
        {/* Left Menu (25% width) */}
        <div className="col-lg-3">
          <div className="left-menu">
            <h3>Menu</h3>
            <div className="menu-items">
              <Link to="/" className="btn btn-primary">Home</Link>
              <Link to="/residents" className="btn btn-primary">Your Residents</Link>
              <Link to="/calendar_caregiver" className="btn btn-primary">Your Calendar</Link>
              <Link to="/surveys" className="btn btn-primary">Surveys & Statistics</Link>
            </div>
          </div>
        </div>

        {/* Main Content (50% width) */}
        <div className="col-lg-6">
          <div className="main-content">
            <h1>My Residents</h1>
          </div>
        </div>

        {/* Right Sidebar (25% width) */}
        <div className="col-lg-3">
          <div className="right-sidebar">
            <h3>Chat</h3>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Layout;
