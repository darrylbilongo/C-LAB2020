import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

const Item = function ({item}) {
    return <tr>
    <th scope="row">{item.id}</th>
    <td>{item.first_name}</td>
    <td>{item.last_name}</td>
    <td>{item.role}</td>
    <td>{item.email}</td>
    <td>{item.note}</td>
    <td>
        <Link to={{
                    pathname: `/profile/` + item.id
                }} 
        className="nav-link">
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

export default class Filter extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            selected: '',
            persons: [],
            selectedPersons : []
        };

        this.handleOnChange = this.handleOnChange.bind(this)
        this.handlesubmit = this.handlesubmit.bind(this)
    }

    handlesubmit () {
        if (this.state.selected === "Tous") {
            this.setState({
                selectedPersons: this.state.persons
            })
        }
        else {
            const result = this.state.persons.filter(user => user.role === this.state.selected) 
            this.setState({
                selectedPersons: result
            })
        }
        
    }

    handleOnChange = (event) => {
        let val = event.target.value;
        this.setState({ selected: val})
    }

    componentDidMount() {
        axios.get('http://localhost:8080/users').then(res => {
            this.setState({ 
                persons: res.data,
                selectedPersons: res.data,
             });
        })
    }

    render() {
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