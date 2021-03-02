import React from 'react';
import {Button} from "./Button";

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
        </div>
    )
}