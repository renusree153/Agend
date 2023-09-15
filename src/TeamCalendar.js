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
                    <label>
                        Event Name:
                        <input type="text" name="event1" />
                    </label>
                    <label>
                        Required Team Members:
                        <input type="text" name="name" />
                    </label>
                    <label>
                        Frequency of Event:
                        <input type="text" name="name" />
                    </label>
                    <label>
                        Start Date:
                        <input type="text" name="name" />
                    </label>
                    <label>
                        End Date:
                        <input type="text" name="name" />
                    </label>
                    <label>
                        Location:
                        <input type="text" name="name" />
                    </label>
                    <select name="Consistency of Schedule" id="selList">
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                    </select>
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
