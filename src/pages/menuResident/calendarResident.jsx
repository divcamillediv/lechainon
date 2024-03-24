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
      <h2>Calendar</h2>
      <div className="row">
        <div className="col-md-6">
          <Calendar
            onChange={onChange}
            value={date}
          />
        </div>
      </div>
    </div>
    </>
  );
}

export default CalendarPage;
