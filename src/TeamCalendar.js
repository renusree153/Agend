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
        <div className ="container2">
            <div className="blueSide">
            <div class ="circle">
            </div>
            <h3>Jane Doe</h3>
            <h4>Janedoe@gmail.com</h4>
            <div className = "menu">
                <h3> Conversations</h3>
                <h3>Personal Calendar</h3>
                <h3>Teams</h3>
                <h3>Find Friends</h3>
                <h3>Settings</h3>
                <h3>Notifications</h3>
            </div>
            <div className = "cal">
                <Calendar onChange={onChange} value={date} />
            </div>
        </div>
        </div>
    )
}

export default ReactCalendar;
