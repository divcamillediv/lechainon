import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import HeaderResident from '../../components/header/headerResident';
import './interventionplanResident.css';

const InterventionPlanPage = () => {
     // Sample data for objectives
     // need to do something to force like 2 columns severals rows
     const objectives = [
        {
            title: 'Improving consumption habits',
            description: 'Maintain a routine of consumption by using the appropriate services: transition to use only the prescribed medication (methadone, dilaudid)',
            term: 'Short-term',
            status: 'In progress',
            means: 'Use addiction services and follow established routines (average 4 injections per day)',
            healthDeterminant: 'Physical Health | Mental health'
        },
        {
            title: 'Improving consumption habits',
            description: 'Maintain a routine of consumption by using the appropriate services: transition to use only the prescribed medication (methadone, dilaudid)',
            term: 'Short-term',
            status: 'In progress',
            means: 'Use addiction services and follow established routines (average 4 injections per day)',
            healthDeterminant: 'Physical Health | Mental health'
        }
    ];

    return (
        <>
        <HeaderResident/>
        <Container className="mt-5">
            <Row>
                <Col>
                    <Card>
                        <Card.Body>
                            <Card.Title>Resident Information</Card.Title>
                            <Row>
                                <Col>
                                    <p><strong>First Name:</strong> Jane</p>
                                    <p><strong>Last Name:</strong> Doe</p>
                                    <p><strong>Plan Start Date:</strong> 2024/02/02</p>
                                    <p><strong>Start date of the stay:</strong> 2024/02/15</p>
                                    {/* Add other resident information here;will do 2morrow */}
                                </Col>
                                <Col>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <h1 className="obj">Objectives of your plan</h1>
            <Row className="mt-3">
                {objectives.map((objective, index) => (
                    <Col key={index}>
                        <Card className="mt-3">
                            <Card.Body>
                                <Card.Title>Objective {index + 1}</Card.Title>
                                <h5>Title: {objective.title}</h5>
                                <p><strong>Description:</strong> {objective.description}</p>
                                <p><strong>Term:</strong> {objective.term}</p>
                                <p><strong>Status:</strong> {objective.status}</p>
                                <p><strong>Means (optional):</strong> {objective.means}</p>
                                <p><strong>Health Determinant:</strong> {objective.healthDeterminant}</p>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
        </>
    );
}

export default InterventionPlanPage;
