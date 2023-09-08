import React from "react";
import {useState} from 'react';
import "./Event.css";

const NewEvent = () => {
    const [selected, setSelected] = useState(null)
    const toggle = (i) => {
        if (selected === i) {
            return setSelected(null);
        }
        setSelected(i);
    }
    return (
        <div className = "eventCard">
            <h2 id="name"> Anika's Birthday </h2>
            <h2 id="time"> 9pm - 10pm </h2>
            <h2 id="plus"> + </h2>
        </div>
    )
}

export default NewEvent;