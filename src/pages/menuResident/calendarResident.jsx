import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './calendarResident.css';
import HeaderResident from '../../components/header/headerResident';

function CalendarPage() {
  const [date, setDate] = useState(new Date());

  const onChange = (newDate) => {
    setDate(newDate);
  };

  return (
    <>
    <HeaderResident />
    <div className="container mt-5">
      <h2 className='moveleft'>Calendar</h2>
     
      <img className='moveleft moveleftleft' src="src/pages/menuResident/img/calendar.png"></img>
      
    </div>
    </>
  );
}

export default CalendarPage;
