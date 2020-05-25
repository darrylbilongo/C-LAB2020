import React, { Component } from "react";
import {Link, withRouter} from 'react-router-dom';
import jwt_decode from 'jwt-decode';

class Navigation extends Component{

    state = {
        user: '',
    }

    logOut(e){
      e.preventDefault();
      localStorage.removeItem('usertoken');
      this.props.history.push('/');
    }


    componentDidUpdate() {
        try {
            const token = localStorage.getItem('usertoken');
            const decoded = jwt_decode(token);

            this.setState({
                user: decoded,
            })
        }
        catch(error) {
           
        }
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
                        <Link to="/home" className="nav-link">
                            Home
                        </Link>
            </li>
    )

    const homeLink2 = (
        <li className="nav-item">
                        <Link to="/" className="nav-link">
                            Home
                        </Link>
            </li>
    )

    const profileLink = (
        <li className="nav-item">
                <Link to={{
                    pathname: `/profile/${this.state.user.id}`
                }} 
                className="nav-link">
                    Profile
                </Link>
        </li>
    )
    const logoutLink = (
        <li className="nav-item">
                <a href="#" onClick={this.logOut.bind(this)} className="nav-link">
                   Logout
                </a>
        </li>
    )

    const catalogueLink = (
        <li className="nav-item">
                        <Link to="/catalogue" className="nav-link">
                            Catalog
                        </Link>
            </li>
    )

    const compteLink = (
        <li className="nav-item">
                    <Link to="/settings" className="nav-link">
                        Settings
                    </Link>
                </li>
    ) 

    const aPropos = (
        <div className="aboutus">
            <li className="nav-item">
                <Link to="/about_us" className="nav-link">
                    Support
                </Link>
            </li>
        </div>
    )
 

      return(
          <div className="navigationbarre">
              <nav>
                <ul id="menu">
                {localStorage.usertoken ? null : loginLink}
                {localStorage.usertoken ? null : regLink}
                {localStorage.usertoken ? logoutLink : null}
                {localStorage.usertoken ? aPropos : null}
                {localStorage.usertoken ? compteLink : null}
                {localStorage.usertoken ? profileLink : null}
                {localStorage.usertoken ? catalogueLink : null}
                {localStorage.usertoken ? homeLink : null}
                {localStorage.usertoken ? null : homeLink2}
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