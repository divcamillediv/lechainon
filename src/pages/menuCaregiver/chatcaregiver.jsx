import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import HeaderResident from '../../components/header/headerResident';
import HeaderCaregiver from '../../components/header/headerCaregiver';
import './menuCaregiver.css';

const Chat = () => {
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);

    const handleMessageChange = (e) => {
        setMessage(e.target.value);
    };

    return (
        <>
        <HeaderCaregiver/>
        <Container className="mt-5 moveleft">
          <img className="moveleft moveleftleft" src="src/pages/menuResident/img/chat.png"></img>
        </Container>
        </>
    );
};

export default Chat;
