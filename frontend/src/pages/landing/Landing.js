import React, { Component } from 'react'
import Header from '../../components/header/Header'
import './Landing.css'
import mobileImg from './device-mockup.png'

class Landing extends Component {
    render() {
        return (
            <div>
                <Header />
               
                <div className="wrapper">
                    <div className="landing-container">
                        <div className="landing-left">
                            <h2 id="slogan">Where teams <span>design together</span></h2>
                            <p>Reprehenderit esse labore id veniam ut veniam non ex adipisicing amet ullamco dolor proident. Exercitation velit</p>
                            <a className="btn btn-primary" href="#!">Button</a>
                            <a className="btn btn-secondary" href="#!">Button</a>
                        </div>
                        <div className="landing-right">
                            <img src={mobileImg} alt="mobile"/>
                        </div>
                    </div>
                    
                </div>

                
            </div>
        )
    }
}

export default Landing
