import React from 'react';
import './App.css';
import Navbar from "./Components/Navbar";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from './Components/Home'
import Services from "./Components/Services";
import Contact from "./Components/Contact";
import SignUp from "./Components/SignUp";
import Footer from "./Components/Footer";
import SignIn from './Components/SignIn';
import axios from "axios";

function App() {

  // implementing API

  // const options = {
  //   method: 'GET',
  //   url: 'https://priaid-symptom-checker-v1.p.rapidapi.com/symptoms',
  //   params: {language: 'en-gb', format: 'json'},
  //   headers: {
  //     'x-rapidapi-key': '8601a9bb56mshf0067549e2ddf73p143b20jsnd0f9360f365b',
  //     'x-rapidapi-host': 'priaid-symptom-checker-v1.p.rapidapi.com'
  //   }
  // };
  //
  // axios.request(options).then(function (response) {
  //   console.log(response.data);
  // }).catch(function (error) {
  //   console.error(error);
  // });

  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/services' component={Services} />
        <Route path='/contact' component={Contact} />
        <Route path='/sign-up' component={SignUp} />
        <Route path='/sign-in' component={SignIn} />
      </Switch>
      <Footer />
    </Router>
    </>
  );
}

export default App;
