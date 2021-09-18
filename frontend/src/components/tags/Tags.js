import React, { Component } from 'react'
import './Tags.css'

class Tags extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             tagName: props.tagName,
             isActive: props.isActive
        }
    }
    
    render() {
        return (
            <div className={this.state.isActive  ? "tags active" : "tags"}>
                {this.state.tagName}
            </div>
        )
    }
}

export default Tags
