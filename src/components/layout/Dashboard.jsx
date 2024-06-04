import React from 'react';
import { Col, Container, Nav, Row } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { FaChalkboard, FaCreditCard,  FaHouse,  FaUsers } from 'react-icons/fa6';
import Header from '../pages/Shared/Header/Header';
import Footer from '../pages/Shared/Footer/Footer';
const Dashboard = () => {
    const   isAdmin = true
    return (
        <div>
        
            <Helmet>
                <title>Talent Cottage | Dashboard</title>
            </Helmet>
            <Header></Header>
            <Container fluid>
                <Row>
                    { isAdmin?
                        <Col xs={2} className=" border-right bg-secondary  " style={{minHeight: '50vh'}}>
                            <Nav className="flex-column pt-5" >
                                <Link style={{textDecoration: 'none'}} className='text-white  ' to='/' ><FaHouse /> Dashboard</Link> <br/>
                                <Link style={{textDecoration: 'none'}} className='text-white  ' to='/dashboard/manageClass' > <FaChalkboard /> Manage Classes</Link><br/>
                                <Link style={{textDecoration: 'none'}} className='text-white ' to='/dashboard/allUsers' ><FaUsers/> Manage Users</Link>

                            </Nav>
                        </Col> : isInstructor ?
                        <Col xs={2}  className="bg-light border-right" style={{minHeight: '50vh'}}>
                        <Nav className="flex-column  pt-5">
                        <Link style={{textDecoration: 'none'}} className='text-dark  ' to='/' ><FaHouse /> Dashboard</Link> <br />
                        <Link style={{textDecoration: 'none'}} className='text-dark  ' to='/dashboard/addClass' ><FaChalkboard /> Add a Class</Link> <br />
                        <Link style={{textDecoration: 'none'}} className='text-dark ' to='/dashboard/myClass' ><FaMusic /> My Classes</Link>
                        
                        </Nav>
                        </Col> :
                        <Col xs={2}  className="bg-light border-right" style={{minHeight: '50vh'}}>
                        <Nav className="flex-column  pt-5">
                          <Link style={{textDecoration: 'none'}} className='text-dark  ' to='/' ><FaHouse /> Dashboard</Link><br/>
                          <Link style={{textDecoration: 'none'}} className='text-dark  ' to='/dashboard/selectedClass' > <FaChalkboard /> My Selected Classes</Link><br/>
                          <Link style={{textDecoration: 'none'}} className='text-dark ' to='/' ><FaGuitar /> My Enrolled Classes</Link><br/>
                          <Link style={{textDecoration: 'none'}} className='text-dark  ' to='/' ><FaCreditCard /> Payment History</Link>
                        </Nav>
                      </Col> 
                    }
                    <Col xs={10}>
                    Dashboard
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Dashboard;