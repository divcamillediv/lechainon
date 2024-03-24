import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import HeaderResident from '../../components/header/headerResident';

const Chat = () => {
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);

    const handleMessageChange = (e) => {
        setMessage(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (message.trim() === '') return;

        // Add the message to the messages array
       
        // here, message sent to the backend for processing and saving 
        // maybe in db ??
    };

    return (
        <>
        <HeaderResident/>
        <Container className="mt-5">
            <Row>
                <Col>
                    <div className="chat-container">
                       
                       <p>Should we use <a href="https://www.freecodecamp.org/news/building-a-real-time-chat-app-with-reactjs-and-firebase/">this resource for chat ?</a> It uses React and FireBase</p>
                    
                    </div>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group as={Row} controlId="formMessage">
                            <Col>
                                <Form.Control
                                    type="text"
                                    placeholder="Type your message..."
                                    value={message}
                                    onChange={handleMessageChange}
                                />
                            </Col>
                            <Col sm="2">
                                <Button type="submit">Send</Button>
                            </Col>
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
        </Container>
        </>
    );
};

export default Chat;
