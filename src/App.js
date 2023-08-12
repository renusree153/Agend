import logo from './logo.svg';
import './App.css';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Settings from './Settings';
import {Routes, Route} from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element = {<SignIn/>} />
      <Route path="/signUp" element = {<SignUp/>} />
      <Route path="/settings" element = {<Settings/>}/>
    </Routes>
  );
}

export default App;
