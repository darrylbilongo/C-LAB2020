import React, { Component } from "react";
import ReactPlayer from 'react-player'
import axios from 'axios'

class Profile extends Component{

    constructor(props) {
        super(props);

        this.state = {
          user: '',
          score: 0
        };

        this.vote=this.vote.bind(this);
    }

    
    componentDidMount(){

        const { id } = this.props.match.params

        axios.get('http://localhost:8080/users/' + id)
            .then((res) => {
                this.setState({
                    user: res.data
                })
            });


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
                        <li className="list-group-item">Nom : {this.state.user.last_name}</li>
                        <li className="list-group-item">Prénom : {this.state.user.first_name}</li>
                        <li className="list-group-item">Adresse Mail : {this.state.user.email}</li>
                        <li className="list-group-item">Role : {this.state.user.role}</li>
                        <li className="list-group-item">Description :</li>
                        <li className="list-group-item">
                            Si tu as aimé cet artiste:  {this.state.score}
                            <button
                                onClick={this.vote} 
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

export default Profile;