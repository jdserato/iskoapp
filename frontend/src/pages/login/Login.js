import React, { Component } from 'react'
import Header from '../../components/header/Header'
import './Login.css'
import { Link } from 'react-router-dom'

class Login extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             email: "",
             password: "",
        }
    }

    handleChange(event){
        const value = event.target.value;
        this.setState({
            [event.target.name]: value
        })
    }
    
    render() {
        return (
            <div>
                <Header />
                <div id="login-body">
                    <h2>Login</h2>
                    <form className="form">
                        <div className="form-container">
                            <div className="labeled-input"><label>Email</label><input type="email" name="email" value={this.state.email} onChange={this.handleChange.bind(this)} /></div>
                            <div className="labeled-input"><label>Password</label><input type="password" name="password" value={this.state.password} onChange={this.handleChange.bind(this)} /></div>
                            <div className="forgot-password"><Link to="/forgotpassword">Forgot Password?</Link></div>
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                </div>
                <div className="login-footer">
                    <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
                </div>
            </div>
        )
    }
}

export default Login
