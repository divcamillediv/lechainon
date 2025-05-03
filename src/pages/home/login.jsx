import './login.css';
import HeaderLogin from '../../components/header/headerLogin';
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Container, Card, Form, Button } from 'react-bootstrap';
function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const handleResidentClick = () => navigate("/home", { replace: true });
  const handleCaregiverClick = () => navigate("/homecaregiver", { replace: true });

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if username and password are correct
    // check user type
    if (user === 'resident' && password === 'password') {
 
      console.log('Authentication successful');

      handleResidentClick();
    } else if (username === 'caregiver' && password === 'password') {

      console.log('Authentication successful');

      handleCaregiverClick();
    }else{
      // Authentication failed
      console.log('Authentication failed');
    }
  };

  return (
    <Container className="d-flex flex-column align-items-center justify-content-center vh-100">
      <Card style={{ width: '50%', maxWidth: '350px', backgroundColor: '#4a7db4' }} className="p-4 shadow rounded" text="white">
      <h2 className="text-center mb-4" style={{ fontSize: '40px' }}>Login</h2>
        <Form>
          <Form.Group controlId="formUsername" className="mb-4">
            <Form.Label className="fs-5">Username</Form.Label>
            <Form.Control
              type="text"
              value={username}
              onChange={handleUsernameChange}
              className="rounded shadow-sm"
              style={{ height: '39px', fontSize: '18px' }}
            />
          </Form.Group>

          <Form.Group controlId="formPassword" className="mb-4">
            <Form.Label className="fs-5">Password</Form.Label>
            <Form.Control
              type="password"
              value={password}
              onChange={handlePasswordChange}
              className="rounded shadow-sm"
              style={{ height: '39px', fontSize: '18px' }}
            />
          </Form.Group>

          <div className="d-flex justify-content-end">
            <Button
              variant="light"
              onClick={handleSubmit}
              className="rounded px-4"
              style={{ fontSize: '15px', fontFamily: 'Martel Sans, sans-serif' }}
            >
              Sign In
            </Button>
          </div>
        </Form>
      </Card>
      <div
        className="text-white mt-3 text-center"
        style={{ cursor: 'pointer', fontSize: '15px' }}
      >
        Forgot Password?
      </div>
    </Container>

      
  );
}

export default Login;