import React, {useState} from 'react';
import './App.css';
import HomePage from "./HomePage";
import ResultPage from "./ResultPage";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import axios from 'axios';
const API_KEY = process.env.REACT_APP_UNSPLASH_API_KEY;

const App = () => {

    const [images, setImages] = useState([]);
    const [userQuery, setUserQuery] = useState("");


    const onSearch = async (query) => {
        const response = await axios.get('https://api.unsplash.com/search/photos', {
            params: { query,     //  query : query
                    per_page: 30 },
            headers: {
                Authorization: `Client-ID ${API_KEY}`
            }
        })
        setImages(response.data.results);
        setUserQuery(query);
    }

    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <HomePage userSubmit={onSearch}/>
                </Route>
                <Route path="/result-page">
                    <ResultPage userSubmit={onSearch} images={images} userQuery={userQuery}/>
                </Route>
            </Switch>
        </Router>
    );
};

export default App;
