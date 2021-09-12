import React, { Component } from 'react'
import Header from '../../components/header/Header'
import './Home.css'
import Rating from '../../components/rating/Rating'
import DummyVideo from './dummy-video.png'

class home extends Component {
    render() {
        return (
            <div>
                <Header isLoggedIn={true} activeList={1}/>
                <div className="wrapper">
                    <div id="home-body">
                        <h1>Welcome back, Charlene!</h1>

                        <div className="video-list">
                            <h2>Recommended For You <a href="#!">See All</a></h2>
                            <div className="video-boxes">
                                <section>
                                    <a href="#!">
                                        <figure>
                                            <img src={DummyVideo} />
                                            <figcaption>PHP 15.00</figcaption>
                                        </figure>
                                        <Rating maxNumber="5" activeNumber="4">10 videos</Rating>
                                        <div className="video-info">
                                            <h3>Course Title</h3>
                                            <p>Let’s add a short course description here which should be max two liner only I guess...</p>
                                        </div>
                                    </a>
                                </section>
                                <section>
                                    <a href="#!">
                                        <figure>
                                            <img src={DummyVideo} />
                                            <figcaption>PHP 15.00</figcaption>
                                        </figure>
                                        <Rating maxNumber="5" activeNumber="4"></Rating>
                                        <div className="video-info">
                                            <h3>Learning Object</h3>
                                            <p>Let’s add a short course description here which should be max two liner only I guess...</p>
                                        </div>
                                    </a>
                                </section>
                                <section>
                                    <a href="#!">
                                        <figure>
                                            <img src={DummyVideo} />
                                            <figcaption>PHP 15.00</figcaption>
                                        </figure>
                                        <Rating maxNumber="5" activeNumber="4"></Rating>
                                        <div className="video-info">
                                            <h3>Learning Object</h3>
                                            <p>Let’s add a short course description here which should be max two liner only I guess...</p>
                                        </div>
                                    </a>
                                </section>
                            </div>
                        </div>

                        <div className="video-list">
                            <h2>Recently Purchased <a href="#!">See All</a></h2>
                            <div className="video-boxes">
                            <section>
                                    <a href="#!">
                                        <figure>
                                            <img src={DummyVideo} />
                                        </figure>
                                        <Rating maxNumber="5" activeNumber="4">10 videos</Rating>
                                        <div className="video-info">
                                            <h3>Course Title</h3>
                                            <p>Let’s add a short course description here which should be max two liner only I guess...</p>
                                        </div>
                                    </a>
                                </section>
                                <section>
                                    <a href="#!">
                                        <figure>
                                            <img src={DummyVideo} />
                                        </figure>
                                        <Rating maxNumber="5" activeNumber="4"></Rating>
                                        <div className="video-info">
                                            <h3>Learning Object</h3>
                                            <p>Let’s add a short course description here which should be max two liner only I guess...</p>
                                        </div>
                                    </a>
                                </section>
                                <section>
                                    <a href="#!">
                                        <figure>
                                            <img src={DummyVideo} />
                                        </figure>
                                        <Rating maxNumber="5" activeNumber="4"></Rating>
                                        <div className="video-info">
                                            <h3>Learning Object</h3>
                                            <p>Let’s add a short course description here which should be max two liner only I guess...</p>
                                        </div>
                                    </a>
                                </section>
                            </div>
                        </div>
                        
                        <div className="video-list">
                            <h2>Continue Watching <a href="#!">See All</a></h2>
                            <div className="video-boxes">
                                <section>
                                    <a href="#!">
                                        <figure>
                                            <img src={DummyVideo} />
                                        </figure>
                                        <Rating maxNumber="5" activeNumber="4">10 videos</Rating>
                                        <div className="video-info">
                                            <h3>Course Title</h3>
                                            <p>Let’s add a short course description here which should be max two liner only I guess...</p>
                                        </div>
                                    </a>
                                </section>
                                <section>
                                    <a href="#!">
                                        <figure>
                                            <img src={DummyVideo} />
                                        </figure>
                                        <Rating maxNumber="5" activeNumber="4"></Rating>
                                        <div className="video-info">
                                            <h3>Learning Object</h3>
                                            <p>Let’s add a short course description here which should be max two liner only I guess...</p>
                                        </div>
                                    </a>
                                </section>
                                <section>
                                    <a href="#!">
                                        <figure>
                                            <img src={DummyVideo} />
                                        </figure>
                                        <Rating maxNumber="5" activeNumber="4"></Rating>
                                        <div className="video-info">
                                            <h3>Learning Object</h3>
                                            <p>Let’s add a short course description here which should be max two liner only I guess...</p>
                                        </div>
                                    </a>
                                </section>
                            </div>
                        </div>

                        <div className="video-list playlist">
                            <h2>Recently Playlist <a href="#!">See All</a></h2>
                            <div className="video-boxes">
                                <section>
                                    <a href="#!">
                                        <figure>
                                            <img src={DummyVideo} />
                                        </figure>
                                        <Rating maxNumber="5" activeNumber="4">10 videos</Rating>
                                        <div className="video-info">
                                            <h3>Course Title</h3>
                                            <p>Let’s add a short course description here which should be max two liner only I guess...</p>
                                        </div>
                                    </a>
                                </section>
                                <section>
                                    <a href="#!">
                                        <figure>
                                            <img src={DummyVideo} />
                                        </figure>
                                        <Rating maxNumber="5" activeNumber="4"></Rating>
                                        <div className="video-info">
                                            <h3>Learning Object</h3>
                                            <p>Let’s add a short course description here which should be max two liner only I guess...</p>
                                        </div>
                                    </a>
                                </section>
                                <section>
                                    <a href="#!">
                                        <figure>
                                            <img src={DummyVideo} />
                                        </figure>
                                        <Rating maxNumber="5" activeNumber="4"></Rating>
                                        <div className="video-info">
                                            <h3>Learning Object</h3>
                                            <p>Let’s add a short course description here which should be max two liner only I guess...</p>
                                        </div>
                                    </a>
                                </section>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default home
