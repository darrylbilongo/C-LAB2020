import React from 'react';
import axios from 'axios';

const Item = function ({item}) {
    return <li>{item.first_name} {item.last_name}</li>;
}

export default class PersonList extends React.Component{
    state = {
        persons: []
    }


    componentDidMount() {
        axios.get('http://localhost:8080/users').then(res => {
            this.setState({ persons: res.data });
        })
    }

    render(){
        return (
            <div>
                <ul className='ListeNom'>
                    {this.state.persons.map(person => 
                        <Item key={person.id} item={person}/>
                    )}  
                </ul>
            </div>
        );
    }
}