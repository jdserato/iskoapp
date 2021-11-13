import React, { Component } from 'react'
import Header from '../../components/header/Header'
import ShopInfo from '../../components/shopInfo/ShopInfo'
import './Course.css'

class Course extends Component {
    render() {
        return (
            <div>
                <Header isLoggedIn={true} activeList={3} />
                <div className="wrapper">
                    <div id="course-body">
                        <div className="add-to-bag-btn"><a href="#!">+ Add to Bag</a></div>
                        <h1>Understanding the Basics of Course Title</h1>
                        <h2>by <span>Charlene Tormes</span></h2>
                        <ShopInfo />
                    </div>
                </div>
            </div>
        )
    }
}

export default Course
