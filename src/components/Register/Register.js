import React, { useContext, useEffect, useState } from 'react';
import { Button, Container, Form, Row } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import { UserContext } from '../../App';
import logo from '../../logos/logo.png';
import './Register.css';
import fakeEvents from '../fakeEvents';

const Register = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const { id } = useParams();
    const [events, setEvents] = useState([])
    useEffect(() => {
        setEvents(fakeEvents)
    }, []);

    const eventData = events.find(event => event.id === parseInt(id)) || {};

    const [validated, setValidated] = useState(false);
    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };
    return (
        <Container>
            <div className="text-center">
                <Link to="/home"><img className="mt-5 mb-5" src={logo} alt="" /></Link>
            </div>
            <Row className="justify-content-md-center mb-5" >
                <Form className="register-form" noValidate validated={validated} onSubmit={handleSubmit}>
                    <h3 className="mb-3">Register as a Volunteer</h3>
                    <Form.Group controlId="name">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control required type="name" placeholder="Enter name" value={loggedInUser.name} />
                    </Form.Group>
                    <Form.Group controlId="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control required type="email" placeholder="Email" value={loggedInUser.email} />
                    </Form.Group>
                    <Form.Group controlId="date">
                        <Form.Label>Date</Form.Label>
                        <Form.Control required type="date" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group controlId="description">
                        <Form.Label>Description</Form.Label>
                        <Form.Control required type="text" placeholder="Description" />
                    </Form.Group>
                    <Form.Group controlId="event">
                        <Form.Label>Event</Form.Label>
                        <Form.Control required type="text" placeholder="Event" value={eventData.name}/>
                    </Form.Group>
                    <Button className="form-control" variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Row>
        </Container>
    );
};

export default Register;