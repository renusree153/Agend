import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import Calendar from 'react-calendar';
import './TeamCalendar.css';
import NewEvent from './Event';

const ReactCalendar = () => {
    const [date, setDate] = useState(new Date());
    const onChange = date => {
        setDate(date)
    };

    return (
        <div className="container2">
            <div className="blueSide2">
                <h1> Friday </h1>
                <h1> September 8th </h1>
                <div className = "events">
                    <NewEvent></NewEvent>
                </div>
            </div>
            <div className = "cal">
                <Calendar onChange={onChange} value={date} />
            </div>
        </div>
    )
}

export default ReactCalendar;
