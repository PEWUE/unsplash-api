import React from 'react';
import './ResultPage.css';
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

const ResultPage = ({userSubmit, images, userQuery}) => {
    return (
        <div className="result-page">
            <div className="container">
                <SearchBar submit={userSubmit} userQuery={userQuery}/>
                <ImageList images={images}/>
            </div>
        </div>
    );
};

export default ResultPage;
