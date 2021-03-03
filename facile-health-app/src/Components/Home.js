import React from 'react';
import '../App.css';
import Landing from "./Landing";
import Cards from "./Cards";
import SearchPage from "./SearchPage";
// import Footer from "./Footer";

function Home () {
    return (
        <>
            <Landing />
            <SearchPage />
            <Cards />
            {/*<Footer />*/}
        </>
    );
}

export default Home;