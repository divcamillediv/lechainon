import React, { useState } from 'react';

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
     
      <img className="moveleft moveleftleft" src="src/pages/menuCaregiver/img/feedback.png"></img>
      
    </div>
    </>
  );
}

export default CalendarPage;
