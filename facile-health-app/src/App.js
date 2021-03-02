import React from 'react';
import './App.css';
import Navbar from "./Components/Navbar";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from './Components/Home'
import Services from "./Components/Services";
import Contact from "./Components/Contact";
import SignUp from "./Components/SignUp";

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/services' component={Services} />
        <Route path='/contact' component={Contact()} />
        <Route path='/sign-up' component={SignUp} />
      </Switch>
    </Router>
    </>
  );
}

export default App;
