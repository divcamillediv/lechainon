import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import HeaderResident from '../../components/header/headerResident';
import './feedbackResident.css';

function FeedbackForm({ onSubmit }) {
  const [feedback, setFeedback] = useState({
    general_experience: '',
    activities: '',
    resources: '',
    supportServices: '',
    suggestions: '',
    comments: '',
    rating: 5 
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFeedback({ ...feedback, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(feedback);
  };

  return (
  <>
      <HeaderResident />
      <Container className="container-feedback">

      <Form className="feedback-form" onSubmit={handleSubmit}>
        <Form.Group className="question-container" controlId="general_experience">
          <Form.Label>General Experience:</Form.Label>
          <Form.Control
            type="text"
            name="general_experience"
            value={feedback.general_experience}
            onChange={handleInputChange}
            placeholder="Enter your feedback on your general experience"
          />
        </Form.Group>
     
        <Form.Group className="question-container" controlId="rating">
          <Form.Label>Rate your experience (1-10):</Form.Label>
          <Form.Control
            type="range"
            name="rating"
            min="1"
            max="10"
            value={feedback.rating}
            onChange={handleInputChange}
          />
          <div className="rating-labels">
            <span>1</span>
            <span>5</span>
            <span>10</span>
          </div>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      </Container>
      </>
  );
}

export default FeedbackForm;
