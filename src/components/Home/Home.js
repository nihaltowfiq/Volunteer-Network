import React, { useEffect, useState } from 'react';
import Events from '../Events/Events';
import Header from '../Header/Header';
// import fakeEvents from '../fakeEvents.json';


const Home = () => {
    // const [events, setEvents] = useState([]);
    // useEffect(() => {
    //     setEvents(fakeEvents)
    // }, []);
    return (
        <div>
            <Header></Header>
            <Events></Events>
            {/* {
                events.map(event => <Events event={event}></Events>)
            } */}
        </div>
    );
};

export default Home;