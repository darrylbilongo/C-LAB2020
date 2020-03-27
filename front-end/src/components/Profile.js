import React, { Component } from "react";
import Navigation from "./Navigation";
import Entete from "./Entete";
import userFonction from "./UserFonctions";

class Profile extends Component{
    render(){
        return(
            <div>
                <Entete/>
                <Navigation />
                <h1>Utilisateur : </h1>
                
            </div>
        )
    }
}

export default  Profile;