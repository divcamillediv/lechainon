import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import HeaderResident from '../../components/header/headerResident';

const SurveyPage = () => {
    const [mealQuality, setMealQuality] = useState(0);
    const [activitySatisfaction, setActivitySatisfaction] = useState(0);
    const [resourcesSatisfaction, setResourcesSatisfaction] = useState(0);
    const [supportSatisfaction, setSupportSatisfaction] = useState(0);
    const [suggestions, setSuggestions] = useState('');

    const handleMealQualityChange = (value) => {
        setMealQuality(value);
    };

    const handleActivitySatisfactionChange = (value) => {
        setActivitySatisfaction(value);
    };

    const handleResourcesSatisfactionChange = (value) => {
        setResourcesSatisfaction(value);
    };

    const handleSupportSatisfactionChange = (value) => {
        setSupportSatisfaction(value);
    };

    const handleSuggestionsChange = (e) => {
        setSuggestions(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // submit survey data to backend
    };

    return (
        <>
        <HeaderResident/>
        
        </>
    );
};

export default SurveyPage;
