import React, { Component } from "react";
import ReactPlayer from 'react-player'
import axios from 'axios'
import {Progress} from 'reactstrap';

class Profile extends Component{

    constructor(props) {
        super(props);
        this.state = {
          user: '',
          selectedFile: null,
          loaded: 0
        };

        this.onChangeHandler = this.onChangeHandler.bind(this)
        this.onClickHandler = this.onClickHandler.bind(this)
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

    onClickHandler = () => {
        const data = new FormData() 
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

    render(){
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
                    </ul>
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
                    <div class="form-group">
        {/*<Progress max="100" color="success" value={this.state.loaded} >{Math.round(this.state.loaded,2) }%</Progress>*/}
                    </div>
                </div>
            </div>
        )
    }
}

export default Profile;