import React from "react";
import { link } from './UserFonctions';
import jwt_decode from 'jwt-decode';

class Link extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        lienYoutube: '',
        lienInsta: '',
        lienAutre: '',
        user: ''
      };
  
      this.onChange = this.onChange.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
    }
  
    onChange(event) {
      let nam = event.target.name;
      let val = event.target.value;
      this.setState({[nam]: val});
    }

    /*Erreur si on le met
    componentDidUpdate() {
            const token = localStorage.getItem('usertoken');
            const decoded = jwt_decode(token);

            this.setState({
                user: decoded,
            })
        
    }
    */
  
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
          <div>
          <div className="row">
                      <div className="col-md-6 mt-5 mx-auto">
                          <form className= "formulaire3" noValidate onSubmit={this.onSubmit}>
                              <h1 className="h3 mn-3">Enregistrer vos réseaux!</h1>
                              <div className="form-group">
                                  <label htmlFor="youtube">Youtube </label>
                                  <input type="text"
                                      name="lienYoutube"
                                      className="form-control"
                                      placeholder="Entrez votre nom"
                                      value={this.state.lienYoutube}
                                      onChange={this.onChange}
                                  />
                              </div>
                              <div className="form-group">
                                  <label htmlFor="first_name">Instagram </label>
                                  <input type="text"
                                      name="lienInsta"
                                      className="form-control"
                                      placeholder="Entrez votre prénom"
                                      value={this.state.lienInsta}
                                      onChange={this.onChange}
                                  />
                              </div>
                              <div className="form-group">
                                  <label htmlFor="email">Autre Lien </label>
                                  <input type="email"
                                      name="lienAutre"
                                      className="form-control"
                                      placeholder="Entrez votre email"
                                      value={this.state.lienAutre}
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



export default Link;