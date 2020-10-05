import React, { useContext } from 'react';
import { Button, Container, FormControl, InputGroup, Nav, Navbar, Row } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import { UserContext } from '../../App';
import logo from '../../logos/logo.png';
import './Header.css';

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const history = useHistory()
    const navEvents = () => {
        history.push('/events')
    }
    const navHome = () => {
        history.push('/home')
    }
    const logOut = () => {
        setLoggedInUser({})
    }
    return (
        <Container>
            <Navbar bg="none" variant="light">
                <Navbar.Brand><Link to="/home"><img src={logo} alt="" /></Link></Navbar.Brand>
                <Nav className="ml-auto header-nav">
                    <Nav.Link onClick={navHome}>Home</Nav.Link>
                    <Nav.Link>Donation</Nav.Link>
                    <Nav.Link onClick={navEvents}>Events</Nav.Link>
                    <Nav.Link>Blogs</Nav.Link>
                    {
                        !loggedInUser.name ? <Link to='/login'><Button className="mr-2" variant="outline-primary">Login</Button></Link>
                            : <Button onClick={logOut} className="mr-2" variant="outline-primary">{loggedInUser.name}, Log Out</Button>
                    }
                    <Link to='/admin/registerdList'><Button variant="outline-dark">Admin</Button></Link>
                </Nav>
            </Navbar>
            <Row className="justify-content-md-center mt-5 pt-5">
                <h1>I GROW BY HELPING PEOPLE IN NEED.</h1>
                <InputGroup size="lg" className="mb-3 mt-2 search-bar">
                    <FormControl
                        placeholder="Search..."
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                    />
                    <InputGroup.Append>
                        <Button variant="primary">Search</Button>
                    </InputGroup.Append>
                </InputGroup>
            </Row>
        </Container>
    );
};

export default Header;