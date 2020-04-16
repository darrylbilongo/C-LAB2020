import React, {useState} from 'react';
import axios from 'axios';
import {Link, withRouter} from 'react-router-dom';

const Item = function ({item}) {
    return <tr>
    <th scope="row">{item.id}</th>
    <td>{item.first_name}</td>
    <td>{item.last_name}</td>
    <td>{item.role}</td>
    <td>{item.email}</td>
    <td>2</td>
    <td>
        <Link to="/ProfilVisiteur" className="nav-link">
            <button>
                Voir profil
            </button>
        </Link>
</td>
    </tr>;
}

const ItemList = ({ list }) => {
    return (
        <table className="table table-striped table-dark">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Role</th>
                <th scope="col">Contact</th>
                <th scope="col">Note</th>
                <th scope="col">Profil</th>
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

const Filter = ({usersList}) => {

    const [selected, setSelected] = useState('')
    const [selectedPersons, setSelectedPersons] = useState([])

    function handlesubmit () {

        const result = usersList.filter(user => user.role === selected) 

        setSelectedPersons(result)

    }

    const handleOnChange = (event) => {
        let val = event.target.value;
        setSelected(val);
    }


    return (
        <div className="">
            <div className="col-auto">
                    <h1> Catalogue </h1>
            </div>
            <div className="form-row">
                <div className="col-auto">
                        <label> Affinez votre recherche: </label>
                </div>
                <div className="col-auto">
                    <label className="mr-sm-2 sr-only" htmlFor="inlineFormCustomSelect">Preference</label>
                    <select className="custom-select mr-sm-2" 
                        id="inlineFormCustomSelect"
                        name='selected'
                        onChange={handleOnChange}>
                        <option defaultValue>Choose...</option>
                        <option value="Producteur">Producteur</option>
                        <option value="Rappeur">Rappeur</option>
                        <option value="Bass">Bass</option>
                    </select>
                </div>
                <div className="col-auto">
                    <button type="submit" onClick={handlesubmit} className="btn btn-primary mb-2">Soumettre</button>
                </div>
            </div>
            <ItemList list={selectedPersons}/>
        </div>
    );
}

export default class PersonList extends React.Component{

    state = {
        persons: [],
    }


    componentDidMount() {
        axios.get('http://localhost:8080/users/', {params: {first_name: 'Bilel'}}).then(res => {
            this.setState({ 
                persons: res.data,
             });
        })
    }

    render(){
        return (
            <div>
                <Filter usersList={this.state.persons}/>
            </div>
        );
    }
}