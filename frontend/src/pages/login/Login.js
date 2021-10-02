import React, { Component } from 'react'
import Header from '../../components/header/Header'
import './Login.css'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import $ from 'jquery';
import PropTypes from 'prop-types';
import { login } from '../../actions/auth';

export class Login extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             email: "",
             password: "",
        }
    }

    onLogin = (event) => {
        event.preventDefault();
        this.props.login(this.state.email, this.state.password);
        // alert(`${this.state.email} ${this.state.password}` + "Calling ajax ver 2");
        // try {
        //     $.ajax({
        //         url: '/api/auth/login/',
        //         contentType: 'application/json',
        //         method: "POST",
        //         data: {
        //             'email': this.state.email,
        //             'password': this.state.password,
        //         },
        //         success: function(data) {
        //             alert("Hooray");
        //         },
        //         error: function(data) {
        //             alert(data.message);
        //         }
        //     });
        // } catch (err) {
        //     alert("error found" + err);
        // }
        
        // alert("ajax ver 2 called?");
    }

    handleChange(event){
        const value = event.target.value;
        this.setState({
            [event.target.name]: value
        })
    }
    
    render() {
        const { username, password } = this.state;
        return (
            <div>
                <Header />
                <div id="login-body">
                    <h2>Login</h2>
                    <form className="form" onSubmit={this.onLogin}>
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

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(Login);
