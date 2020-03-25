import React, { Component } from "react";
import Navigation from './Navigation';
import axios from 'axios'
import Entete from "./Entete";

class PageAccueil extends Component{
    render(){
        return(
            <div>
                <Entete/>
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
            </div>
        )
    }

}


export default PageAccueil;