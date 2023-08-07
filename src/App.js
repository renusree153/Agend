import logo from './logo.svg';
import './App.css';
import SignIn from './SignIn';
import SignUp from './SignUp';
import {Routes, Route} from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element = {<SignIn/>} />
      <Route path="/signUp" element = {<SignUp/>} />
    </Routes>
  );
}

export default App;
