import React, { useState } from 'react';
import Calendar from 'react-calendar';
import './menuCaregiver.css';
import HeaderCaregiver from '../../components/header/headerCaregiver';

function CalendarPage() {
  const [date, setDate] = useState(new Date());

  const onChange = (newDate) => {
    setDate(newDate);
  };

  return (
    <>
    <HeaderCaregiver />
    <div className="container mt-5 moveleft">
      <h2>Calendar</h2>
     
      <img className="moveleft moveleftleft" src="src/pages/menuResident/img/calendar.png"></img>
      
    </div>
    </>
  );
}

export default CalendarPage;
