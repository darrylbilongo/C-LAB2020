import React, { Component } from "react";
import Formulaire from "./Formulaire"


class PageLogin extends Component{
    render(){
        return (
            <div>
                <h1 className="titre">C-LAB</h1>
                <Formulaire></Formulaire> 
            </div>
        )
    }
}

export default PageLogin;
