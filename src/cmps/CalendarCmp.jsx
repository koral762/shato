import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';


export const CalendarCmp=()=> {

  const [value, onChange] = useState(new Date());

  return (
    <div>
      <Calendar className="calendar" onChange={onChange} value={value} />
    </div>
  );
}
