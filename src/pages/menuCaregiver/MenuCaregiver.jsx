import React from 'react';
import { Link } from 'react-router-dom';
import HeaderResident from '../../components/header/headerResident';
import './menuCaregiver.css';

function MenuCaregiver() {
  return (
    <>
    {/* can try 20 - 80 - 20 */}
    <HeaderResident/>
    <div className="container-fluid">
      <div className="row">
        {/* Left Menu (25% width) */}
        <div className="col-lg-2">
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
        <div className="col-lg-8">
            {/*<p>test1</p>*/}
          <div className="main-content">
            <h1>My Residents</h1>
            {/*<p>test2</p>*/}
          </div>
          {/*<p>test3</p>*/}
          <div className="row card-deck">
          
            <div className="col-lg-6">
                {/*<p>test</p>*/}
                <div className="card m-2 ">
                    <div className="card-body">
                        <img class="card-img-top-cover card-img-top-1" src="src/pages/menuCaregiver/img/marie-ange.jpg" alt="Card image cap"/>
                      <h5 className="card-title text-center">Marie-Ange Laurent</h5>
                      <a href="#" class="btn btn-primary d-flex justify-content-center">View Profile</a>
                    </div>
                </div>
            </div>
            <div className="col-lg-6">
                {/*<p>test</p>*/}
                <div className="card m-2 ">
            <div className="card-body">
                <img class="card-img-top-cover card-img-top-1" src="src/pages/menuCaregiver/img/robine.jpg" alt="Card image cap"/>
              <h5 className="card-title text-center">Robine Mercy</h5>
              <a href="#" class="btn btn-primary d-flex justify-content-center">View Profile</a>
            </div>
          </div>
        </div>
        </div>
        <div className="row card-deck">
          
            <div className="col-lg-6">
                {/* Add a user */}
                <div className="card m-2 ">
                    <div className="card-body">
                        <img class="card-img-top card-img-top-1" src="src/pages/menuCaregiver/img/adduser.svg" alt="Card image cap"/>
                        
                        <a href="#" class="btn btn-primary text-center d-flex justify-content-center">Add a resident</a>
                    </div>
                </div>
            </div>
            
          
        </div>
            
          {/* Experiemnt with image */}
          
          {/* div end */}
          
            
       
          
        </div>

        {/* Right Sidebar (20% width) */}
        <div className="col-lg-2">
          <div className="right-sidebar">
            <h3>Chat</h3>
          </div>
          <div className="justify-content-center d-flex ">
                <div class="col-3 col-sm-6">
                    <img class="rounded-circle profile-image" src="src/pages/menuCaregiver/img/marie-ange.jpg" alt="Card image cap"/>
                </div>
                <p>Hi Sylvie it's been great!</p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default MenuCaregiver;
