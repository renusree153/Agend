import React from "react";
import './Settings.css';

const Settings = () => {
    return (
        <div className="container">
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
                </div>
            </div>
            <div className="whiteSide">
                <h1>Settings</h1>
                <div className="horizontal-line"></div>
                <h2>Account</h2>
                <div className="horizontal-line"></div>
                <h2>Security</h2>
                <div className="horizontal-line"></div>
                <h2>Appearance</h2>
                <div className="horizontal-line"></div>
                <h2>Statistics</h2>
            </div>
            <div className="graySide">
                <h1> Account </h1>
                <h3> Profile</h3>
            </div>
        </div>
    )
};

export default Settings;