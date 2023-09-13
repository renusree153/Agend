import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import Calendar from 'react-calendar';
import './TeamCalendar.css';
import NewEvent from './Event';

const ReactCalendar = () => {
    const [date, setDate] = useState(new Date());
    const [show, setShow] = useState (true);
    const onChange = date => {
        setDate(date)
    };

    const fillNewEvent = () => {
        if(show) {
            setShow(false);
        }
        else {
            setShow(true);
        }
    }

    return (
        <div className="container2">
            <div className="blueSide2">
                <h1> {date.toDateString().split(" ")[0]} </h1>
                <h1>  {date.toDateString().split(" ").slice(1).join(" ")} </h1>
                <button onClick = {fillNewEvent}> + </button>
                <div className = "events">
                    <NewEvent></NewEvent>
                </div>
            </div>
            {show && (
                <div className = "cal">
                    <Calendar onChange={onChange} value={date} />
                </div>
            )}
            {!show && (
                <div className = "cal">
                    <h1> Team One </h1>
                    <br></br>
                    <h2> Event Name </h2>
                    <hr></hr>
                    <h2>Required Team Members</h2>
                    <hr></hr>
                    <h2>Frequency of Event</h2>
                    <hr></hr>
                    <h2> Start Date </h2>
                    <hr></hr>
                    <h2> End Date </h2>
                    <hr></hr>
                    <h2> Location </h2>
                    <hr></hr>
                    <h2>Consistency of Schedule</h2>
                    <hr></hr>
                    <div className = "btnsForEvent">
                        <button> Save </button>
                        <button> Discard</button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default ReactCalendar;
