import React, { Component } from "react";
import axios from 'axios';

const Item = function ({item}) {
    return <tr>
    <th scope="row">{item.contenu}</th>
    <th scope="row">{item.auteurName}</th>
    </tr>;
}

const List = ({ list }) => {
    return (
        <table >
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
  
    constructor(props) {
        super(props);
    }

    async componentDidMount(){
        const { id } = this.props.match.params

        axios.get('http://localhost:8080/users/avis/'+ id)
        .then((res) =>{this.setState({avis:res.data});
        });  
    }

    render(){
        return(
            <div className="formulaire4">
                <div>
                    <List list={this.state.avis}/>
                </div>
            </div>
        )            

    }
}


export default Avis;