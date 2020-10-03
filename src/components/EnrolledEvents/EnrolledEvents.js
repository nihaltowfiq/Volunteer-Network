import React, { useContext } from 'react';
import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import './EnrolledEvents.css';
import logo from '../../logos/logo.png';
import image from '../../images/extraVolunteer.png';


const EnrolledEvents = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <Container>
            <Navbar bg="none" variant="light" className="mb-5">
                <Navbar.Brand><Link to="/home"><img src={logo} alt="" /></Link></Navbar.Brand>
                <Nav className="ml-auto header-nav">
                    <Nav.Link><Link to="/home">Home</Link></Nav.Link>
                    <Nav.Link><Link to="">Donation</Link></Nav.Link>
                    <Nav.Link><Link to="">Events</Link></Nav.Link>
                    <Nav.Link><Link to="">Blogs</Link></Nav.Link>
                    {
                        loggedInUser && <Nav.Link style={{ fontWeight: "700", color: "black" }}>{loggedInUser.name}</Nav.Link>
                    }
                </Nav>
            </Navbar>
            <h1>This is Events</h1>
            <Row>
                <Col md={6} >
                    <Row className="event-card mx-2">
                        <Col sm={6}>
                            <img src={image} alt="" />
                        </Col>
                        <Col sm={6}>
                            <div>
                                <h3>This is inside</h3>
                                <h5>05,sep, 2020</h5>
                                <button>Cancel</button>
                            </div>
                        </Col>
                    </Row>
                </Col>
                <Col md={6}>
                    <Row className="event-card mx-2">
                        <Col sm={6}>
                            <img src={image} alt="" />
                        </Col>
                        <Col sm={6}>
                            <div>
                                <h3>This is inside</h3>
                                <h5>05,sep, 2020</h5>
                                <button>Cancel</button>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default EnrolledEvents;