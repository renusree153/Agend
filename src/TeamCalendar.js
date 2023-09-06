import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import Calendar from 'react-calendar';
import './TeamCalendar.css';

const ReactCalendar = () => {
    const [date, setDate] = useState(new Date());
    const onChange = date => {
        setDate(date)
    };


    return (
        <div>
            <Calendar onChange={onChange} value={date} />
        </div>
    )
}

export default ReactCalendar;
