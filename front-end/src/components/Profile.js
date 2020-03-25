import React, { Component } from "react";
import Navigation from "./Navigation";
import Logo from './Logo'
import Entete from "./Entete";

class Profile extends Component{
    render(){
        return(
            <div>
                <Entete/>
                <Navigation />
                <h1>Hello</h1>
            </div>
        )
    }
}

export default  Profile;