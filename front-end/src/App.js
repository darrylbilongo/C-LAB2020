import React, { Component } from 'react';
import PageLogin from "./components/PageLogin"
import PageAccueil from "./components/PageAccueil"
import './App.css';

class App extends Component {

  render(){
    return (
        <span className="App">
          <PageAccueil></PageAccueil>
        </span>
    );
  }
  
    
}

export default App;
