import React, { Component } from "react";
import axios from 'axios';

const Item = function ({item}) {
    return<tr className="list-avis1">
            <th className="enteteAvis" scope="row">{item.auteurId}</th>
            <th className="contenuAvis" scope="row">{item.contenu}</th>
        </tr>

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
  
    constructor(props) {
        super(props);
        
    }

    async componentDidMount(){
        const { id } = this.props.match.params

        axios.get('http://localhost:8080/users/avis/'+ id)
        .then((res) =>{this.setState({avis:res.data});
        }); 
        
        console.log(this.state.avis)

        axios.get('http://localhost:8080/users/' + id)
            .then((res) => {
                console.log(res.data)
                this.setState({
                    user: res.data
                })
            })
            .catch(err => console.log(err));
    }

    render(){
        return(
            <div className="backgroundAvis">
                <div>
                    <List list={this.state.avis}/>
                </div>
            </div>
        )            

    }
}


export default Avis;