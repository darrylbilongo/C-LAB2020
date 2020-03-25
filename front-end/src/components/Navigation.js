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
                        Login
                    </Link>
        </li>
    )

     const regLink = (
        <li className="nav-item">
                    <Link to="/register" className="nav-link">
                        Register
                    </Link>
                </li>
    ) 
    const homeLink = (
        <li className="nav-item">
                        <Link to="/" className="nav-link">
                            Home
                        </Link>
            </li>
    )

    const profileLink = (
        <li className="nav-item">
                <Link to="/profile" className="nav-link">
                    Profile
                </Link>
        </li>
    )
    const logoutLink = (
        <li className="nav-item">
                <a href="" onClick={this.logOut.bind(this)} className="nav-link">
                   Logout
                </a>
        </li>
    )

    const catalogueLink = (
        <li className="nav-item">
                        <Link to="/Catalogue" className="nav-link">
                            Catalog
                        </Link>
            </li>
    )

    

      return(
          <div>
              <nav>
                <ul id="menu">
                {localStorage.usertoken ? null : loginLink}
                {localStorage.usertoken ? null : regLink}
                {localStorage.usertoken ? logoutLink : null}
                {localStorage.usertoken ? profileLink : null}
                {localStorage.usertoken ? catalogueLink : null}
                {homeLink}
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