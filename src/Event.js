import React from "react";
import {useState} from 'react';
import "./Event.css";
import Accordion from './Accordion';

const NewEvent = () => {
    return (
        <div styles = {{height: '100px', overflowY: 'scroll'}}>
            <Accordion />
            <Accordion />
            <Accordion />
            <Accordion />
            <Accordion />
        </div>
    )
}

export default NewEvent;