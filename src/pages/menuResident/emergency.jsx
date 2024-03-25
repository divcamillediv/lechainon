import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import HeaderResident from '../../components/header/headerResident';
import './calendarResident.css';

const Chat = () => {
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);

    const handleMessageChange = (e) => {
        setMessage(e.target.value);
    };

 

    return (
        <>
        <HeaderResident/>
        <Container className="mt-5 moveleft">
          <img className="moveleft moveleftleft" src="src/pages/menuResident/img/emergency.png"></img>
        </Container>
        </>
    );
};

export default Chat;
