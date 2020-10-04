import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import './Events.css';
import { Link, useHistory } from 'react-router-dom';
import fakeEvents from '../fakeEvents';

const Events = (props) => {
    const [events, setEvents] = useState([]);
    useEffect(() => {
        setEvents(fakeEvents)
    }, []);
    // const {name, img} = props.event;
    // const history = useHistory();
    // const handleEvent = (id) => {
    //     history.push(`/register/${id}`)
    // }
    return (
        <Container className="text-center" >
            <Row className="mt-5">
                {
                    events.map(event =>
                        <Col key={event.id} sm={3}>
                            <Link to={`/register/${event.id}`}>
                                <Card className="bg-primary mb-4 card-style">
                                    <Card.Img src={event.img} alt="image" />
                                    <Card.Title >{event.name}</Card.Title>
                                </Card>
                            </Link>
                        </Col>
                    )
                }
            </Row>

            {/* <Row className="mt-5">
                {
                    events.map(event =>
                        <Col key={event.id} sm={3}>
                            <Card onClick={() => handleEvent(event.id)} className="bg-primary mb-4 card-style">
                                <Card.Img src={event.img} alt="image" />
                                <Card.Title >{event.name}</Card.Title>
                            </Card>
                        </Col>
                    )
                }
            </Row> */}

            {/* <Row className="mt-5">
                <Col sm={3}>
                    <Card onClick={handleEvent} className="bg-primary mb-4 card-style">
                        <Card.Img src={img} alt="image" />
                        <Card.Title>{name}</Card.Title>
                    </Card>
                </Col>
            </Row> */}
        </Container>
    );
};

export default Events;