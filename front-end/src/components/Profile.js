import React, { Component } from "react";
import Navigation from "./Navigation";
import Entete from "./Entete";
import ReactPlayer from 'react-player'

class Profile extends Component{
    render(){
        return(
            <div>
                <Entete/>
                <Navigation />
                <div className="videode">
                    <div className="video">
                    <h2>Votre vidéo :</h2> 
                    <ReactPlayer width="100%" url='https://www.youtube.com/watch?v=xPfP-bB3X_k' controls/>
                     </div>
                     <div className="details">
                    <h2>Votre description</h2>
                    <ul className="list-group">
                        <li class="list-group-item">Nom :</li>
                        <li class="list-group-item">Prénom :</li>
                        <li class="list-group-item">Adresse Mail :</li>
                        <li class="list-group-item">Age :</li>
                        <li class="list-group-item">Description :</li>
                    </ul>
                    </div>
                </div>
                </div>
        )
    }
}

export default Profile;