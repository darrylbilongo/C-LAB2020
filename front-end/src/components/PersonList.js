import React from 'react';
import axios from 'axios';

const Item = function ({item}) {
    return <tr>
    <th scope="row">{item.id}</th>
    <td>{item.first_name}</td>
    <td>{item.last_name}</td>
    <td>{item.role}</td>
    </tr>;
}

const ItemList = ({ list }) => {
    return (
        <table class="table table-striped table-dark">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Role</th>
                </tr>
            </thead>
            <tbody>
                {list.map(listitem => {
                    return <Item key={listitem.id} item={listitem} />
                })}
            </tbody>
        </table>
    );
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
                <ItemList list={this.state.persons}/>
            </div>
        );
    }
}