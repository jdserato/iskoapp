import React, { Component } from 'react'
import './Watch.css'
import Header from '../../components/header/Header'
import VideoBox from '../../components/videoBox/VideoBox'
import ZeroPurchases from '../../images/zeropurchases.png'

class watch extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             purchasedCount: 1
        }
    }
    
    render() {
        // Sample content object for VideoBox component
        var content = {
            /* uncomment this for image URL */
            // imageUrl: "",
            isPlaylist: false,
            price: "PHP 15.00",
            totalVideos: "10 videos",
            rating: 4,
            title: "Course Title",
            description: "Let’s add a short course description here which should be max two liner only I guess..."
        }
        var playlistContent = {
            /* uncomment this for image URL */
            //imageUrl: "",
            isPlaylist: true,
            price: "PHP 15.00",
            totalVideos: "10 videos",
            rating: 4,
            title: "Course Title",
            description: "Let’s add a short course description here which should be max two liner only I guess..."
        }

        let body
        if(this.state.purchasedCount === 0){
            body = 
            <div id="watch-body" className="watch-body-new-user">
                <h1>Welcome back, Charlene!</h1>
                <figure>
                    <img src={ZeroPurchases} alt="zero purchases" />
                </figure>
                <p>You haven’t made any purchases yet. Try your luck at the shop!</p>
                <a href="#!">SHOP NOW!</a>
            </div>
        }
        else{
            body = 
                <div id="watch-body">
                    <h1>Welcome back, Charlene!</h1>

                    <div className="video-list">
                        <h2>Recently Purchased <a href="#!">See All</a></h2>
                        <div className="video-boxes">
                            <section>
                                <VideoBox content = {content} />
                            </section>
                            <section>
                                <VideoBox content = {content} />
                            </section>
                            <section>
                                <VideoBox content = {content} />
                            </section>
                        </div>
                    </div>

                    <div className="video-list">
                        <h2>Continue Watching <a href="#!">See All</a></h2>
                        <div className="video-boxes">
                            <section>
                                <VideoBox content = {content} />
                            </section>
                        </div>
                    </div>

                    <div className="video-list playlist">
                        <h2>Recently Playlist <a href="#!">See All</a></h2>
                        <div className="video-boxes">
                            <section>
                                <VideoBox content = {playlistContent} />
                            </section>
                        </div>
                    </div>

                </div>
        }
        return (
            <div>
            <Header isLoggedIn={true} activeList={2}/>
                <div className="wrapper">
                    {body}
                </div>
            
            </div>
        )
    }
}

export default watch
