import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import jwt_decode from 'jwt-decode';

const Item = function ({item}) {
    return <tr>
    <th scope="row">{item.id}</th>
    <td>{item.first_name}</td>
    <td>{item.last_name}</td>
    <td>{item.role}</td>
    <td className="boutonCata">
        <Link to={{
                    pathname: `/avis/` + item.id
                }} 
                className="nav-link">
                <button className="btn btn-success btn-block btn-lg">
                    <div className="voirav">Voir les avis </div>
                </button>
        </Link>
    </td>
    <td className="boutonCata">
        <Link to={{
                    pathname: `/profilVisiteur/` + item.id
                }} 
        className="nav-link">
            <button className="btn btn-info btn-block btn-lg">
                Voir profil
            </button>
        </Link>
    </td>
    </tr>;
}

const ItemList = ({ list }) => {
    return (
        <div class="table-responsive-md">
        <table className="table table-striped table-dark">
            <thead class="thead-dark">
                <tr>
                <th scope="col">#</th>
                <th scope="col">Prénom</th>
                <th scope="col">Nom</th>
                <th scope="col">Rôle</th>
                <th scope="col">Avis émis sur l'artiste</th>
                <th scope="col">Profil</th>
                </tr>
            </thead>
            <tbody>
                {list.map(listitem => {
                    return <Item key={listitem.id} item={listitem} />
                })}
            </tbody>
        </table>
        </div>
    );
}

export default class Filter extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            selected: '',
            persons: [],
            selectedPersons : [],
            currentUser:''
        };

        this.handleOnChange = this.handleOnChange.bind(this)
        this.handlesubmit = this.handlesubmit.bind(this)
    }

    handlesubmit () {
        if (this.state.selected === "Tous") {
            const result = this.state.persons.filter(user => user.id !== this.state.currentUser.id) 
            this.setState({
                selectedPersons: result
            })
        }
        else {
            const result = this.state.persons.filter(user => user.role === this.state.selected && user.id !== this.state.currentUser.id) 
            this.setState({
                selectedPersons: result
            })
        }
        
    }

    handleOnChange = (event) => {
        let val = event.target.value;
        this.setState({ selected: val})
    }

    async componentDidMount() {
        axios.get('http://darrylbilongo.site/users').then(res => {
            this.setState({ 
                persons: res.data,
                selectedPersons: res.data,
             });
        })
        const token =  await localStorage.getItem('usertoken');
        const decoded = jwt_decode(token);
            this.setState({
                currentUser: decoded,
            })
            console.log(this.state.currentUser)
    }

    render() {
        return (
        <div className="catalogueEnt">
            <div className="form-row">
                <div className="col-auto">
                        <label> Affinez votre recherche: </label>
                </div>
                <div className="col-auto">
                    <label className="mr-sm-2 sr-only" htmlFor="inlineFormCustomSelect">Preference</label>
                    <select className="custom-select mr-sm-2" 
                        id="inlineFormCustomSelect"
                        name='selected'
                        onChange={this.handleOnChange}>
                        <option defaultValue value="Tous">Tous...</option>
                        <option value="Producteur">Producteur</option>
                        <option value="Rappeur">Rappeur</option>
                        <option value="Bass">Bass</option>
                    </select>
                </div>
                <div className="col-auto">
                    <button type="submit" onClick={this.handlesubmit} className="btn btn-primary mb-2">Soumettre</button>
                </div>
            </div>
            <ItemList list={this.state.selectedPersons}/>
        </div>
    );}
}