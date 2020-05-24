import React from "react";
import { register } from './UserFonctions';

class Register extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        first_name: '',
        last_name: '',
        password: '',
        email: '',
        role: 'Rappeur',
        rien: ''
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
          role: this.state.role
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
        <div className="row">
                    <div className="col-md-6 mt-5 mx-auto">
                        <form className= "formulaire" noValidate onSubmit={this.onSubmit}>
                            <h1 className="h3 mn-3">Nouveau ? enregistrez vous !</h1>
                            <div className="form-group">
                                <label htmlFor="last_name">Nom: </label>
                                <input type="text"
                                    name="last_name"
                                    className="form-control"
                                    placeholder="Entrez votre nom"
                                    value={this.state.last_name}
                                    onChange={this.onChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="first_name">Prénom: </label>
                                <input type="text"
                                    name="first_name"
                                    className="form-control"
                                    placeholder="Entrez votre prénom"
                                    value={this.state.first_name}
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
                            <div className="form-group">
                              <label> Choisissez votre rôle </label>
                              <select class="form-control form-control-lg"
                                  onSelect={this.onChange}
                                  onChange={this.onChange}
                                  name="role"
                              required>
                                <option>Rappeur</option>
                                <option>Bass</option>
                                <option>Producteur</option>
                              </select>
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
