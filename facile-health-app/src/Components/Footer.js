import React from 'react';
import {Button} from "./Button";
import './Footer.css'
import {Link} from "react-router-dom";

export default function Footer() {
    return (
        <div className='footer-container'>
            <section className="footer-subscription">
                <p className="footer-subscription-heading">
                    Join our newsletter to gain access to knowledge on
                    health and wellness, eradicating the stigma encompassing sensitive health.
                </p>
                <p className="footer-subscription-text">
                    Unsubscribe anytime
                </p>
                <div className="input-areas">
                    <form>
                        <input type="email" name="email" placeholder="Your Email" className="footer-input"/>
                        <Button buttonStyle='btn--outline'>Subscribe</Button>
                    </form>
                </div>
            </section>
            <div className="footer-links">
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>About Us</h2>
                        <Link to='/'>FAQs</Link>
                        <Link to='/'>Tele-health Privacy Policy</Link>
                        <Link to='/'>Privacy Policy</Link>
                        <Link to='/'>Terms of Use</Link>
                    </div>
                </div>
            </div>

        </div>
    )
}