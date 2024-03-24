import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Login from './pages/home/login';
import MenuResident from './pages/menuResident/menuResident';
import CalendarPage from './pages/menuResident/calendarResident';
import Footer from './components/footer/footer';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<MenuResident />} />
        <Route path="/calendar" element={<CalendarPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
