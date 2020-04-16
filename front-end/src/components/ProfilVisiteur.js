import React, { Component } from "react";
import ReactPlayer from 'react-player'
import axios from 'axios';

class ProfilVisiteur extends Component{

    state = {
        persons: [],
    }

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
        axios.get('http://localhost:8080/users/', {params: {first_name: 'Bilel'}}).then(res => {
            this.setState({ 
                persons: res.data,
             });
        })

    }
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

export default ProfilVisiteur;