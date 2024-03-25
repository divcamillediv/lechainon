import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Login from './pages/home/login';
import MenuResidentResident from './pages/menuResident/menuResident';
import ChatResident from './pages/menuResident/chatResident';
import FeedbackResident from './pages/menuResident/feedbackResident';
import CalendarPageResident from './pages/menuResident/calendarResident';
import InterventionPlanPageResident from './pages/menuResident/interventionplanResident';
import Footer from './components/footer/footer';
import MenuCaregiver from './pages/menuCaregiver/MenuCaregiver';
import ProfileResidentCaregiver from './pages/menuCaregiver/personalFileExample';
import AddProfileResidentCaregiver from './pages/menuCaregiver/addPlan';
import Emergency from './pages/menuResident/emergency'
import ChatCare from './pages/menuCaregiver/chatcaregiver';
import CalendarCare from './pages/menuCaregiver/calendarcaregiver';
import FeedbackCare from './pages/menuCaregiver/feedbackcare';

function App() {
    return (
        <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<MenuResidentResident />} />
        <Route path="/calendar" element={<CalendarPageResident />} />
        <Route path="/chat" element={<ChatResident />} />
        <Route path="/feedback" element={<FeedbackResident />} />
        <Route path="/intervention-plan" element={<InterventionPlanPageResident />} />
        <Route path="/homecaregiver" element={<MenuCaregiver />} />
        <Route path="/profile" element={<ProfileResidentCaregiver />} />
        <Route path="/addprofile" element={<AddProfileResidentCaregiver />} />
        <Route path="/emergency" element={<Emergency />} />
        <Route path="/chatcaregiver" element={<ChatCare />} />
        <Route path="/calendarcaregiver" element={<CalendarCare />} />
        <Route path="/feedbackcaregiver" element={<FeedbackCare />} />
      </Routes>
      <Footer />
    </Router>
    );
}

export default App;
