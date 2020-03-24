import React, { Component } from "react";
import {Link, withRouter} from 'react-router-dom';

class Navigation extends Component{
    logOut(e){
      e.preventDefault();
      localStorage.removeItem('usertoken');
      this.props.history.push('/');
    }

    constructor(props) {
      super(props);
  }

  

    render(){

      const loginLink = (
        <li className="nav-item">
                    <Link to="/login" className="nav-link">
                        Connexion
                    </Link>
        </li>
    )

     const regLink = (
        <li className="nav-item">
                    <Link to="/register" className="nav-link">
                        S'enregistrer
                    </Link>
                </li>
    ) 
    const homeLink = (
        <li className="nav-item">
                        <Link to="/" className="nav-link">
                            Acceuil
                        </Link>
            </li>
    )

    const profileLink = (
        <li className="nav-item">
                <Link to="/profile" className="nav-link">
                    Profil
                </Link>
        </li>
    )
    const logoutLink = (
        <li className="nav-item">
                <a href="" onClick={this.logOut.bind(this)} className="nav-link">
                   Deconnexion
                </a>
        </li>
    )

      return(
          <div>
              <nav>
                <ul id="menu">
                {homeLink}
                {localStorage.usertoken ? null : loginLink}
                {localStorage.usertoken ? profileLink: regLink}
                {localStorage.usertoken ? profileLink : null}
                {localStorage.usertoken ? logoutLink : null}
                </ul>
                {/*<p className="description">C-LAB est une plateforme visant à réunir les différents artistes afin
                  de leur permettre de créer des projets à plusieurs. Fini l'époque où tu étais
                  le seul à faire de la musique parmis tout ton entourage! Désormais, de nombreux
                  artistes t'attendent et souhaite collaborer eux-aussi.
      </p>*/}
              </nav>
          </div> 
      )
    }
}

export default withRouter(Navigation);