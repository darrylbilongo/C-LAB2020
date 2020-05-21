import React, { Component } from 'react';
import Register from "./components/Register"
import PageAccueil from "./components/PageAccueil"
import Login from './components/Login'
import Profile from './components/Profile';

import {BrowserRouter as Router, Route } from 'react-router-dom';
import Link from "./components/Link"

import './App.css';
import PersonList from './components/PersonList';
import Home from './components/Home'
import Navigation from './components/Navigation';
import Entete from './components/Entete';
import ProfilVisiteur from './components/ProfilVisiteur'
import Chat from './components/Chat'
import About_Us from './components/About_Us';

class App extends Component {

  render(){
    return (
        <Router>
            <div className="App">
              <Entete />
              <Navigation />
              <Route exact path="/login" component={Login}/>
              <Route exact path="/profile/:id" component={Profile}/>
              <Route exact path="/register" component={Register}/>
              <Route exact path="/catalogue" component={PersonList}/>
              <Route exact path="/" component={PageAccueil}/>
              <Route exact path="/home" component={Home} />
              <Route exact path="/chat/:id" component={Chat} />
              <Route exact path="/settings" component={Link}/>
              <Route exact path="/profilVisiteur/:id" component={ProfilVisiteur}/>
              <Route exact path="/about_us" component={About_Us}/>
            </div>
        </Router>
    );
  }
}

export default App;
