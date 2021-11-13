import React, { Component } from 'react'
import Header from '../../components/header/Header'
import VideoBox from '../../components/videoBox/VideoBox'
import Tbl from '../../components/tbl/Tbl'
import './MyPlaylist.css'

class Shop extends Component {
    openCustomPlaylistModal(){
        var modal = document.getElementById("custom-playlist-modal");
        var successModal = document.getElementById("playlist-success-modal");
        var createPlaylistBtn = document.getElementById("create-playlist-btn");
        var span = document.getElementsByClassName("close")[0];
        var cancelBtn = document.getElementById("cancel-btn");
        modal.style.display = "block";

        span.onclick = function() {
            modal.style.display = "none";
        }
        cancelBtn.onclick = function() {
            modal.style.display = "none";
        }
        createPlaylistBtn.onclick = function(){
            modal.style.display = "none";
            successModal.style.display = "block";
        }
        window.onclick = function(event) {
            if (event.target == modal) {
              modal.style.display = "none";
              successModal.style.display = "none";
            }
            else if (event.target == successModal) {
                successModal.style.display = "none";
            }
        }
    }
    render() {
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
        // Get the modal

        var dataset = [
            ['12345', 'Course Title', '<a href="#!">Remove</a>'],
            ['12345', 'Course Title', '<a href="#!">Remove</a>'],
            ['12345', 'Course Title', '<a href="#!">Remove</a>'],
            ['12345', 'Course Title', '<a href="#!">Remove</a>'],
            ['12345', 'Course Title', '<a href="#!">Remove</a>'],
            ['12345', 'Course Title', '<a href="#!">Remove</a>'],
            ['12345', 'Course Title', '<a href="#!">Remove</a>'],
            ['12345', 'Course Title', '<a href="#!">Remove</a>'],
            ['12345', 'Course Title', '<a href="#!">Remove</a>'],
            ['12345', 'Course Title', '<a href="#!">Remove</a>'],
            ['12345', 'Course Title', '<a href="#!">Remove</a>'],
            ['12345', 'Course Title', '<a href="#!">Remove</a>'],
            ['12345', 'Course Title', '<a href="#!">Remove</a>'],
            ['12345', 'Course Title', '<a href="#!">Remove</a>'],
            ['12345', 'Course Title', '<a href="#!">Remove</a>'],
        ]

        return (
            <div>
                <Header isLoggedIn={true} activeList={4} />
                <div className="wrapper">
                    <div id="my-playlist-body">
                        <div className="header-title"><h1>My Playlists</h1> <a href="#!" className="btn btn-secondary" id="custom-playlist-btn" onClick={() => this.openCustomPlaylistModal()}>+ Create Custom Playlist</a></div>
                        <div className="video-list playlist">
                            <h2>Recently Playlist <a href="#!">See All</a></h2>
                            <div className="video-boxes">
                                <section>
                                    <VideoBox content = {playlistContent} />
                                </section>
                                <section>
                                    <VideoBox content = {playlistContent} />
                                </section>
                                <section>
                                    <VideoBox content = {playlistContent} />
                                </section>
                            </div>
                        </div>
                        <div className="video-list playlist">
                            <h2>Favorites <a href="#!">See All</a></h2>
                            <div className="video-boxes">
                                <section>
                                    <VideoBox content = {playlistContent} />
                                </section>
                                <section>
                                    <VideoBox content = {playlistContent} />
                                </section>
                                <section>
                                    <VideoBox content = {playlistContent} />
                                </section>
                            </div>
                        </div>
                        <div className="video-list playlist">
                            <h2>My Custom Playlist <a href="#!">See All</a></h2>
                            <div className="video-boxes">
                                <section>
                                    <VideoBox content = {playlistContent} />
                                </section>
                                <section>
                                    <VideoBox content = {playlistContent} />
                                </section>
                                <section>
                                    <VideoBox content = {playlistContent} />
                                </section>
                            </div>
                        </div>
                        <div className="video-list playlist">
                            <h2>All Playlists <a href="#!">See All</a></h2>
                            <div className="video-boxes">
                                <section>
                                    <VideoBox content = {playlistContent} />
                                </section>
                                <section>
                                    <VideoBox content = {playlistContent} />
                                </section>
                                <section>
                                    <VideoBox content = {playlistContent} />
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="custom-playlist-modal" className="modal">
                    <div className="modal-content">
                        <span className="close">&times;</span>
                        <h2>Create Custom Playlist</h2>
                        <div id="custom-playlist-info">
                            <label>Playlist Name</label><input type="text" />
                            <label>Playlist Content</label><input type="text" />
                            <a className="btn btn-secondary" href="#!">+ Add to Playlist</a>
                        </div>
                        <div id="custom-playlist-list">
                            <h3>Custom Playlist</h3>
                            <Tbl data={dataset} />            
                        </div>
                        <div id="custom-playlist-footer">
                            <a href="#!" className="btn btn-secondary" id="cancel-btn">Cancel</a>
                            <a href="#!" id="create-playlist-btn" className="btn btn-primary">Create Playlist</a>
                        </div>
                    </div>
                </div>
                <div id="playlist-success-modal" className="modal">
                    <div className="modal-content">
                        <h2>Playlist was created <span>successfully!</span></h2>
                    </div>
                </div>
            </div>
            
        )
    }
}

export default Shop
