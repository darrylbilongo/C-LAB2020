import React, { Component } from "react";
import Navigation from './Navigation';
import axios from 'axios'

class PageAccueil extends Component{
    render(){
        return(
            <div>
                <h1 className="titre">C-LAB</h1>
<<<<<<< HEAD

                <nav>
                  <ul id="menu">
                    <li><a href="#">Infos</a></li>
                    <li><a href="http://localhost:3000/register">S'inscrire</a></li>
                    <li><a href="#">Sessions</a></li>
                    <li><a href="http://localhost:3000/catalogue">Catalogue</a></li>
                    <li><a href="#">Accueil</a></li>
                  </ul>
                  <p className="description">C-LAB est une plateforme visant à réunir les différents artistes afin
                    de leur permettre de créer des projets à plusieurs. Fini l'époque où tu étais
                    le seul à faire de la musique parmis tout ton entourage! Désormais, de nombreux
                    artistes t'attendent et souhaite collaborer eux-aussi.
                  </p>
                </nav>
=======
                <Navigation />
                {/*<div>
                    {
                        axios.get('http://localhost:8080/posts')
                        .then(res => {
                            console.log(res.data)
                            let resstr = "";
                            res.data.forEach(element => {
                                resstr += element.title
                            });
                            return resstr;
                        })
                    }
                </div>*/}
>>>>>>> 7359746d3f664fac2e4c47d46e959cf89367a918
            </div>
        )
    }

}


export default PageAccueil;