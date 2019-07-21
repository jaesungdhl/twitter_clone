import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import WelcomePage from "./WelcomePage/WelcomePage";
// import SignIn from "./components/sign-in";

const App = (props) => {
  return (
    <Router>
      <Route path="/" component={WelcomePage} />
      {/* <Route path="/signin" component={SignIn} /> */}
    </Router>
  );
}

export default App;
