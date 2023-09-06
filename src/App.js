import './App.css';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Settings from './Settings';
import TeamsPage from './TeamsPage';
import TeamCalendar from './TeamCalendar';
import Event from './Event';
import {Routes, Route} from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element = {<SignIn/>} />
      <Route path="/signUp" element = {<SignUp/>} />
      <Route path="/settings" element = {<Settings/>}/>
      <Route path="/teamsPage" element = {<TeamsPage/>}/>
      <Route path="/teamCal" element = {<TeamCalendar/>}/>
      <Route path="/eventCard" element = {<Event/>}/>
    </Routes>
  );
}

export default App;
