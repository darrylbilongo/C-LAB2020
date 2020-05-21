import React from "react";
import { link } from './UserFonctions';
import jwt_decode from 'jwt-decode';
import Youtube from '../images/youtube.png'
import Insta from '../images/Insta.png'
import Twitter from '../images/Twitter_Logo.png'

class Link extends React.Component {
    constructor(props) {
      super(props);
      
  
      this.onChange = this.onChange.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
    }
    state = {
        lienYoutube: '',
        lienInsta: '',
        lienAutre: '',
        user: ''
    };
    onChange(event) {
      let nam = event.target.name;
      let val = event.target.value;
      this.setState({[nam]: val});
    }


    async componentDidMount() {
            const token = await localStorage.getItem('usertoken');
            const decoded = jwt_decode(token);

            this.setState({
                user: decoded,
            })
            console.log(this.state.user);
    }
    
  
    onSubmit(event) {
      event.preventDefault();
      const newLink = {
          lienYoutube: this.state.lienYoutube,
          lienInsta: this.state.lienInsta,
          lienAutre: this.state.lienAutre,
          UserId: this.state.user.id
      }
      link(newLink)
    }

    render() {
        return (
                <div className="setting">
                        <form className= "formulaire3" noValidate onSubmit={this.onSubmit}>
                              <h1 className="h3 mn-3">Enregistrer vos réseaux!</h1>
                              <div className="form-group">
                                  <label htmlFor="youtube">Youtube <a href="https://www.youtube.com/"><img src={Youtube} width="30" height="30"></img></a></label>
                                  <input type="text"
                                      name="lienYoutube"
                                      className="form-control"
                                      placeholder="Entrez votre lien youtube"
                                      value={this.state.lienYoutube}
                                      onChange={this.onChange}
                                  />
                              </div>
                              <div className="form-group">
                                  <label htmlFor="first_name">Instagram <a href="https://www.instagram.com/"><img src={Insta} width="30" height="30"></img></a></label>
                                  <input type="text"
                                      name="lienInsta"
                                      className="form-control"
                                      placeholder="Entrez votre lien instagram"
                                      value={this.state.lienInsta}
                                      onChange={this.onChange}
                                  />
                              </div>
                              <div className="form-group">
                                  <label htmlFor="email">Twitter <a href="https://twitter.com/home"><img src={Twitter} width="30" height="30"></img></a></label>
                                  <input type="email"
                                      name="lienAutre"
                                      className="form-control"
                                      placeholder="Entrez votre lien twitter"
                                      value={this.state.lienAutre}
                                      onChange={this.onChange}
                                  />
                              </div>
                              <button type="submit"
                              className="btn btn-block btn-lg btn-light">
                                  Envoyer
                              </button>
                          </form>
                          <form className= "formulaire4" noValidate onSubmit={this.onSubmit}>
                          <h3 class="text-dark">Modifier vos données</h3>
                            <div className="form-group">
                                <label className="inscrip"><h6>Nom </h6></label>
                                <input type="text"
                                    name="last_name"
                                    className="form-control"
                                    placeholder="Entrez votre nom"
                                    value={this.state.last_name}
                                    onChange={this.onChange}
                                />
                            </div>
                            <div className="form-group">
                                <label className="inscrip"><h6>Prénom</h6> </label>
                                <input type="text"
                                    name="first_name"
                                    className="form-control"
                                    placeholder="Entrez votre prénom"
                                    value={this.state.first_name}
                                    onChange={this.onChange}
                                />
                            </div>
                            <div className="form-group">
                                <label className="inscrip"><h6>Email</h6> </label>
                                <input type="email"
                                    name="email"
                                    className="form-control"
                                    placeholder="Entrez votre email"
                                    onChange={this.onChange}
                                />
                            </div>
                            
                            <div className="form-group">
                              <label className="inscrip"><h6> Choisissez votre rôle </h6></label>
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



export default Link;