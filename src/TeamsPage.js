import React from "react";
import TeamCard from './TeamCard';
import './TeamsPage.css'

const TeamsPage = () => {
    return (
        <div className="container">
            <div className="blueSide">
                <div className ="circle">
                </div>
                <h3>Jane Doe</h3>
                <h4>Janedoe@gmail.com</h4>
                <div className = "menu">
                    <h3> Conversations</h3>
                    <h3>Personal Calendar</h3>
                    <h3 id="curTab">Teams</h3>
                    <h3>Find Friends</h3>
                    <h3>Settings</h3>
                </div>
            </div>
            <div className = "createBtn">
                <button id="btn"> Create a team</button>
            </div>
            <div className="teams">
                <TeamCard></TeamCard>
                <TeamCard></TeamCard>
                <TeamCard></TeamCard>
            </div>
        </div>
    )
};

export default TeamsPage;