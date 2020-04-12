import React, { Component } from "react";

class PageAccueil extends Component{
    render(){
        return(
            <div>
                <div className="container">
                    <div className="row">
                        <div className="description1">
                            <h7 className="text-left  text-white">
                            <p><span className="text-success font-weight-bold">C-LAB</span> est une plateforme web visant à mettre en relation des musiciens, artistes, producteurs, … 
                            Telle la vision d’un réseau social, cette application web permettra de créer des publications 
                            recherchant l’entraide entre divers créateurs.</p>

                            <p>Le principe est simple, je m’inscris sur le site en fournissant des 
                            informations telles que : 
                                <ul className="">
                                    <li>Nom</li>
                                    <li>Prénom</li>
                                    <li>Age</li>
                                    <li>Rôle dans la musique (chanteur, rappeur, guitariste, etc..)</li>
                                    <li>Ville de domicile</li>
                                    <li>Style de musique</li>
                                    <li>Liens de démos</li>
                                </ul>
                            </p>

                            <p>Une fois cela terminé, je figure dans le catalogue du site 
                            et je peux le parcourir afin de trouver une autre personne qui correspond à ce que je recherche. 
                            C-LAB permet de mettre en contact ces différents musiciens 
                            et de les aider à s’organiser des sessions d’enregistrement, et si possible, des concerts et petits évènements. 
                            Un principe de messagerie sera mis en place afin que les utilisateurs puissent communiquer entre eux.</p>
                            </h7>
                        </div>
                    </div>
                     <div className="row">
                            <div className= "col justify-content-md-right">
                                <div className="form-row">
                                    <div className="col">
                                        <a className="btn btn-primary btn-block btn-lg"
                                        href="/login"
                                        data-toggle="tooltip"
                                        data-placement="left"
                                        title="Login with your account">Login</a>
                                    </div>
                                    <div className="col">
                                        <a className="right btn btn-secondary btn-block btn-lg" 
                                        href="/register"
                                        data-toggle="tooltip"
                                        data-placement="right"
                                        title="Create an account">Register</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        )
    }

}


export default PageAccueil;