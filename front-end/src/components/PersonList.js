import React from 'react';
import axios from 'axios';
import Navigation from './Navigation';
import Entete from "./Entete";

export default class PersonList extends React.Component{
    state = {
        persons: []
    }


    componentDidMount() {
        axios.get('http://localhost:8080/users').then(res => {
            console.log(res);
            this.setState({ persons: res.data });
        })
    }
    render(){
        return (
            <div>
                <Entete/>
                <Navigation />
                <ul className='ListeNom'>{this.state.persons.map(person => <li>{person.first_name} {person.last_name}</li>)}  
                </ul>
            </div>
        );
    }
}