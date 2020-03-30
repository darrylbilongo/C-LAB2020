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
                        <li class="list-group-item">First item</li>
                        <li class="list-group-item">Second item</li>
                        <li class="list-group-item">Third item</li>
                    </ul>
                    </div>
                </div>
                </div>
        )
    }
}

export default Profile;