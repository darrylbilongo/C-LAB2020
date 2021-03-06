import React, { Component } from "react";
import axios from 'axios';
import { API_URL } from './UserFonctions'

const Item = function ({item}) {
    return<tr className="list-avis1">
            <th className="enteteAvis" scope="row">{item.auteurName}</th>
            <th className="contenuAvis" scope="row">{item.contenu}</th>
        </tr>;
}

const List = ({ list }) => {
    return (
        <table className="list-avis">
            <tbody>
                {list.map(listitem => {
                    return <Item key={listitem.id} item={listitem} />
                })}
            </tbody>
        </table>
    );
}

class Avis extends Component{
    state = {
        avis : [],
        user: [],
    };

    async componentDidMount(){
        const { id } = this.props.match.params

        axios.get(`${API_URL}/users/avis/`+ id)
        .then((res) =>{this.setState({avis:res.data});
        }); 

        axios.get(`${API_URL}/users/` + id)
            .then((res) => {
                this.setState({
                    user: res.data
                })
            })
            .catch(err => console.log(err));
    }

    render(){
        return(
            <div className="backgroundAvis">
                    <h2 className="titreAvis">Avis de {this.state.user.last_name} {this.state.user.first_name}</h2>
                    <List className="tableAvis" list={this.state.avis}/>
            </div>
        )            

    }
}


export default Avis;