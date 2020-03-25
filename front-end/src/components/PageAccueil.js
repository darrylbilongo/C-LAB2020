import React, { Component } from "react";
import Navigation from './Navigation';
import axios from 'axios'

class PageAccueil extends Component{
    render(){
        return(
            <div>
                <h1 className="titre">C-LAB</h1>
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