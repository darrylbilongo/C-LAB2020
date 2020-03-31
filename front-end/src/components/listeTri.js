import axios from 'axios';
import React from 'react';
import Entete from './Entete'
import Navigation from './Navigation'


export default class listeTri extends React.Component{
    state = {
        persons: []
    }


    render(){
        return (
            <div>s
                <Entete/>
                <Navigation />
                
            </div>
        );
    }
}