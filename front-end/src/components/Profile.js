import React, { Component } from "react";
import ReactPlayer from 'react-player'
import jwt_decode from 'jwt-decode'

class Profile extends Component{

    constructor(props) {
        super(props);
        this.state = {
          first_name: '',
          last_name: '',
          password: '',
          email: '',
          role: ''
        };
    }
    
    componentDidMount(){
        const token = localStorage.usertoken;
        const decoded = jwt_decode(token);

        this.setState({
            first_name: decoded.first_name,
            last_name: decoded.last_name,
            email: decoded.email,
            role: decoded.role
        })

    }
    localstorage

    render(){
        return(
            <div>
                <div className="videode">
                    <div className="video">
                    <h2>Votre vidéo :</h2> 
                    <ReactPlayer width="100%" url='https://www.youtube.com/watch?v=xPfP-bB3X_k' controls/>
                     </div>
                     <div className="details">
                    <h2>Votre description</h2>
                    <ul className="list-group">
                        <li class="list-group-item">Nom : {this.state.last_name}</li>
                        <li class="list-group-item">Prénom : {this.state.first_name}</li>
                        <li class="list-group-item">Adresse Mail : {this.state.email}</li>
                        <li class="list-group-item">Role : {this.state.role}</li>
                        <li class="list-group-item">Description :</li>
                    </ul>
                    </div>
                </div>
                </div>
        )
    }
}

export default Profile;