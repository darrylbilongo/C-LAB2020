import React, { Component } from "react";
import axios from 'axios';
import ReactAudioPlayer from 'react-audio-player';
import jwt_decode from 'jwt-decode';
import {Link} from 'react-router-dom';
import {avis} from './UserFonctions';
import Youtube from '../images/youtube.png'
import Insta from '../images/Insta.png'
import Twitter from '../images/Twitter_Logo.png'
import Logo from './Double_Diamond.png'
import {API_URL} from './UserFonctions'

class Profile extends Component{

    constructor(props) {
        super(props);

        this.state = {
          user: {},
          showNote: false,
          showAvis: false,
          showAlert:false,
          hideCollab: true,
          currentUser :'',
          like: false,
          selectedFile: null,
          note: 0,
          loaded: 0,
          contents: [],
          contenu: '',
          liens: []
        };
      
        this.collabore=this.collabore.bind(this);
        this.avis=this.avis.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onClickHandler = this.onClickHandler.bind(this);
    }

    async componentWillMount() {
        const { id } = this.props.match.params
        
        await axios.post(`${API_URL}/contents/get`, {
            UserId : id
        }).then(res => {
            this.setState({
                contents : res.data
            })
        }).catch(err => console.log(err))

    }
    
  async componentDidMount(){
        const { id } = this.props.match.params

        axios.get(`${API_URL}/users/` + id)
            .then((res) => {
                console.log(res.data)
                this.setState({
                    user: res.data
                })
            })
            .catch(err => console.log(err));

            axios.get(`${API_URL}/links/` + id)
            .then((res) => {
                console.log(res.data)
                this.setState({
                    liens: res.data
                })
            })
            .catch(err => console.log(err));

        const token = await localStorage.getItem('usertoken');
        const decoded = jwt_decode(token);

        this.setState({
            currentUser: decoded,
        })
        

        axios.get('http://darrylbilongo.site/contents/', {
            UserId : id
        }).then(res => {
            console.log(res)
            this.setState({
                contents : res.data
            })
        })

    }

    onClickHandler = () => {
        const data = new FormData() 
        data.append('id', this.state.user.id)
        data.append('file', this.state.selectedFile)

        axios.post(`${API_URL}/upload`, data, { 
            onUploadProgress: ProgressEvent => {
                this.setState({
                  loaded: (ProgressEvent.loaded / ProgressEvent.total*100),
                });
            }})
            .then(res => { // then print response status
                console.log(res.statusText)
            })
            .catch(err => console.log(err))
    }

    onChangeHandler (event) {
        this.setState({
            selectedFile: event.target.files[0],
            loaded: 0,
        })
    }
    

    collabore (){
        this.setState({
            showAvis: true,
            hideCollab: false,
        });

        axios.put('http://darrylbilongo.site/users/' + this.state.user.id, {
            note : this.state.user.note + 1
        })
    }

    avis(){
        axios.post('/opinion', {
            firstName: 'Fred',
            lastName: 'Flintstone'
        })
    }

    handleChange(event){
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({[nam]: val});
    }

    handleSubmit(event){
        event.preventDefault();

        const newAvis = {
            auteurName: this.state.currentUser.first_name,
            contenu: this.state.contenu,
            artisteId: this.props.match.params.id,
        }

        avis(newAvis)

        this.setState({
            showAvis: false,
            showAlert: true,
        });
        

      }

    render(){

        axios.put(`${API_URL}/users/` + this.state.user.id, {
            note :  this.state.user.note - 1
        })
    }

    

    render(){

        const Chat = () => {
            const { id } = this.props.match.params

            if (this.state.currentUser.id === this.state.user.id) {
                return null;
            }

            return (
                <li>
                        <Link to={{
                                    pathname: `/chat/` + id
                                }} 
                            className="nav-link"
                        >
                            <button className="btn btn-block btn-ln btn-light">
                                Chat
                            </button>
                        </Link>
                    </li>
            )
        }

        const Avis = () => {
            const { id } = this.props.match.params

            if (this.state.currentUser.id === this.state.user.id) {
                return null;
            }

            return (
                    <div>
                    <Link to={{
                        pathname: `/avis/` + id
                            }} 
                        className="nav-link">
                        <button className="btn btn-success btn-block btn-lg">
                            Voir les avis de cet artiste
                        </button>
                    </Link>
                    </div>
            )
        }


        const Vote = () => { 

            if (this.state.currentUser.id === this.state.user.id) {
                return null;
            }

            return (
                    <li className="list-group-item">
                        As-tu apprécié cet artiste? {this.state.like ? "Tu as aimé ce profil" : "Tu n'as pas aimé"}
                        <button
                            onClick={this.voteAime} 
                            type="submit"
                            className= "btn btn-block btn-lg btn-success"
                        >
                        J'aime      
                        </button>
                        <button
                            onClick={this.voteAimePas} 
                            type="submit"
                            className= "btn btn-block btn-lg btn-danger"
                        >       
                        Je n'aime pas     
                        </button>
                    </li>
                    
            )

        }


        return(
            <div>
                <div className="videode">
                    <div className="video">
                    {/*<ReactPlayer width="100%" url='https://www.youtube.com/watch?v=xPfP-bB3X_k' controls/>*/}
                     </div>
                     <div className="details">
                    <h2>Profil de {this.state.user.first_name}</h2>
                    <ul className="list-group">
                        <li className="list-group-item">Nom : {this.state.user.last_name}</li>
                        <li className="list-group-item">Prénom : {this.state.user.first_name}</li>
                        <li className="list-group-item">Adresse Mail : {this.state.user.email}</li>
                        <li className="list-group-item">Role : {this.state.user.role}</li>
                        <li className="list-group-item">Description :</li>
                        {
                        this.state.hideCollab?
                         <div>
                            <button
                                onClick={this.collabore} 
                                type="submit"
                                className= "btn btn-block btn-lg btn-primary"
                                >
                                Clique-ici pour écrire un avis sur cet artiste     
                            </button>
                        </div>
                        :null
                        }
                        {
                        this.state.showAlert?
                        <div>
                            <li className="list-group-item list-group-item-dark">
                                Vous avez parfaitement émis votre avis sur cet artiste!
                            </li>
                        </div>
                        :null
                        }
                        {
                        this.state.showAvis?
                        <div>
                            <li className="list-group-item">
                                <form>
                                    <label>
                                        <input 
                                            name= "contenu"
                                            type="text" 
                                            value={this.state.contenu} 
                                            onChange={this.handleChange} 
                                            rows="5"
                                            placeholder="Entrez un avis"/>
                                    </label>
                                    <button onClick={(e) => {this.handleSubmit(e)}} className="btn btn-block btn-lg btn-danger" type="submit">
                                        Envoyer
                                    </button>
                                </form>
                            </li>
                        </div>
                        :null
                        }
                        {Avis()}
                    </ul>
                    {Chat()}
                    <label htmlFor="youtube"><a href={this.state.liens.lienYoutube}><img src={Youtube} width="60" height="60"></img></a></label>
                            <label htmlFor="insta"><a href={this.state.liens.lienInsta}><img src={Insta} width="60" height="60"></img></a></label>
                            <label htmlFor="twitter"><a href={this.state.liens.lienAutre}><img src={Twitter} width="60" height="60"></img></a></label>
                    </div>
                    
                </div>
                <div className="container3" onSubmit={this.handleImport}>
                    <h1 className="blanco">Oeuvres de l'artiste</h1>
                    <ul className="list-group"> 
                    <li className="list-group-item">
                    {this.state.contents.map(content => {
                        return <ReactAudioPlayer
                        src={`${API_URL}/` + content.link}
                        controls className="audio"
                      />
                    })}
                    </li>
                    </ul>
                    <div className="baslist">
                        <img src={Logo} width="60" height="60"></img>
                    </div>
                </div>
            </div>

        )
    }
}
export default Profile;