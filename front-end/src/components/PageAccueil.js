import React, { Component } from "react";
import PageLogin from "./PageRegister";
import Navigation from './Navigation';

class PageAccueil extends Component{
    render(){
        return(
            <div>
                <h1 className="titre">C-LAB</h1>
                <Navigation />
            </div>
        )
    }

}


export default PageAccueil;