import React, { Component } from 'react'
import './Shop.css'
import Header from '../../components/header/Header'
import Tags from '../../components/tags/Tags'
import SearchBar from '../../components/searchBar/SearchBar'
import CategoryBox from '../../components/categoryBox/CategoryBox'
import VideoBox from '../../components/videoBox/VideoBox'

class Shop extends Component {
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
        return (
            <div>
                <Header isLoggedIn={true} activeList={3} />
                <div className="wrapper">
                    <div id="shop-body">
                        <h1>Time to Shop!</h1>
                        <div id="shop-search-tags">
                            <Tags tagName="Search Code" isActive={true}/>
                            <Tags tagName="Search Author" isActive={false} />
                            <Tags tagName="Search Course" isActive={false} />
                            <Tags tagName="Search Learning Object" isActive={false} />
                            
                        </div>
                        <SearchBar />
                        <h2>Shop by Category <a href="#!">See All</a></h2>
                        <div className="shop-categories">
                            <CategoryBox />
                            <CategoryBox />
                            <CategoryBox />
                            <CategoryBox />
                        </div>
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
                            <h2>New Courses <a href="#!">See All</a></h2>
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
                            <h2>New Objects <a href="#!">See All</a></h2>
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
                    </div>
                </div>
            </div>
        )
    }
}

export default Shop
