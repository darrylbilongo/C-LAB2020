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
        rien: '',
        messageError: '',
        messageMail: 'Votre mail est incorrect',
        confirmation: '',
        messageConfirmation: ''
      };
  
      this.onChange = this.onChange.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
    }
  
    onChange(event) {
      let nam = event.target.name;
      let val = event.target.value;
      this.setState({[nam]: val});
      //console.log(this.state.confirmation);
    }
  
    onSubmit(event) {
      event.preventDefault();
      let verifMdp = new RegExp("[A-Z]");
      let verifMdp2 = new RegExp("[0-9]");
      let verifMail= new RegExp("@");
      const user = {
          email: this.state.email,
          password: this.state.password,
          first_name: this.state.first_name,
          last_name: this.state.last_name,
          role: this.state.role
      }
     if(this.state.password.length >= 8 && verifMdp.test(this.state.password) && verifMdp2.test(this.state.password) && verifMail.test(this.state.email) && this.state.password == this.state.confirmation){
      register(user).then(res => {
          if(res){
              this.props.history.push('/login')
          }
      })
      }
      else if(this.state.password.length >= 8 && verifMdp.test(this.state.password) && verifMdp2.test(this.state.password) && this.state.password == this.state.confirmation){
        this.state.messageError = 'Votre mail est incorrect'
        this.state.messageError=<h6 class="alert alert-danger" role="alert"> {this.state.messageError} </h6>
        this.setState({ state: this.state });
      }
      else if(verifMail.test(this.state.email) && this.state.password == this.state.confirmation){
        this.state.messageError = 'Votre mot de passe doit faire minimum 8 caractères et contenir minimum un chiffre et une majuscule'
        this.state.messageError=<h6 class="alert alert-danger" role="alert"> {this.state.messageError} </h6>
        this.setState({ state: this.state });
      }
      else if(verifMail.test(this.state.email) && this.state.password.length >= 8 && verifMdp.test(this.state.password) && verifMdp2.test(this.state.password)){
        this.state.messageConfirmation = 'Les mots de passe ne sont pas identiques';
        this.state.messageError=<h6 class="alert alert-danger" role="alert"> {this.state.messageConfirmation} </h6>;
        this.setState({ state: this.state });
      }
      else if(verifMail.test(this.state.email)){
        this.state.messageConfirmation = 'Les mots de passe ne sont pas identiques';
        this.state.messageError = 'Votre mot de passe doit faire minimum 8 caractères et contenir minimum un chiffre et une majuscule'
        this.state.messageError=<h6 class="alert alert-danger" role="alert"> {this.state.messageError}  <br/> {this.state.messageConfirmation}</h6>
        this.setState({ state: this.state });
      }
      else if(this.state.password.length >= 8 && verifMdp.test(this.state.password) && verifMdp2.test(this.state.password)){
        this.state.messageConfirmation = 'Les mots de passe ne sont pas identiques';
        this.state.messageError=<h6 class="alert alert-danger" role="alert"> {this.state.messageMail} <br/> {this.state.messageConfirmation}</h6>
        this.setState({ state: this.state });
      }
      else if(this.state.password == this.state.confirmation){
        this.state.messageError = 'Votre mot de passe doit faire minimum 8 caractères et contenir minimum un chiffre et une majuscule'
        this.state.messageError=<h6 class="alert alert-danger" role="alert"> {this.state.messageError} <br/> {this.state.messageMail}</h6>
        this.setState({ state: this.state });
      }
      else{
        this.state.messageConfirmation = 'Les mots de passe ne sont pas identiques';
        this.state.messageError = 'Votre mot de passe doit faire minimum 8 caractères et contenir minimum un chiffre et une majuscule'
        this.state.messageError=<h6 class="alert alert-danger" role="alert"> {this.state.messageError} <br/> {this.state.messageMail} <br/> {this.state.messageConfirmation}</h6>
        this.setState({ state: this.state });
      }
  }
  handlemdp = () => {
    // eslint-disable-next-line
    {document.getElementById('mdp').value === document.getElementById('confmdp').value ? alert("bon") : alert("mauvais")}
  }

    render() {
      return (
        <div>
                        <form className= "formulaire" noValidate onSubmit={this.onSubmit}>
                            <h1 className="h3 mn-3">Nouveau ? enregistrez vous !</h1>
                            {this.state.messageError}
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
                                <label htmlFor="confirmation">Confirmation: </label>
                                <input type="password"
                                    className="form-control"
                                    name="confirmation"
                                    placeholder="Confirmez votre mot de passe"
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
      );
    }
  }


export default Register;

