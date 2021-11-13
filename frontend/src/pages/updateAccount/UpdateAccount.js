import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Header from '../../components/header/Header'
import './UpdateAccount.css'
import UserCircle from '../../images/user-circle.png'

class UpdateAccount extends Component {
    render() {
        return (
            <div>
                <div className="wrapper">
                    <div id="update-account-body">
                        <Header isLoggedIn={true} activeList={5} />
                        <h1 className="header-title">My Account</h1>
                        <div className="left-nav">
                            <ul>
                                <li className={this.props.activeList === 1 ? "active" : ""}><Link to="/my-waller">My Waller</Link></li>
                                <li className={this.props.activeList === 2 ? "active" : ""}><Link to="/update-account">Update Account</Link></li>
                                <li className={this.props.activeList === 3 ? "active" : ""}><Link to="/purchase-history">Purchase History</Link></li>
                                <li className={this.props.activeList === 4 ? "active" : ""}><Link to="/admin-panel">Admin Panel</Link></li>
                                <li className={this.props.activeList === 5 ? "active" : ""}><Link to="/logout">Logout</Link></li>
                            </ul>
                        </div>
                        <div className="update-account-content">
                            <div className="photo-field">
                                <figure>
                                    <img src={UserCircle}/>
                                </figure>
                                <a className="btn btn-secondary" href="#!">Upload New Photo</a>
                            </div>
                            <form id="update-account-form">
                                <div className="form-row">
                                    <label>Student</label>
                                    <select className="form-input">
                                        <option>Student</option>
                                        <option>option 2</option>
                                        <option>option 3</option>
                                    </select>
                                </div>
                                <div className="form-row">
                                    <label>Email</label><input className="form-input" />
                                </div>
                                <div className="form-row">
                                    <label>Password</label><input className="form-input" /><a href="#!" id="change-password">Change Password</a>
                                </div>
                                <div className="form-row">
                                    <label>First Name</label><input className="form-input" />
                                </div>
                                <div className="form-row">
                                    <label>Last Name</label><input className="form-input" />
                                </div>
                                <div className="form-row">
                                    <label>Mobile Number</label><input className="form-input" />
                                </div>
                                <div className="form-row">
                                    <label>Address</label>
                                   <div className="address-inputs">
                                        <div className="labeled-input"><label>Street</label><input /></div>
                                        <div className="labeled-input"><label>City</label><input /></div>
                                        <div className="labeled-input"><label>State</label><input /></div>
                                        <div className="labeled-input">
                                            <label>Country</label>
                                            <select>
                                                <option>Option 1</option>
                                                <option>Option 2</option>
                                            </select>
                                        </div>
                                        <div className="labeled-input"><label>Postal Code</label><input /></div>
                                   </div>
                                </div>
                                <div className="form-row">
                                    <label>Educational Level</label>
                                    <select className="form-input">
                                        <option>University</option>
                                        <option>Option 2</option>
                                    </select>
                                </div>
                                <div className="form-row">
                                    <a href="#!" className="btn btn-secondary">Cancel</a>
                                    <a href="#!" className="btn btn-primary">Save Changes</a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default UpdateAccount
