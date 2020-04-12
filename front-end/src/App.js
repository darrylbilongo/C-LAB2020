import React, { Component } from 'react';
import Register from "./components/Register"
import PageAccueil from "./components/PageAccueil"
import Login from './components/Login'
import Profile from './components/Profile';
import Compte from './components/Compte'
import {BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';
import PersonList from './components/PersonList';
import Home from './components/Home'
import Navigation from './components/Navigation';
import Entete from './components/Entete';

class App extends Component {

  render(){
    return (
        <Router>
            <div className="App">
              <Entete />
              <Navigation />
              <Route exact path="/login" component={Login}/>
              <Route exact path="/profile" component={Profile}/>
              <Route exact path="/register" component={Register}/>
              <Route exact path="/catalogue" component={PersonList}/>
              <Route exact path="/" component={PageAccueil}/>
              <Route exact path="/home" component={Home} />
              <Route exact path="/compte" component={Compte}/>
            </div>
        </Router>
    );
  }
}

export default App;
