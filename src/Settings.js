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
                    <h3>Notifications</h3>
                </div>
            </div>
            <div className="whiteSide">
                <h1>Settings</h1>
                <div className="horizontal-line"></div>
                <h2 id="account">Account</h2>
                <div className="horizontal-line"></div>
                <h2>Security</h2>
                <div className="horizontal-line"></div>
                <h2>Appearance</h2>
                <div className="horizontal-line"></div>
                <h2>Statistics</h2>
            </div>
            <div className="graySide">
                <h1> Account </h1>
                <h2> Profile</h2>
                <div className="forms">
                <form>
                    <label>
                        First Name:
                        <input type="text" name="name" />
                    </label>
                </form>
                <form className="lastnameForm">
                    <label>
                        Last Name:
                        <input type="text" name="name" />
                    </label>
                </form>
                </div>
                <div className="forms">
                <form>
                    <label>
                        Username:
                        <input type="text" name="name" />
                    </label>
                </form>
                <form className="lastnameForm">
                    <label>
                        Password:
                        <input type="text" name="name" />
                    </label>
                </form>
                </div>
                <h2>Profile Picture</h2>
                <div className="pfprow">
                    <div class ="smallcircle">
                    </div>
                    <button>Change</button>
                    <button> Remove </button>
                </div>
                <h2>Personal Information</h2>
                <div className="forms">
                    <form>
                        <label>
                            Email Address:
                            <input type="text" name="name" />
                        </label>
                    </form>
                    <form className="lastnameForm">
                    <label>
                        Phone Number:
                        <input type="text" name="name" />
                    </label>
                </form>
                </div>
                <div className="forms">
                    <form>
                        <label>
                            Country:
                            <input type="text" name="name" />
                        </label>
                    </form>
                    <form className="lastnameForm">
                        <label>
                            Language:
                            <input type="text" name="name" />
                        </label>
                    </form>
                </div>
                <div className="formsState" id="updateBtn">
                    <button>Cancel</button>
                    <button id="saveBtn">Save</button>
                </div>
            </div>
        </div>
    )
};

export default Settings;