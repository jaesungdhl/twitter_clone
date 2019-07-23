import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import WelcomePage from "./WelcomePage/WelcomePage";
import LoginPage from "./LoginPage/LoginPage";

const App = (props) => {
  return (
    <Router>
      <Route exact path="/" component={WelcomePage} />
      <Route exact path="/login" component={LoginPage} />
    </Router>
  );
}

export default App;
