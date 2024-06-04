import React from 'react';
import { Button, Container, Nav, NavDropdown, Navbar,Image } from 'react-bootstrap';
import { Link,useNavigate } from 'react-router-dom';
import logo from '../../../../assets/logo.png'
import useAuth from '../../../hooks/useAuth'

const Header = () => {
    const {user ,logOut}= useAuth();
    const navigate = useNavigate();
    const handleLogOut = () => {
      logOut()
          .then(() => { })
          .catch(error => console.log(error));
          navigate('/');
  }

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
                        <Nav.Link href="/dashboard">Dashboard</Nav.Link>
                    </Nav>
                    <Nav>
                        {
                            user ? <>
                            
                            <Image src={user?.photoURL} alt="" width={'50px'} height={'50px'}  roundedCircle/> {' '}
                                <Button onClick={handleLogOut} variant='dark' >LogOut</Button>
                            </> : <>
                                <Link to='/login'>
                                    <Button variant='light' >Login</Button>
                                </Link>
                            </>
                        }
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;