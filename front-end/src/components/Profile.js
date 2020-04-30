import React, { Component } from "react";
import axios from 'axios'
import ReactAudioPlayer from 'react-audio-player';
import jwt_decode from 'jwt-decode';
import Youtube from '../images/youtube.png'
import Insta from '../images/Insta.png'
import Twitter from '../images/Twitter_Logo.png'

class Profile extends Component{

    constructor(props) {
        super(props);

        this.state = {
          user: {},
          currentUser :'',
          like: false,
          selectedFile: null,
          note: 0,
          loaded: 0,
          contents: [],
          lien: {}
        };
      
        this.voteAime=this.voteAime.bind(this);
        this.voteAimePas=this.voteAimePas.bind(this);
        this.onChangeHandler = this.onChangeHandler.bind(this)
        this.onClickHandler = this.onClickHandler.bind(this)
    }

    async componentWillMount() {
        const { id } = this.props.match.params


        await axios.get('http://localhost:8080/contents/', {
            UserId : id
        }).then(res => {
            this.setState({
                contents : res.data
            })
        })



    }
    
  async componentDidMount(){
        const { id } = this.props.match.params

        axios.get('http://localhost:8080/users/' + id)
            .then((res) => {
                this.setState({
                    user: res.data
                })
            });

        const token = await localStorage.getItem('usertoken');
        const decoded = jwt_decode(token);

        this.setState({
            currentUser: decoded,
        })

        /*axios.get('http://localhost:8080/contents/', {
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

        axios.post("http://localhost:8080/upload", data, { 
            onUploadProgress: ProgressEvent => {
                this.setState({
                  loaded: (ProgressEvent.loaded / ProgressEvent.total*100),
                });
            }})
            .then(res => { // then print response status
                console.log(res.statusText)
            })
    }

    onChangeHandler (event) {
        this.setState({
            selectedFile: event.target.files[0],
            loaded: 0,
        })
        console.log(event.target.files[0])
    }

    voteAime (){
        this.setState({
            like: true,
        });

        axios.put('http://localhost:8080/users/' + this.state.user.id, {
            note : this.state.user.note + 1
        })
  
    }

    voteAimePas(){
        this.setState({
            like: false,
        });

        axios.put('http://localhost:8080/users/' + this.state.user.id, {
            note :  this.state.user.note - 1
        })
    }

    

    render(){

        //let btn_class = this.state.like ? "btn btn-block btn-lg btn-success" : "btn btn-block btn-lg btn-danger";

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
                        <h2>Votre description</h2>
                            <ul className="list-group">
                                <li className="list-group-item">Nom : {this.state.user.last_name}</li>
                                <li className="list-group-item">Prénom : {this.state.user.first_name}</li>
                                <li className="list-group-item">Adresse Mail : {this.state.user.email}</li>
                                <li className="list-group-item">Role : {this.state.user.role}</li>
                                <li className="list-group-item">Description :</li>
                                <li className="list-group-item">Note : {this.state.user.note}</li> 
                                {Vote()}  
                            </ul>
                            <a href="https://twitter.com/home"><img src={Twitter} width="50" height="50"></img></a>
                            <a href="https://www.instagram.com/"><img src={Insta} width="50" height="50"></img></a>
                            <a href="https://www.youtube.com/"><img src={Youtube} width="50" height="50"></img></a>
                    </div>
                    
                </div>
                <div className="container" onSubmit={this.handleImport}>
                    <div className="row">
                        <div className="offset-md-3">
                            <label>Importez une de vos oeuvres: </label> 
                            <input type="file" className="form-control-file" onChange={this.onChangeHandler}></input>
                        </div>
                    </div>
                    <button type="button"
                            onClick={this.onClickHandler}
                            className="btn-lg"> Importer 
                    </button>
                    <div className="form-group">
        {/*<Progress max="100" color="success" value={this.state.loaded} >{Math.round(this.state.loaded,2) }%</Progress>*/}
                    </div>
                </div>
                <div className="container">
                    {this.state.contents.map(content => {
                        return <ReactAudioPlayer
                        src={content.link}
                        autoPlay="false"
                        controls
                      />
                    })}
                </div>
            </div>
        )
    }


}

export default Profile;