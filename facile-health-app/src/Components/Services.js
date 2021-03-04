import React from 'react'
import '../App.css'
import './Services.css'
import {Button} from "./Button";
import { useHistory } from 'react-router-dom'



export default function Services() {
    const history = useHistory()
    console.log(history)
    return (
        // <h1 className='services'>Services</h1>
        <div className='full-page'>

            <div className='instruction-container'>
            <br/>
            <h1 className='instruction-title'>How to use Facile Health:</h1>
            <br/>
            <u><h2 className='step-title'>1. Connect To A Local General Practitioner (GP)</h2></u>
            <br/>
            <p className='step-instructions'>Create an account & under Video Consultation, you may choose from
            "See Next Available GP Now" or "Search for GP" to schedule a later appointment.</p>
            <br/>

            <u><h2 className='step-title'>2. Video Consult A Doctor</h2></u>
            <br/>
            <p className='step-instructions'>Check for suitability of consultation from the homepage of Facile Health. Access your
            medical history, records and medical documents directly in "My Account".
            Should your condition be unsuitable for tele-consultation, you will be advised
            to go to the clinic or a hospital adn your call will be ended without charge.</p>
            <br/>

            <u><h2 className='step-title'>3. Medication Delivered</h2></u>
            <br/>
            <p className='step-instructions'>The Facile Health Courier Team delivers your medication securely to you within 3 hours.
            Delivery is free. After 3 days, the Facile Health Team follows up to check with you
            on your condition.</p>

                <br/>
                <br/>

                {/*adding horizontal line*/}
                <hr/>

            </div>

            <br/>

            <div className='service-container'>

                <h1>General Health</h1>

                <button onClick={() => history.push('/sign-up')} className="button is-warning">Consult Now</button>

                <h2>Sexual Health</h2>

                <button onClick={() => history.push('/sign-up')} className="button is-warning">Consult Now</button>

                <h2>Tele-Therapy</h2>

                <button onClick={() => history.push('/sign-up')} className="button is-warning">Consult Now</button>

            </div>
        </div>
    )}