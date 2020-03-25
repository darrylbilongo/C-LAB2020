import React, { Component } from "react";
import Navigation from "./Navigation";
import Logo from './Logo'

class Profile extends Component{
    render(){
        return(
            <div>
                <h1 className="titre">C-LAB</h1>
                <Navigation />
                <h1>Hello</h1>
            </div>
        )
    }
}

export default  Profile;