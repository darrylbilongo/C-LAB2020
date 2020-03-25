import React, { Component } from "react";
import Navigation from "./Navigation";
import Logo from './Logo'

class Profile extends Component{
    render(){
        return(
            <div>
                <Logo />
                <Navigation />
                <h1>Hello</h1>
            </div>
        )
    }
}

export default  Profile;