import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import './Events.css';
import fakeEvents from '../fakeEvents.json';

const Events = () => {
    const [events, setEvents] = useState([]);
    useEffect(() => {
        setEvents(fakeEvents)
    }, []);
    return (
        <Container className="text-center" >
            
        </Container>
    );
};

export default Events;