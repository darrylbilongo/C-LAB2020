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
          user: '',
          date: [],
          heure: ''
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
            console.log(res)
            this.setState({
                messages: res.data,
                /*date: this.state.messages.date.substr(0, 10)*/
            })
        })
        console.log(this.state.messages)
        console.log(this.state.messages.date)
        await axios.post('http://localhost:8080/messages/get/' + decoded.id, {
            authorId : id
        }).then(res => {
            console.log(res)
            this.setState({
                messages: this.state.messages.concat(res.data),
            })
        })

        socket.on("message", msg =>{
            this.setState({messages: [...this.state.messages, msg]})
        })

    }

    renderChat() {
        const chat  = this.state.messages;
        return chat.map(chatMessage => (
          <div key={chatMessage.id}>
            <span style={{ color: "green" }}>texte </span>
    
            <span>{chatMessage.message}</span>
          </div>
        ));
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
            <div className="chattotal">
                <div className="chat1">
                    <ul className="list-group">
                        <li class="list-group-item active">Chat avec {this.state.user.first_name}</li>
                        {this.state.messages.length > 0 && this.state.messages.map(msg => {
                            if(msg.authorId === this.state.currentUser.id) {
                                return (
                                    <li key={msg.id} className="list-group-item">{msg.message} <div className="infoMess">(envoyé le {msg.date.substr(0,10)} à {msg.date.substr(11, 8)})</div></li>
                                )  
                            }
                            else if (msg.destinationId == this.state.currentUser.id){
                                return (
                                    <li key={msg.id} className="list-group-item"><b>{this.state.user.first_name}</b> : {msg.message} <div className="infoMess">(envoyé le {msg.date.substr(0,10)} à {msg.date.substr(11, 8)})</div></li>
                                ) 
                            }
                                         
                        })}
                    </ul>
                    
                </div>
                <div className="BouttonEnvoyer">
                    <input value={this.state.message} name="message" onChange={this.onChange} className="envoichat"></input>
                    <button className='btn btn-primary' onClick={() => this.onClick()}> Envoyer !</button>
                </div>
            </div>
        );
    }
}

export default Chat;