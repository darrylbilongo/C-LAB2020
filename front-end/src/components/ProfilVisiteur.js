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
          role: '',
          score: 0
        };

        this.vote=this.vote.bind(this);

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
                        <li className="list-group-item">
                            Si tu as aimé cet artiste: {this.state.score}
                            <button
                                onClick={this.vote.bind(this)} 
                                type="submit"
                                className="btn btn-block btn-lg btn-success"
                                >
                                Clique ici
                            </button>
                        </li>
                    </ul>
                    </div>
                </div>
                </div>
        )
    }

    
    vote (){
        this.setState({
          score: this.state.score + 1,
        });
      }
}

export default ProfilVisiteur;