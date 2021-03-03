import React from 'react';
import {Button} from "./Button";
import './Landing.css';
import '../App.css'

export default function Landing() {
    return (
        <div className='landing-container'>
            <h1>Manage Your Health, </h1>
            <br/>
            <br/>
            <br/>
            <br/>
            <h1> with Facile</h1>
            <br/>
            <p>Access a full suite of health services </p>
            <p>to care for every facet of your healthcare needs.</p>
            <br/>
            <br/>
            <div className="landing-btn">
                <Button className='btns' buttonStyle='btn--outline'
                        buttonSize='btn--large'>GET STARTED
                </Button>
            </div>

        </div>
    )
}