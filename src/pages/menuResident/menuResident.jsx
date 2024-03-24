import React from 'react';
//import './pages/home/login.css';
import { Link } from 'react-router-dom';
import HeaderLogin from '../../components/header/headerLogin';
import 'bootstrap/dist/css/bootstrap.min.css';
import './menuResident.css'; // Import your custom CSS file for styling

function MenuResident() {
    return (
      <>
       <HeaderLogin />
        {/* Jumbotron section */}
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
          <h1 className="display-4">Welcome to Your Resident Portal <br /><span className="smaller-text">Marie-Ange Laurent</span></h1>
            <p className="lead">Explore and manage your services and resources here.</p>
          </div>
        </div>
  
        {/* Cards section */}
        <div className="container mt-5">
          <div className="row">
         
            <div className="col-md-6 mb-4">
                <Link className="link-text" to="/chat">
                <div className="card card-hover">
                    <img src="src/pages/menuResident/img/Designer-7.png" className="card-img-top" alt="Card Image" />
                    <div className="card-body">
                        <h5 className="card-title">Chat</h5>
                        <p className="card-text">Chat with your caregiver</p>
                        <Link to="/chat" className="btn btn-primary">Go to Chat</Link>
                    </div>
                </div>
                </Link>
            </div>
            

            <div className="col-md-6 mb-4">
                <Link className="link-text" to="/calendar">
                <div className="card card-hover">
                    <img src="src/pages/menuResident/img/Designer-8.png" className="card-img-top" alt="Card Image" />
                    <div className="card-body">
                        <h5 className="card-title">Calendar</h5>
                        <p className="card-text">Don't miss any appointments with your personalised calendar</p>
                        <Link to="/calendar" className="btn btn-primary">Go to Calendar</Link>
                    </div>
                </div>
                </Link>
            </div>

          </div>


          <div className="row">
            {/* Cards section */}
                    <div className="col-md-6 mb-4">
                        <Link className="link-text" to="/interventionplan>">
                            <div className="card card-hover">
                                <img src="src/pages/menuResident/img/Designer-10.png" className="card-img-top" alt="Card Image" />
                                <div className="card-body">
                                    <h5 className="card-title">Intervention Plan</h5>
                                    <p className="card-text">See your Personalised Intervention Plan</p>
                                    <Link to="/interventionplan" className="btn btn-primary">Go to Intervention Plan</Link>
                                </div>
                            </div>
                        </Link>
                    </div>

                    <div className="col-md-6 mb-4">
                        <Link className="link-text" to="/emergency">
                            <div className="card card-hover">
                                <img src="src/pages/menuResident/img/Designer-9.png" className="card-img-top" alt="Card Image" />
                                <div className="card-body">
                                    <h5 className="card-title">Emergency</h5>
                                    <p className="card-text">Don't panic! We'll help you!</p>
                                    <Link to="/chat" className="btn btn-primary">Go to Emergency Section</Link>
                                </div>
                            </div>
                        </Link>

                     </div>
            </div>

        </div>
      </>
    );
  }
  

export default MenuResident;