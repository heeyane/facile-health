import React from 'react'
import '../App.css'
import './SignUp.css'
import {Button} from "./Button";
import './Button.css'

// <h1 className='sign-up'>Sign Up</h1>

export default function SignUp() {
    return (
        <form className='form-container-inline'>
            <br/>
            <h3 className='sign-up-title'>Sign Up</h3>
            <br/>

            <div className='form-wrapper'>

                <div className='first'>
                    <label>First Name:</label>
                    <input type="text" className="form-control" placeholder="First Name" />
                </div>

                <div className='second'>
                <label>Last Name:</label>
                <input type="text" className="form-control" placeholder="Last Name" />
                </div>

                <div className='third'>
                <label>Email Address:</label>
                <input type="email" className="form-control" placeholder="Enter Email" />
                </div>

                <div className='fourth'>
                <label>Password:</label>
                <input type="password" className="form-control" placeholder="Enter Password" />
                </div>
            </div>

            <br/>

            <div className="sign-up-btn">
                <Button type='submit' className='btns' buttonStyle='btn--outline'
                        buttonSize='btn--medium'>Sign Up
                </Button>
            </div>
            {/*<button type="submit" className="btn btn-primary btn-block">Sign Up</button>*/}
            <p className="forgot-password text-right">
                Already registered? <a href="/sign-in">sign in</a>
            </p>
        </form>
    );
}
