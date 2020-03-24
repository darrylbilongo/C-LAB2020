import React, { Component } from 'react';
import PageRegister from "./components/PageRegister"
import PageAccueil from "./components/PageAccueil"
import {BrowserRouter as Router, Route } from 'react-router-dom'; 

import './App.css';

class App extends Component {

  render(){
    return (
        <Router>
            <div className="App">
              <Route exact path="/login" component={PageRegister}/>
              <Route exact path="/" component={PageAccueil}/>
            </div>
        </Router>
    );
  }
  
    
}

export default App;
