import React from 'react';
import { Col, Container, Nav, Row } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';
import {  Outlet } from 'react-router-dom';
import { FaChalkboard, FaCreditCard,  FaHouse,  FaBookOpenReader,  FaUsers ,FaLaptopCode} from 'react-icons/fa6';
import Header from '../pages/Shared/Header/Header';
import Footer from '../pages/Shared/Footer/Footer';
import useAdmin from '../hooks/useAdmin';
import useInstructor from '../hooks/useInstructor';
import ActiveLink from '../pages/Shared/ActiveLink/ActiveLink';
import './Dashboard.css'

const Dashboard = () => {
    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();
    return (
        <div>
        
            <Helmet>
                <title>Talent Cottage | Dashboard</title>
            </Helmet>
            <Header></Header>
            <Container fluid>
                <Row>
                    { isAdmin?
                      
                        <Col xs={2} className=" border-right bg  " style={{minHeight: '50vh'}}>
                            <Nav className="flex-column pt-5 sideNav" >
                                <ActiveLink  to='/dashboard/adminHome' ><FaHouse /> Dashboard</ActiveLink> <br/>
                                <ActiveLink  to='/dashboard/manageClass' > <FaChalkboard /> Manage Classes</ActiveLink><br/>
                                <ActiveLink to='/dashboard/manageUser' ><FaUsers/> Manage Users</ActiveLink>

                            </Nav>
                        </Col> : isInstructor?
                        
                       <Col xs={2}  className="bg border-right" style={{minHeight: '50vh'}}>
                            <Nav className="flex-column sideNav pt-5">
                                <ActiveLink  to='/dashboard/instructorHome' ><FaHouse /> Dashboard</ActiveLink> <br />
                                <ActiveLink  to='/dashboard/addClass' ><FaChalkboard /> Add a Class</ActiveLink> <br />
                                <ActiveLink to='/dashboard/myClass' ><FaBookOpenReader />  My Classes</ActiveLink>
                                
                            </Nav>
                        </Col> :
                        <Col xs={2}  className="bg border-right" style={{minHeight: '50vh'}}>
                        <Nav className="flex-column  pt-5 sideNav ">
                          <ActiveLink  to='/dashboard/studentHome' ><FaHouse /> Dashboard</ActiveLink><br/>
                          <ActiveLink   to='/dashboard/selectedCourse' > <FaChalkboard /> My Selected Course</ActiveLink><br/>
                          <ActiveLink to='/' ><FaLaptopCode /> My Enrolled Classes</ActiveLink><br/>
                          <ActiveLink  to='/' ><FaCreditCard /> Payment History</ActiveLink>
                        </Nav>
                      </Col> 
                    }
                    <Col xs={10}>  
                        <Outlet></Outlet>
                     </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Dashboard;