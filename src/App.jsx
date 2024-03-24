import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Login from './pages/home/login';
import MenuResident from './pages/menuResident/menuResident';
import Footer from './components/footer/footer';
import MenuCaregiver from './pages/menuCaregiver/MenuCaregiver';

function App() {
    return (
        <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<MenuResident />} />
        <Route path="/home2" element={<MenuCaregiver/>}/>
      </Routes>
      <Footer />
    </Router>
    );
}

export default App;
