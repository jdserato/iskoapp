import React, { Component } from 'react'

class Welcome extends Component{
    constructor(){
        super()
        this.state = {
            message: 'Hello Acey'
        }
    }

    clickHandler = () => {
        this.setState({
            message: 'thank you Acey'
        })
    }

    render(){
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={this.clickHandler}>Click me!</button>
            </div>
        )
    }
}

export default Welcome;