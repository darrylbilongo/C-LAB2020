import React, { Component } from "react";
import Logo_CLAB from "./Logo_CLAB.png";

class logo extends Component{
    render(){
        return(
            <img className= "logoClab" src={Logo_CLAB} alt="Logo"/>
        )
    }
}

export default logo;