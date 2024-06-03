import React from 'react';
import { Button, Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../../assets/logo.png'

const Header = () => {
    return (
        <div>
            <Navbar expand="lg" bg="dark" data-bs-theme="dark">
                <Container>
                <Navbar.Brand href="/">
                    <img
                    alt=""
                    src={logo}
                    width="40"
                    height="40"
                    className="d-inline-block align-top"
                    />{' '}
                   Talent Cottage
                </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/courses">Course</Nav.Link>
                        <Nav.Link href="/instructors">Instructor</Nav.Link>
                        <Nav.Link href="#link">Dashboard</Nav.Link>
                    </Nav>
                    <Nav>
                        <Link to='/login'>
                            <Button variant='light'>Login</Button>
                        </Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;