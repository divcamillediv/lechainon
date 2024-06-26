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
          <img src="src/pages/menuResident/img/chat.png"></img>
        </Container>
        </>
    );
};

export default Chat;
