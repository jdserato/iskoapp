import React, { Component } from 'react'
import './VideoBox.css'
import DummyVideo from './dummy-video.png'
import Rating from '../rating/Rating'

class VideoBox extends Component {
    constructor(props) {
        super(props)

        var imageUrl
        if(this.props.content["imageUrl"] !== undefined){
            imageUrl = this.props.content["imageUrl"]
        }
        else{
            imageUrl = DummyVideo
        }
    
        this.state = {
            imageUrl: imageUrl,
            isPlaylist: this.props.content["isPlaylist"],
            price: this.props.content["price"],
            rating: this.props.content["rating"],
            totalVideos: this.props.content["totalVideos"],
            title: this.props.content["title"],
            description: this.props.content["description"]
        }
    }
    
    render() {
        let price
        if(this.state.price !== undefined)
            price = <figcaption>{this.state.price}</figcaption>
        return (
            <div className={"video-box"}>
                <a href="#!">
                    <div className={this.state.isPlaylist === true ? "image-box playlist" : "image-box"}>
                        <figure>
                            <img src={this.state.imageUrl} alt="video box" />
                            {price}
                        </figure>
                    </div>
                    <Rating maxNumber="5" activeNumber={this.state.rating}>{this.state.totalVideos}</Rating>
                    <div className="video-info">
                        <h3>{this.state.title}</h3>
                        <p>{this.state.description}</p>
                    </div>
                </a>
            </div>
        )
    }
}

export default VideoBox
