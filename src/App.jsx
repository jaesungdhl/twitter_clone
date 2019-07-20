import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./components/home";
import SignIn from "./components/sign-in";

function App() {
  return (
    <Router>
      <Route path="/home" component={Home} />
      <Route path="/signin" component={SignIn} />
  </Router>
  );
}

export default App;
