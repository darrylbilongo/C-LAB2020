import React, { Component } from "react";
import Carousel from 'react-bootstrap/Carousel'
import Souhaib from '../images/souhaib.png'
import infom from '../images/infom.png'
import wbi from '../images/wbi.png'
import jwt_decode from 'jwt-decode';


class PageAccueil2 extends Component{
    constructor(props) {
        super(props);

        this.state = {
          user: {},
        };
    }

    async componentDidMount(){
        const token = await localStorage.getItem('usertoken');
        const decoded = jwt_decode(token);

        this.setState({
            user: decoded,
        })
    }



    render(){
        return(
            <div className="homepage1"> 
                <h1 className="taillebo">Bonjour {this.state.user.first_name}</h1><br></br>
                <h2 className="blanche">Quelques liens utiles</h2>
                    <Carousel>
                        <Carousel.Item>
                            <img
                                className="img-carousel"
                                src={infom}
                                alt="Azzouz Souhaïb"
                            />
                            <a href='https://www.infosmusiciens.org/fiches/les-aides-et-subventions-pour-les-musiques-actuelles-35' target="_blank">
                            <Carousel.Caption>
                                <h3>cliquez</h3>
                                <p>ici</p>
                            </Carousel.Caption>
                            </a>
                        </Carousel.Item>
                        
                        <Carousel.Item>
                            <img
                                 className="img-carousel"
                                 src={wbi}
                                 alt="Bilongo Darryl"
                            />
                            <a href="https://les-aides.fr/fiche/a55gCXhGxfTeBGZeTUzZ4_Vm/le-fcm/aide-a-la-musique-en-images.html">
                            <Carousel.Caption>
                                <h3>Cliquez</h3>
                                <p>ici</p>
                            </Carousel.Caption>
                            </a>
                        </Carousel.Item>
                    </Carousel>
            </div>
        )
    }

}


export default PageAccueil2;