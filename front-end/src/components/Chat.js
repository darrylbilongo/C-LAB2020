import React, { Component } from "react";
import { socket } from '../../src/service/socket';
import axios from 'axios'
import jwt_decode from 'jwt-decode';

class Chat extends Component{

    constructor(props) {
        super(props);

        this.state = {
          message: 'Hello and welcome',
          messages: [],
          currentUser: ''
        };

        this.onChange = this.onChange.bind(this)
        this.onClick = this.onClick.bind(this)
    }

    async componentDidMount() {

        const { id } = this.props.match.params

        const token = await localStorage.getItem('usertoken');
        const decoded = jwt_decode(token);

        this.setState({
            currentUser: decoded,
        })

        await axios.get('http://localhost:8080/messages/' + id, {
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
                <div>
                    <ul className="list-group">
                        {this.state.messages.length > 0 && this.state.messages.map(msg => {
                            return (
                                <li className="list-group-item">{msg.message}</li>
                            )
                            
                        })}
                    </ul>
                    
                </div>
                <div>
                    <input value={this.state.message} name="message" onChange={this.onChange}></input>
                    <button onClick={() => this.onClick()}> Envoyer !</button>
                </div>
                
            </div>
        );
    }
}

export default Chat;