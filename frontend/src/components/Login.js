import React, { Component } from 'react'

export default class Login extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message: "",
             username: "",
             pass: "",
        }
    }

    onUsernameChange = event => {
        this.setState({
            username: event.target.value
        })
    }
    onPasswordChange = event => {
        this.setState({
            pass: event.target.value
        })
    }

    onLogin = event => {
        alert(`${this.state.username} ${this.state.pass}`);
        event.preventDefault();
    }
    
    render() {
        return (
            <div>
                <form onSubmit={this.onLogin}>
                    <h2>{this.state.message}</h2>
                    <input placeholder="username" value={this.state.username} onChange={this.onUsernameChange}/>
                    <input placeholder="password" type="password" value={this.state.pass} onChange={this.onPasswordChange}/>
                    <button type="submit">Login</button>
                </form>
            </div>
        )
    }
}
