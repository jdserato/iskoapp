import React, { Component } from 'react'
import Header from '../../components/header/Header'
import './Home.css'

class home extends Component {
    render() {
        return (
            <div>
                <Header isLoggedIn={true} activeList={1}/>
            </div>
        )
    }
}

export default home