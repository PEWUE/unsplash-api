import React from 'react';
import './HomePage.css';
import SearchBar from "./SearchBar";

const HomePage = ({userSubmit}) => {
    return (
        <div className="home-page">
            <div className="container">
                <h1>Unsplash</h1>
                <p>The internet’s source of <a className="link" href="https://unsplash.com/license">freely-usable images.</a></p>
                <p>Powered by creators everywhere.</p>
                <SearchBar submit={userSubmit}/>
            </div>
        </div>
    );
};

export default HomePage;
