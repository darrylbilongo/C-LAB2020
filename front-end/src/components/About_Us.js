import React, { Component } from "react";
import Souhaib from '../images/souhaib.png'
import Darryl from '../images/darryl.png'
import Bilel from '../images/bilel.png'

class About_Us extends Component{
    render(){
        return(
            <div className="justify-content-center">
                <div className="description2">
                    <p>La musique est un art où bien souvent les plus grands sont bien au dessus et où il est très difficile de se faire une place.</p>
                    <p>C'est le constat qu'on fait 3 étudiants avant de se lancer dans la création de <span className="text-danger font-weight-bold">"C-LAB"</span></p> 
                    C-Lab est un projet qui a pour but d'aider les musiciens en manque de visibilité à se faire remarquer par d'autres personnes issues de ce domaine.
                </div>
                <div className="apropos">
                    <div className="">
                        <div className="col">
                            <a href='https://www.linkedin.com/in/souha%C3%AFb-azzouz-a92b67198/' target="_blank">
                            <img 
                                className="aproposImg d-inline"
                                src={Souhaib}
                                alt="Azzouz Souhaïb"/></a>
                                <span className="aproposText">
                                    <h3>Azzouz Souhaïb</h3>
                                    <p>Designer et communication</p>
                                </span>
                        </div>
                    </div>
                    <div className="col">
                        <a href='https://www.linkedin.com/in/darrylbilongo/' target="_blank">
                        <img 
                            className="aproposImg d-inline"
                            src={Darryl}
                            alt="Bilongo Darryl"/></a>
                            <span className="aproposText">
                                <h3>Bilongo Darryl</h3>
                                <p>Gestionnaire de données</p>
                            </span>
                    </div>
                    <div className="col">
                        <a href='https://www.linkedin.com/in/bilel-bouquoyoue-700763134/' target="_blank">
                        <img 
                            className="aproposImg"
                            src={Bilel}
                            alt="Bouqoyoue Bilel"/></a>
                            <span className="aproposText">
                                <h3>Bouquoyoue Bilel</h3>
                                <p>L'expert Musical</p>
                            </span>
                    </div>
                </div>
                <div>
                    <p className="text-white">Si vous souhaitez prendre contact avec un membre du projet pour une amélioration ou un retour, choisissez votre interlocuteur en cliquant sur sa photo</p>
                </div>
                <div>
                    <a className="btn btn-primary btn-block btn-lg"
                        href="mailto:sou_sou_azzouz@hotmail.com"
                        data-toggle="tooltip"
                        data-placement="left"
                        title="Login with your account">Ou envoyez-nous un email</a>
                </div>
            </div>
        )
    }

}


export default About_Us;