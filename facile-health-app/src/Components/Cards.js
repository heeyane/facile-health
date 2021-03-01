import React from 'react';
import CardItem from "./CardItem";
import './Cards.css';

export default function Cards() {
    return (
        <div className='cards'>
            <h1>General Health & Wellness, simplified.</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem
                        src="https://cdn.pixabay.com/photo/2020/01/07/23/45/health-4748928_1280.png"
                        text="General Health"
                        label='General Health'
                        path='services' />
                    </ul>
                </div>
            </div>
        </div>
    )
}