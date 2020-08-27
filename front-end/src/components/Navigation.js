import React, { Component } from "react";
import {Link, withRouter} from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import Logo from './Clab.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavbarToggler, MDBCollapse,

} from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';

class navigation extends Component{

    state = {
        user: '',
        isOpen: false
      };

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
      
      toggleCollapse = () => {
        this.setState({ isOpen: !this.state.isOpen });
      }
      
      render() {
        const loginLink = (
            <li className="nav-item" onClick= "this.setState({ state: this.state })">
                        <Link to="/login" className="nav-link">
                            <h3>Login</h3>
                        </Link>
            </li>
        )
    
         const regLink = (
            <li className="nav-item" onClick= "this.setState({ state: this.state })">
                        <Link to="/register" className="nav-link">
                            <h3>Register</h3>
                        </Link>
                    </li>
        ) 
        const homeLink = (
            <li className="nav-item" onClick= "this.setState({ state: this.state })">
                            <Link to="/home" className="nav-link">
                                <h3>Home</h3>
                            </Link>
                </li>
        )
    
        const homeLink2 = (
            <li className="nav-item" onClick= "this.setState({ state: this.state })">
                            <Link to="/" className="nav-link">
                                <h3>Home</h3>
                            </Link>
                </li>
        )
    
        const profileLink = (
            <li className="nav-item" onClick= "this.setState({ state: this.state })">
                    <Link to={{
                        pathname: `/profile/${this.state.user.id}`
                    }} 
                    className="nav-link">
                        <h3>Profile</h3>
                    </Link>
            </li>
        )
        const logoutLink = (
            <li className="nav-item" onClick= "this.setState({ state: this.state })">
                    <a href="#" onClick={this.logOut.bind(this)} className="nav-link">
                       <h3>Logout</h3>
                    </a>
            </li>
        )
    
        const catalogueLink = (
            <li className="nav-item" onClick= "this.setState({ state: this.state })">
                            <Link to="/catalogue" className="nav-link">
                                <h3 className="ecriture">Catalog</h3>
                            </Link>
                </li>
        )
    
        const compteLink = (
                    <li className="nav-item" onClick= "this.setState({ state: this.state })">
                        <Link to="/settings" className="nav-link">
                            <h3>Settings</h3>
                        </Link>
                    </li>
        ) 
    
        const aPropos = (
            <div className="aboutus">
                <li className="nav-item" onClick= "this.setState({ state: this.state })">
                    <Link to="/about_us" className="nav-link">
                        <h3>Support</h3>
                    </Link>
                </li>
            </div>
        )

        const brand = (
            <a href="#" class="navbar-brand">
                    <img src={Logo} height="50px" alt="CoolBrand"></img>
            </a>
        )
        

        return (
            <div className='navi'>
                <Router>
                    <MDBNavbar color="indigo" dark expand="md">
                        <MDBNavbarBrand>
                            {brand}
                        </MDBNavbarBrand>
                        <MDBNavbarToggler onClick={this.toggleCollapse} />
                        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
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
                        </MDBCollapse>
                    </MDBNavbar>
                </Router>
          </div>
          );
          
        }
}

export default withRouter(navigation);