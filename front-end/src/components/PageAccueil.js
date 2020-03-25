import React, { Component } from "react";
import PageLogin from "./PageLogin";

class PageAccueil extends Component{
    render(){
        return(
            <div>
                <h1 className="titre">C-LAB</h1>

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
            </div>
        )
    }

}


export default PageAccueil;