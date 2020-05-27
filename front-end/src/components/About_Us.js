import React, { Component } from "react";
import Souhaib from '../images/souhaib.png'
import Darryl from '../images/darryl.png'
import Bilel from '../images/bilel.png'
import Carousel from 'react-bootstrap/Carousel'

class About_Us extends Component{
    render(){
        return(
            <div className="aproposTot">
                

                <div className="apropos">
                    <h1 className="blanco2">Nos membres</h1>
                    <Carousel >
                        <Carousel.Item>
                       
                            <img
                                className="img-carousel"
                                src={Souhaib}
                                alt="Azzouz Souhaïb"
                            /> 
                        <a href='https://www.linkedin.com/in/souha%C3%AFb-azzouz-a92b67198/' target="_blank">
                            <Carousel.Caption>
                                <h3>Azzouz Souhaïb</h3>
                                <p>Designer et communication</p>
                            </Carousel.Caption>
                        </a>
                            </Carousel.Item>
                        <Carousel.Item>
                        
                            <img
                                className="img-carousel"
                                src={Darryl}
                                alt="Bilongo Darryl"
                            />
                            <a href='https://www.linkedin.com/in/darrylbilongo/' target="_blank">

                            <Carousel.Caption>
                                <h3>Bilongo Darryl</h3>
                                <p>Gestionnaire de données</p>
                            </Carousel.Caption>
                        </a>
                        </Carousel.Item>
                        <Carousel.Item>
                        
                            <img
                                className="img-carousel"
                                src={Bilel}
                                alt="Bouquoyoue Bilel"
                            />
                            <a href='https://www.linkedin.com/in/bilel-bouquoyoue-700763134/' target="_blank">
                            <Carousel.Caption>
                                <h3>Bouquoyoue Bilel</h3>
                                <p>L'expert Musical</p>
                            </Carousel.Caption>
                        </a>
                        </Carousel.Item>
                        
                    </Carousel>
                </div>
                <div className="contact">
                    <h5 className="text-white">Si vous souhaitez prendre contact avec un membre du projet pour une amélioration ou un retour, choisissez votre interlocuteur en cliquant sur son nom</h5>
                </div>
                <div className="basabout">
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