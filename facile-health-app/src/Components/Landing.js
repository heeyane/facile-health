import React from 'react';
import {Button} from "./Button";
import './Landing.css';
import '../App.css'

export default function Landing() {
    return (
        <div className='landing-container'>
            <h1>Manage Your Health with Facile</h1>
            <p>Access a full suite of health services to care for every facet of your healthcare needs.</p>
            <div className="landing-btn">
                <Button className='btns' buttonStyle='btn--outline'
                        buttonSize='btn--large'>GET STARTED
                </Button>
            </div>

        </div>
    )
}