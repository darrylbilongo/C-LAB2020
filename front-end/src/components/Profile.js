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
          youtube: [],
          twitter: [],
          insta: []
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
        
        await axios.get(`${API_URL}/contents/${id}`).then(res => {
            this.setState({
                contents : res.data
            })
        }).catch(err => console.log(err))

    }
    
  async componentDidMount(){
        const { id } = this.props.match.params
        axios.get(`${API_URL}/users/` + id)
            .then((res) => {
                this.setState({
                    user: res.data
                })
            })
            .catch(err => console.log(err));

            axios.get(`${API_URL}/links/youtube/` + id)
            .then((res) => {
                this.setState({
                    youtube: res.data
                })
            })
            .catch(err => console.log(err));

            axios.get(`${API_URL}/links/insta/` + id)
            .then((res) => {
                this.setState({
                    insta: res.data
                })
            })
            .catch(err => console.log(err));

            axios.get(`${API_URL}/links/twitter/` + id)
            .then((res) => {
                this.setState({
                    twitter: res.data
                })
            })
            .catch(err => console.log(err));

        const token = await localStorage.getItem('usertoken');
        const decoded = jwt_decode(token);

        this.setState({
            currentUser: decoded,
        })
        
        /*axios.post(`${API_URL}/contents/`, {
            UserId : id
        }).then(res => {
            console.log(res)
            this.setState({
                contents : res.data
            })
        })*/

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
                alert(res.statusText)
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

        axios.put(`${API_URL}/users/` + this.state.user.id, {
            note : this.state.user.note + 1
        })
  
    }

    avis(){

        axios.post('/opinion', {
            firstName: 'Fred',
            lastName: 'Flintstone'
          })
          .then(function (response) {
            console.log(response);
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



        return(
            <div>
                <div className="videode">
                    <div className="video">
                        {/*<ReactPlayer width="100%" url='https://www.youtube.com/watch?v=xPfP-bB3X_k' controls/>*/}
                    </div>
                    <div className="details">
                        <h2>Votre description</h2>
                        <ul className="list-group">
                            <li className="list-group-item">Nom : {this.state.user.last_name}</li>
                            <li className="list-group-item">Prénom : {this.state.user.first_name}</li>
                            <li className="list-group-item">Adresse Mail : {this.state.user.email}</li>
                            <li className="list-group-item">Role : {this.state.user.role}</li>
                            <li className="list-group-item">Description : {this.state.user.description}</li>
                            <li className="list-group-item">
                                <Link to={{
                                    pathname: `/avis/` + this.state.currentUser.id
                                        }} 
                                    className="nav-link">
                                    <button className="btn btn-success btn-block btn-lg">
                                        Voir les avis de cet artiste
                                    </button>
                                </Link>
                             </li>
                        </ul>
                        {Chat()}
                        <label htmlFor="youtube"><a href={this.state.youtube.contenu}><img src={Youtube} width="60" height="60"></img></a></label>
                        <label htmlFor="insta"><a href={this.state.insta.contenu}><img src={Insta} width="54" height="54"></img></a></label>
                        <label htmlFor="twitter"><a href={this.state.twitter.contenu}><img src={Twitter} width="50" height="50"></img></a></label>
                           
                    </div>
                    
                </div>
                <div className="container3" onSubmit={this.handleImport}>
                    <div className="row">
                        <div className="import">
                            <label><h3>Importez une de vos oeuvres:</h3> </label>
                            <div className='buttoon'>
                                <input type="file" className="form-control-file" onChange={this.onChangeHandler}></input>
                                <button type="button"
                                    onClick={this.onClickHandler}
                                    className="btn-lg"> Importer 
                                </button>
                            </div>
                        </div>
                    </div>
                    
                    <div className="form-group">
        {/*<Progress max="100" color="success" value={this.state.loaded} >{Math.round(this.state.loaded,2) }%</Progress>*/}
                    </div>
               
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
                        <h4 className="nowa">Vos musiques</h4>
                    </div>
                </div>
            </div>
        )
    }
}
export default Profile;