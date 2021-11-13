import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../../components/header/Header'
import './Home.css'
import VideoBox from '../../components/videoBox/VideoBox'

class home extends Component {
  static propTypes = {
    auth: PropTypes.object.isRequired,
  };
    render() {
        const { isAuthenticated, user } = this.props.auth;
        // Sample content object for VideoBox component
        var content = {
            /* uncomment this for image URL */
            //imageUrl: "",
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
        return (
            <div>
                <Header isLoggedIn={true} activeList={1}/>
                <div className="wrapper">
                    <div id="home-body">
                        <h1>{user ? `Welcome back, ${user.first_name}!` : ''}</h1>

                        <div className="video-list">
                            <h2>Recommended For You <a href="#!">See All</a></h2>
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
                            <h2>Recently Purchased <a href="#!">See All</a></h2>
                            <div className="video-boxes">
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
                </div>
            </div>
        )
    }
}

// export default home
const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(home);