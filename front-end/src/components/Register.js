import React, { Component } from "react";
import { register } from './UserFonctions';
import Navigation from "./Navigation";

class Register extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        first_name: '',
        last_name: '',
        password: '',
        email: ''
      };
  
      this.onChange = this.onChange.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
    }
  
    onChange(event) {
      let nam = event.target.name;
      let val = event.target.value;
      this.setState({[nam]: val});
    }
  
    onSubmit(event) {
      event.preventDefault();

      const user = {
          email: this.state.email,
          password: this.state.password,
          first_name: this.state.first_name,
          last_name: this.state.last_name,
      }

      register(user).then(res => {
          if(res){
              this.props.history.push('/login')
          }
      })
    }
  handlemdp = () => {
    // eslint-disable-next-line
    {document.getElementById('mdp').value === document.getElementById('confmdp').value ? alert("bon") : alert("mauvais")}
  }
    render() {
      return (
        <div>
          <Navigation />
        <div className="row">
                    <div className="col-md-6 mt-5 mx-auto">
                        <form noValidate onSubmit={this.onSubmit}>
                            <h1 className="h3 mn-3">Nouveau ? enregistrez vous !</h1>
                            <div className="form-group">
                                <label htmlFor="last_name">Nom: </label>
                                <input type="text"
                                    name="first_name"
                                    className="form-control"
                                    placeholder="Entrez votre first_name"
                                    value={this.state.first_name}
                                    onChange={this.onChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="first_name">Prénom: </label>
                                <input type="text"
                                    name="last_name"
                                    className="form-control"
                                    placeholder="Entrez votre prénom"
                                    value={this.state.last_name}
                                    onChange={this.onChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email: </label>
                                <input type="email"
                                    name="email"
                                    className="form-control"
                                    placeholder="Entrez votre email"
                                    onChange={this.onChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Mot de passe: </label>
                                <input type="password"
                                    className="form-control"
                                    name="password"
                                    placeholder="Entrez votre mot de passe"
                                    onChange={this.onChange}
                                />
                            </div>
                            <button type="submit"
                            className="btn btn-block btn-lg btn-light">
                                Envoyer
                            </button>
                        </form>
                    </div>
                </div>
      </div>
      );
    }
  }


export default Register;
