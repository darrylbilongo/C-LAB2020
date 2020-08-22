import React, { Component } from "react";
import {Link, withRouter} from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import Logo from './Clab.png'


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
                        <h3>Login</h3>
                    </Link>
        </li>
    )

     const regLink = (
        <li className="nav-item">
                    <Link to="/register" className="nav-link">
                        <h3>Register</h3>
                    </Link>
                </li>
    ) 
    const homeLink = (
        <li className="nav-item">
                        <Link to="/home" className="nav-link">
                            <h3>Home</h3>
                        </Link>
            </li>
    )

    const homeLink2 = (
        <li className="nav-item">
                        <Link to="/" className="nav-link">
                            <h3>Home</h3>
                        </Link>
            </li>
    )

    const profileLink = (
        <li className="nav-item">
                <Link to={{
                    pathname: `/profile/${this.state.user.id}`
                }} 
                className="nav-link">
                    <h3>Profile</h3>
                </Link>
        </li>
    )
    const logoutLink = (
        <li className="nav-item">
                <a href="#" onClick={this.logOut.bind(this)} className="nav-link">
                   <h3>Logout</h3>
                </a>
        </li>
    )

    const catalogueLink = (
        <li className="nav-item">
                        <Link to="/catalogue" className="nav-link">
                            <h3 className="ecriture">Catalog</h3>
                        </Link>
            </li>
    )

    const compteLink = (
                <li className="nav-item">
                    <Link to="/settings" className="nav-link">
                        <h3>Settings</h3>
                    </Link>
                </li>
    ) 

    const aPropos = (
        <div className="aboutus">
            <li className="nav-item">
                <Link to="/about_us" className="nav-link">
                    <h3>Support</h3>
                </Link>
            </li>
        </div>
    )
 

      return(
          <div className="navi">
            <nav class="navbar navbar-expand-sm navbar-dark">
                <div class="container-fluid">
                    <img src={Logo} width="3%"></img>
                    <ul className="navbar-nav">
                        {localStorage.usertoken ? null : homeLink2}                        
                        {localStorage.usertoken ? null : regLink}
                        {localStorage.usertoken ? null : loginLink}
                        {localStorage.usertoken ? homeLink : null}
                        {localStorage.usertoken ? catalogueLink : null}
                        {localStorage.usertoken ? profileLink : null}
                        {localStorage.usertoken ? compteLink : null}             
                        {localStorage.usertoken ? aPropos : null}
                        {localStorage.usertoken ? logoutLink : null}
                    </ul>
                    </div>
            </nav>
            </div>
      )
    }
}

export default withRouter(Navigation);