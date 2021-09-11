import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import logo from './ISKO-BOOK.png'

class Header extends Component {
    render() {
        return (
            <div id="header">
                <div className="wrapper">
                    <div id="main-logo"><Link to="/"><img src={logo} alt="isko logo"/> <h1>ISKO</h1></Link></div>
                    <nav>
                        <ul>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/signup">Sign Up</Link></li>
                            <li><Link to="/login">Login</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
        )
    }
}

export default Header
