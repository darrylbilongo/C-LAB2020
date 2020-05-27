import React, { Component } from "react";
import Logo from './Clab.png'

class Entete extends Component{
    render(){
        return(
            <div className="titre">
               <img src={Logo} width="3%" height="70%"></img>
                <div className="titree">
                    <h1>C-LAB</h1>
                </div>
            </div>
        )
    }
}

export default Entete;