import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import HeaderCaregiver from "../../components/header/headerCaregiver";


function ProfileInterventionPlan() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    age: '',
    housingStatus: '',
    startOfPlan: '',
    endOfPlan: '',
    immigrationStatus: '',
    issues: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, send data to backend but whatever
    console.log(formData);
  };

  return (
    <>
    <HeaderCaregiver/>
    <Container>
        <p></p>
      <h1 className="text-center mb-4">Profile Intervention Plan</h1>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col md={6}>
            <Form.Group controlId="firstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="lastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <Form.Group controlId="age">
              <Form.Label>Age</Form.Label>
              <Form.Control
                type="number"
                name="age"
                value={formData.age}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="housingStatus">
              <Form.Label>Housing Status</Form.Label>
              <Form.Control
                type="text"
                name="housingStatus"
                value={formData.housingStatus}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
        </Row>
        <p></p>
        <Row>
          <Col md={6}>
            <Form.Group controlId="startOfPlan">
              <Form.Label>Start of Plan</Form.Label>
              <Form.Control
                type="date"
                name="startOfPlan"
                value={formData.startOfPlan}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="endOfPlan">
              <Form.Label>End of Plan</Form.Label>
              <Form.Control
                type="date"
                name="endOfPlan"
                value={formData.endOfPlan}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
        </Row>
        <p></p>
        <Row>
          <Col md={6}>
            <Form.Group controlId="immigrationStatus">
              <Form.Label>Immigration Status</Form.Label>
              <Form.Control
                type="text"
                name="immigrationStatus"
                value={formData.immigrationStatus}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="issues">
              <Form.Label>Issues</Form.Label>
              <Form.Control
                type="text"
                name="issues"
                value={formData.issues}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
        </Row>
        <p></p>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
    </>
  );
}

export default ProfileInterventionPlan;
