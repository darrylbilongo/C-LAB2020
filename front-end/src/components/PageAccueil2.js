import React, { Component } from "react";
import Navigation from './Navigation';
import axios from 'axios'
import Entete from "./Entete";
import Carousel from 'react-bootstrap/Carousel'
import Souhaib from '../images/souhaib.png'
import Darryl from '../images/darryl.png'
import Bilel from '../images/bilel.jpg'


class PageAccueil2 extends Component{
    render(){
        return(
            <div>
                <Entete/>
                <Navigation/>
                <div className="jumbotron bg-dark"> 
                    <Carousel>
                        <Carousel.Item>
                            <img
                                className="img-carousel"
                                src={Souhaib}
                                alt="Azzouz Souhaïb"
                            />
                            <Carousel.Caption>
                                <h3>Azzouz Souhaïb</h3>
                                <p>Designer et communication</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                 className="img-carousel"
                                 src={Darryl}
                                 alt="Bilongo Darryl"
                            />

                            <Carousel.Caption>
                                <h3>Bilongo Darryl</h3>
                                <p>Gestionnaire de données</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="img-carousel"
                                src={Bilel}
                                alt="Bouquoyoue Bilel"
                            />

                            <Carousel.Caption>
                                <h3>Bouquoyoue Bilel</h3>
                                <p>L'expert Musical</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
        )
    }

}


export default PageAccueil2;