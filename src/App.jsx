import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Login from './pages/home/login';
import MenuResidentResident from './pages/menuResident/menuResident';
import ChatResident from './pages/menuResident/chatResident';
import FeedbackResident from './pages/menuResident/feedbackResident';
import CalendarPageResident from './pages/menuResident/calendarResident';
import InterventionPlanPageResident from './pages/menuResident/interventionplanResident';
import Footer from './components/footer/footer';

function App() {
    return (
        <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<MenuResidentResident />} />
        <Route path="/calendar" element={<CalendarPageResident />} />
        <Route path="/chat" element={<ChatResident />} />
        <Route path="/feedback" element={<FeedbackResident />} />
        <Route path="/intervention-plan" element={<InterventionPlanPageResident />} />
      </Routes>
      <Footer />
    </Router>
    );
}

export default App;
