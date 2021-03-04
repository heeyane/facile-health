import React, {useState} from 'react'
import '../App.css'
import './SignIn.css'
import {Button} from "./Button";
import './Button.css'

// <h1 className='sign-up'>Sign Up</h1>

export default function SignIn() {


    return (
        <form className='form-container-inline'>
            <br/>
            <h3 className='sign-in-title'>Sign In</h3>
            <br/>

            <div className='form-wrapper'>

                <div className='first-sign-in'>
                    <label>Email Address:</label>
                    <input type="text" className="form-control" placeholder="Email Address" />
                </div>

                <div className='second-sign-in'>
                    <label>Password:</label>
                    <input type="password" className="form-control" placeholder="Password" />
                </div>

                <div className='third-sign-in'>
                    <label>Confirm Password:</label>
                    <input type="password" className="form-control" placeholder="Confirm Password" />
                </div>

            </div>

            <br/>

            <div className="sign-in-btn">
                <Button type='submit' className='btns' buttonStyle='btn--outline'
                        buttonSize='btn--medium'>Sign In
                </Button>
            </div>
            <br/>
            {/*<button type="submit" className="btn btn-primary btn-block">Sign Up</button>*/}

        </form>
    );
}
