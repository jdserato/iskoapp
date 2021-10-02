import React, { Component } from 'react'
import Header from '../../components/header/Header'
import Stepper from '../../components/stepper/Stepper'
import CategoryBox from '../../components/categoryBox/CategoryBox'
import './Signup.css'
import UserTypeImg from '../../images/user-type.png'

class Signup extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             selectedUserType: 1,
             stepNumber: 1,
             maxStepper: 4,
             email: '',
             password: '',
             password2: '',
             fname:'',
             lname:'',
             bdate:'',
             contactNo:'',
             address:'',
             educationLevel:'',
             verificationCode:'',
        }
    }
    

    onUserTypeClick(n){
        this.setState({
            selectedUserType: n
        })
    }

    onNextClick(){
        if(this.state.stepNumber < this.state.maxStepper){
            this.setState({
                stepNumber: this.state.stepNumber+1
            })
        }
    }

    onPrevClick(){
        if(this.state.stepNumber > 1){
            this.setState({
                stepNumber: this.state.stepNumber-1
            })
        }
    }

    handleChange(event){
        const value = event.target.value;
        this.setState({
            [event.target.name]: value
        })
    }

    render() {
        let signupBody
        if(this.state.stepNumber === 1){
            signupBody = <div className="step1">
                <form className="form">
                    <div className="labeled-input"><label>Email </label><input type="text" name="email" value={this.state.email} onChange={this.handleChange.bind(this)}/></div>
                    <div className="labeled-input"><label>Password </label><input type="password" name="password" value={this.state.password} onChange={this.handleChange.bind(this)}/></div>
                    <div className="labeled-input"><label>Confirm Password </label><input type="password" name="password2" value={this.state.password2} onChange={this.handleChange.bind(this)}/></div>
                </form>
                <div id="signup-bottom">
                    <h2>Choose your user type</h2>
                    <ul className="user-types">
                        <li className={this.state.selectedUserType === 1 ? 'user-type active' : 'user-type'}>
                            <a href="#!" onClick={() => this.onUserTypeClick(1)}><img src={UserTypeImg} alt="user icon"/></a>
                            <p>Student</p>
                        </li>
                        <li className={this.state.selectedUserType === 2 ? 'user-type active' : 'user-type'}>
                            <a href="#!" onClick={() => this.onUserTypeClick(2)}><img src={UserTypeImg} alt="user icon"/></a>
                            <p>Teacher</p>
                        </li>
                    </ul>
                    
                </div>
            </div>
        }
        else if(this.state.stepNumber === 2){
            signupBody = <div className="step2">
                <form className="form">
                    <h2>Basic Details</h2>
                    <div className="labeled-input"><label>First Name </label><input type="text" name="fname" value={this.state.fname} onChange={this.handleChange.bind(this)} /></div>
                    <div className="labeled-input"><label>Last Name </label><input type="text" name="lname" value={this.state.lname} onChange={this.handleChange.bind(this)} /></div>
                    <div className="labeled-input"><label>Birth Date </label><input type="date" name="bdate" value={this.state.bdate} onChange={this.handleChange.bind(this)} /></div>
                    <div className="labeled-input"><label>Contact Number </label><input type="text" name="contactNo" value={this.state.contactNo} onChange={this.handleChange.bind(this)} /></div>
                    <div className="labeled-input"><label>Address </label><input type="text" name="address" value={this.state.address} onChange={this.handleChange.bind(this)} /></div>
                    <div className="labeled-input">
                        <label>Education Level </label>
                        <select className="labeled-input" type="text" name="educationLevel" value={this.state.educationLevel} onChange={this.handleChange.bind(this)}>
                            <option>option 1</option>
                            <option>option 2</option>
                            <option>option 3</option>
                        </select>
                    </div>
                </form>
            </div>
        }
        else if(this.state.stepNumber === 3){
            signupBody = <div className="step3">
                <form className="form">
                    <h2>Email Verification</h2>
                    <p>We’ve sent a code to your register email address. Please type the verification code below to successfully verify your email. </p>
                    <div className="labeled-input"><label>Verification Code </label><input type="text" name="verificationCode" value={this.state.verificationCode} onChange={this.handleChange.bind(this)} /></div>
                </form>
            </div>
        }
        else if(this.state.stepNumber === 4){
            signupBody = <div className="step4">
                <div className="step4_top">
                    <h2>Congratulations!</h2>
                    <p>You’ve successfully registered to ISKO! Now go ahead and choose 5 Categories to get started.</p>
                </div>
                <form className="form">
                    <div className="form_info">
                        <h2>Categories I Like</h2>
                        <p>Select up to 5 Categories that spark your interest!</p>
                    </div>
                    <div className="categories">
                        <section>
                            <CategoryBox isActive={false}/>
                        </section>
                        <section className="active">
                            <CategoryBox isActive={false}/>
                        </section>
                        <section>
                            <CategoryBox isActive={true}/>
                        </section>
                        <section className="active">
                            <CategoryBox isActive={true}/>
                        </section>
                        <section className="active">
                            <CategoryBox isActive={true}/>
                        </section>
                        <section>
                            <CategoryBox isActive={false}/>
                        </section>
                    </div>
                </form>
            </div>
        }
        return (
            <div>
                <Header />
                <div id="signup-container">
                    <h2>Sign Up</h2>
                    <Stepper maxNumber={this.state.maxStepper} activeNumber={this.state.stepNumber} />
                    {signupBody}
                    <div className="footer-btn">
                        <a className="btn btn-secondary" href="#!" onClick={this.onPrevClick.bind(this)}>{this.state.stepNumber === 1 ? 'Cancel' : 'Previous'}</a>
                        <a className="btn btn-primary" href="#!" onClick={this.onNextClick.bind(this)}>Next</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Signup
