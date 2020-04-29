import React, { Component } from "react";
import { socket } from '../../src/service/socket';
import axios from 'axios'
import jwt_decode from 'jwt-decode';

class Chat extends Component{

    constructor(props) {
        super(props);

        this.state = {
          message: '',
          messages: [],
          currentUser: '',
          user: ''
        };

        this.onChange = this.onChange.bind(this)
        this.onClick = this.onClick.bind(this)
    }


    async componentDidMount() {

        const { id } = this.props.match.params


        axios.get('http://localhost:8080/users/' + id)
            .then((res) => {
                this.setState({
                    user: res.data
                })
        });

        const token = await localStorage.getItem('usertoken');
        const decoded = jwt_decode(token);

        this.setState({
            currentUser: decoded,
        })

        await axios.post('http://localhost:8080/messages/get/' + id, {
            authorId : decoded.id
        }).then(res => {
            this.setState({
                messages: res.data
            })
        })

        socket.on("message", msg =>{
            this.setState({messages: [...this.state.messages, msg]})
        })

    }

    onChange (event) {
        this.setState({
            message: event.target.value
        })
    }

    onClick () {
        const { id } = this.props.match.params


        if (this.state.message !== "") {
            socket.emit("message", {
                from: this.state.currentUser.id,
                to : id ,
                message: this.state.message
            })
            this.setState({ message : ""})
        }
        else {
            alert('Ajoutez un message')
        }


    }

    render() {
        return (
            <div>
                <div className="container">
                    <ul className="list-group">
                        <li class="list-group-item active">Chat avec {this.state.user.first_name}</li>
                        {this.state.messages.length > 0 && this.state.messages.map(msg => {
                            return (
                                <li key={msg.id} className="list-group-item">{msg.message}</li>
                            )               
                        })}
                    </ul>
                    
                </div>
                <div>
                    <input value={this.state.message} name="message" onChange={this.onChange}></input>
                    <button className='btn btn-primary' onClick={() => this.onClick()}> Envoyer !</button>
                </div>
                
            </div>
        );
    }
}

export default Chat;