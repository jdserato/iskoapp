import React, { Component } from 'react'
import './Stepper.css'

class Stepper extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             maxNumber: props.maxNumber,
             activeNumber: props.activeNumber
        }
    }
    
    render() {
        var stepperList = []
        for(var i=0; i<this.state.maxNumber;i++){
            if(i<this.props.activeNumber)
                stepperList.push(<li key={i.toString()} className="active">{i+1}</li>)
            else
                stepperList.push(<li key={i.toString()}>{i+1}</li>)
        }
        return (
            <div>
                <ul id="stepper">
                    {stepperList}
                </ul>
            </div>
        )
    }
}

export default Stepper
