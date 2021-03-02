import React from 'react';
import '../App.css';
import Landing from "./Landing";
import Cards from "./Cards";
import Footer from "./Footer";

function Home () {
    return (
        <>
            <Landing />
            <Cards />
            <Footer />
        </>
    );
}

export default Home;