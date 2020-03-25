import React, { Component } from 'react';
import PageLogin from "./components/PageLogin"
import PageAccueil from "./components/PageAccueil"
import {BrowserRouter as Router, Route } from 'react-router-dom'; 

import './App.css';
import PersonList from './components/PersonList';

class App extends Component {

  render(){
    return (
        <Router>
            <div className="App">
              <Route exact path="/register" component={PageLogin}/>
              <Route exact path="/catalogue" component={PersonList}/>
              <Route exact path="/" component={PageAccueil}/>
            </div>
        </Router>
    );
  }
  
    
}

export default App;
