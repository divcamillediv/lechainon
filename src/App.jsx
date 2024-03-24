import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Login from './pages/home/login';
import MenuResident from './pages/menuResident/menuResident';
import Footer from './components/footer/footer';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<MenuResident />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
