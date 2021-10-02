import React, { Component } from 'react'
import Star from './star.png'
import StarActive from './star-active.png'
import './Rating.css'

class rating extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            maxNumber: props.maxNumber,
            activeNumber: props.activeNumber
        }
    }
    
    render() {
        var starList = []
        for(var i=0; i<this.state.maxNumber;i++){
            if(i<this.props.activeNumber)
                starList.push(<li key={i.toString()} className="active"><img src={StarActive} alt="star active"/></li>)
            else
                starList.push(<li key={i.toString()}><img src={Star} alt="star inactive"/></li>)
        }
        return (
            <div className="rating">
                <ul>
                    {starList}
                </ul>
                <p>{this.props.children}</p>
            </div>
        )
    }
}

export default rating
