import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import logo from './ISKO-BOOK.png'
import UserCircle from './user-circle.png'

class Header extends Component {
    render() {
        let navList
        if(this.props.isLoggedIn){
            navList = navList = <ul>
                <li className={this.props.activeList === 1 ? "active" : ""}><Link to="/home">Home</Link></li>
                <li className={this.props.activeList === 2 ? "active" : ""}><Link to="/watch">Watch</Link></li>
                <li className={this.props.activeList === 3 ? "active" : ""}><Link to="/shop">Shop</Link></li>
                <li className={this.props.activeList === 4 ? "active" : ""}><Link to="/my-playlist">My Playlist</Link></li>
                <li className={this.props.activeList === 5 ? "active" : ""}><Link to="/my-account">My Account</Link></li>
                <li className="user-circle"><Link to="/my-account"><img src={UserCircle} alt="user circle" /></Link></li>
            </ul>
        }
        else{
            navList = <ul>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/signup">Sign Up</Link></li>
                <li className="login-btn"><Link to="/login">Login</Link></li>
            </ul>
        }

        return (
            <div id="header">
                <div className="wrapper">
                    <div id="main-logo"><Link to="/"><img src={logo} alt="isko logo"/> <h1>ISKO</h1></Link></div>
                    <nav>
                        {navList}
                    </nav>
                </div>
            </div>
        )
    }
}

export default Header
