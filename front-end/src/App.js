import React, { Component } from 'react';
import Register from "./components/Register"
import PageAccueil from "./components/PageAccueil"
import Login from './components/Login'
import Profile from './components/Profile';
import {BrowserRouter as Router, Route } from 'react-router-dom'; 

import './App.css';
import PersonList from './components/PersonList';

class App extends Component {

  render(){
    return (
        <Router>
            <div className="App">
              <Route exact path="/login" component={Login}/>
              <Route exact path="/profile" component={Profile}/>
              <Route exact path="/register" component={Register}/>
              <Route exact path="/" component={PageAccueil}/>
            </div>
        </Router>
    );
  }
}

export default App;
