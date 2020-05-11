import React, { Component } from "react";
import axios from 'axios';
import ReactAudioPlayer from 'react-audio-player';
import jwt_decode from 'jwt-decode';
import {Link} from 'react-router-dom';

class Profile extends Component{

    constructor(props) {
        super(props);

        this.state = {
          user: {},
          showNote: false,
          showAvis: false,
          hideCollab: true,
          currentUser :'',
          like: false,
          selectedFile: null,
          note: 0,
          loaded: 0,
          contents: [],
        };
      
        this.collabore=this.collabore.bind(this);
        this.avis=this.avis.bind(this);
        this.conditonNoCollab=this.conditonNoCollab.bind(this);
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onClickHandler = this.onClickHandler.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    async componentWillMount() {
        const { id } = this.props.match.params
        
        await axios.post('http://localhost:8080/contents/get', {
            UserId : id
        }).then(res => {
            this.setState({
                contents : res.data
            })
        }).catch(err => console.log(err))

    }
    
  async componentDidMount(){
        const { id } = this.props.match.params

        axios.get('http://localhost:8080/users/' + id)
            .then((res) => {
                console.log(res.data)
                this.setState({
                    user: res.data
                })
            })
            .catch(err => console.log(err));

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
            .catch(err => console.log(err))
    }

    onChangeHandler (event) {
        this.setState({
            selectedFile: event.target.files[0],
            loaded: 0,
        })
        console.log(event.target.files[0])
    }

    collabore (){
        this.setState({
            showAvis: true,
            hideCollab: false,
        });

        axios.put('http://localhost:8080/users/' + this.state.user.id, {
            note : this.state.user.note + 1
        })
  
    }

    avis(){
        this.setState({

        });
    }

    handleChange(event){
        this.setState({value: event.target.value});
    }

    handleSubmit(e){
        console.log(e.currentTarget)
        e.preventDefault();
    }

    conditonNoCollab(){
        const noCollab = this.state.user.note 
        if (noCollab == 0){
            return (<li className="list-group-item">
                        Cet utilisateur n'a jamais eu de collaboration, soyez le premier!
                    </li>)
        }else if(noCollab == 1){
            return (<li className="list-group-item">
                        Cet utilisateur a déjà collaboré avec {this.state.user.note} artiste, ne ratez pas votre chance!
                    </li>)
        }else{
            return (<li className="list-group-item">
                        Cet utilisateur a déjà collaboré avec {this.state.user.note} artistes, ne ratez pas votre chance!
                    </li>)
        }

    }

    render(){

        axios.put('http://localhost:8080/users/' + this.state.user.id, {
            note :  this.state.user.note - 1
        })
    }

    

    render(){

        //let btn_class = this.state.like ? "btn btn-block btn-lg btn-success" : "btn btn-block btn-lg btn-danger";


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
                        this.state.showNote?
                        <div>
                            {this.conditonNoCollab()}
                        </div>
                        :null
                        }
                        
                        {
                        this.state.showAvis?
                        <div>
                            <li className="list-group-item">
                                <form
                                onClick={(e) => {this.handleSubmit(e)}}>
                                    <label>
                                        <p className="text-dark">Avis</p>
                                        <input 
                                            type="text" 
                                            value={this.state.value} 
                                            onChange={this.handleChange} 
                                            className="form-control"
                                            rows="5"/>
                                    </label>
                                    <button onClick={(e) => e.preventDefault()} className="danger" type="submit">
                                        Envoyer
                                    </button>
                                </form>
                            </li>
                        </div>
                        :null
                        }
                    </ul>
                    {Chat()}
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
                        src={'http://localhost:8080/' + content.link}
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