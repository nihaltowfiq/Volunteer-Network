import React from 'react';
import Events from '../Events/Events';
import Header from '../Header/Header';
import './Home.css';

const Home = () => {
    return (
        <div className="bg-home">
            <main>
                <Header></Header>
                <Events></Events>
            </main>
        </div>
    );
};

export default Home;