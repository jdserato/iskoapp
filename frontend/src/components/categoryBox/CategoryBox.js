import React, { Component } from 'react'
import ImagePlaceholder from '../../images/image-placeholder.png'
import './CategoryBox.css'

class CategoryBox extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isActive: props.isActive
        }
    }
    
    render() {
        return (
            <div className={this.state.isActive ? "category-box active" : "category-box"}>
                <figure><img src={ImagePlaceholder} alt="landscape drawing"/></figure>
                <p>Nostrud culpa</p>
            </div>
        )
    }
}

export default CategoryBox
