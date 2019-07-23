import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import WelcomePage from "./WelcomePage/WelcomePage";
import LoginPage from "./LoginPage/LoginPage";
import PasswordResetPage from "./PasswordResetPage/PasswordResetPage";

const App = (props) => {
  return (
    <Router>
      <Route exact path="/" component={WelcomePage} />
      <Route exact path="/login" component={LoginPage} />
      <Route exact path="/account/begin_password_reset" component={PasswordResetPage}/>
    </Router>
  );
}

export default App;
