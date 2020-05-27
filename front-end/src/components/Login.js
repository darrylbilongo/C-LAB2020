import React, { Component } from "react";
import {login} from './UserFonctions';
import axios from 'axios';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id : '',
            email: '',
            password: '',
            errors: {}
        }
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangeMDP = this.handleChangeMDP.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }



    handleChangeEmail(e) {
        this.setState({   
            email: e.target.value
        });
    }

    handleChangeMDP(e) {
        this.setState({
           password: e.target.value
           
        });
        console.log(this.state.password)
    }

    handleSubmit(e) {
        e.preventDefault();

        const user = {
            id: this.state.id,
            email: this.state.email,
            password: this.state.password
        }
        login(user).then(res => {
            if(res){
                this.props.history.push('/home')
            }
        })
    }

    
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-6 mt-5 mx-auto">
                        <form className="formulaire" noValidate onSubmit={this.handleSubmit}>
                            <h1 className="h3">Connectez vous!</h1>
                            <div className="form-group">
                                <label htmlFor="email">Email: </label>
                                <input type="email"
                                    className="form-control"
                                    placeholder="Entrez votre email"
                                    onChange={this.handleChangeEmail}
                                    autoFocus
                                    id="email_input"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Mot de Passe: </label>
                                <input type="password"
                                    className="form-control"
                                    placeholder="Entrez votre mot de passe"
                                    onChange={this.handleChangeMDP}
                                    id="mdp_input"
                                />
                            </div>
                            <button type="submit"
                            className="btn btn-block btn-lg btn-light"
                            >
                                Se connecter
                            </button>
                        </form>
                    </div>
                </div> 
            </div>   
        );
    }
}

export default Login;